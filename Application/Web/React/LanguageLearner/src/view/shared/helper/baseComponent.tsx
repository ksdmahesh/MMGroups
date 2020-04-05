import * as React from 'react';
import { Dispatch, store } from '../../../constants/defaultConstants';
import { PropertyWindowProps, DataProps, AllControlProps } from '../../dynamic/renderViewConstants';
import TypeCheck, { HelperClass } from './typeCheck';
import uuid from 'uuid';
import { DroppableProvided, Draggable, Droppable, DraggableProvided, DraggableStateSnapshot, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { Notice, DroppedItem } from '../dnd/dndConstants';
import { Grid, Card, CardContent } from '@material-ui/core';
import ExpansionPanels from '../materialUI/expansionPanel';

var dispatch: Dispatch;

const AllDataProps = [
    'steps',
    'sections',
    'cells',
    'rows',
    'columns',
    'controls'
];

const AllDataIndex = [
    'stepIndex',
    'sectionIndex',
    'cellIndex',
    'rowIndex',
    'columnIndex',
    'controlIndex'
];

// tslint:disable-next-line: no-any
export default class BaseComponent<T = any, U = any> extends React.Component<T, U> {

    getPlaceholder(provided: DroppableProvided, value: string) {
        return (
            !provided.placeholder && (
                <Notice style={{ userSelect: 'none' }} >
                    {value}
                </Notice>
            )
        );
    }

    // tslint:disable-next-line: no-any
    clone(data: any) {
        return JSON.parse(JSON.stringify(data));
    }

    DataHeader = AllDataProps;

    DataIndex: any = AllDataIndex;

    // tslint:disable-next-line: no-any
    constructor(props: any) {
        super(props);
        if (!dispatch) {
            dispatch = store.dispatch;
        }
        this.GetDragDropItems = this.GetDragDropItems.bind(this);
    }

    dispatchStore(data: {}, location: string = '', type: string = 'dispatch') {
        if (location) {
            dispatch({ type: type, data: this.setObjectBasedOnPath(location, data) });
        } else {
            dispatch({ type: type, data: data });
        }
    }

    getState(name?: string, location?: string) {
        if (location) {
            return this.getValueFromObjectPath(location);
        } else if (name) {
            return store.getState()[name];
        } else {
            return store.getState();
        }
    }

    // tslint:disable-next-line: no-any
    getDataFromEvent(e: any, isCheckbox: boolean = false) {
        if (isCheckbox) {
            return e.currentTarget.checked;
        }
        return e.currentTarget.value;
    }

    // tslint:disable-next-line: no-any
    setAttributes(control: AllControlProps, callback?: any, isCheckbox?: boolean, isArray?: boolean, defaultValue?: string) {
        if (callback) {
            return callback;
        }

        var id = control.id;
        if (control.location) {
            id = control.location.substr(control.location.lastIndexOf('.') + 1);
        }

        if (isCheckbox) {
            return {
                checked: this.getState(id, control.location) || control.checked || false,
                // tslint:disable-next-line: no-any
                onChange: (e: any) => this.dispatchStore(
                    {
                        [id || '']: this.getDataFromEvent(e, isCheckbox)
                    },
                    control.location
                ),
                name: control.name,
                id: id
            };
        }
        return {
            value: this.getState(id, control.location) || control.value || (isArray ? [] : '') || defaultValue,
            onChange: (control.disabled
                ?
                // tslint:disable-next-line: no-any
                (e: any) => { /** */ }
                :
                // tslint:disable-next-line: no-any
                (e: any) => this.dispatchStore(
                    {
                        [id || '']: this.getDataFromEvent(e)
                    },
                    control.location
                )
            ),
            name: control.name,
            id: id
        };
    }

    // tslint:disable-next-line: no-any
    cardRaised = (e: any, index: string, control: PropertyWindowProps) => {
        if (e.currentTarget.getAttribute('aria-label') === 'sections') {
            if (this.getState('isChildCalled') !== false) {
                this.dispatchStore({ isChildCalled: false });
            } else {
                this.dispatchStore({
                    raised: index,
                    isChildCalled: false,
                    propertyWindow: control
                });
            }
        } else {
            if (this.getState('isChildCalled') !== true) {
                this.dispatchStore({
                    raised: index,
                    isChildCalled: true,
                    propertyWindow: control
                });
            }
        }
    }

    getValueFromObjectPath = (key: string) => {
        // return  getValueFromPath;
        // let segments = key.split('.');
        let segments = key.split(/\.|\[|\]/igm).filter((innerKey) => innerKey);

        // tslint:disable-next-line:no-any
        var value: any = store.getState();
        for (const segment of segments) {
            if (segment === '') {
                continue;
            }
            if (!value) {
                value = undefined;
                break;
            }

            value = value[segment];
        }
        return value;
    }

    // tslint:disable-next-line:no-any
    setObjectBasedOnPath = (key: string, data: any): object => {
        let root = store.getState();
        // let segments = key.split('.');
        let segments = key.split(/\.|\[|\]/igm).filter((innerKey) => innerKey);

        var value = root;
        var segment;
        for (let index = 0; index < segments.length - 1; index++) {
            segment = segments[index];
            if (segment === '') {
                continue;
            }
            if (!value[segment]) {
                if (/^\d+$/igm.test(segments[index + 1])) {
                    value[segment] = [];
                } else {
                    value[segment] = {};
                }
            }

            value = value[segment];
        }

        segment = segments[segments.length - 1];

        if (segment) {
            if (/^\d+$/igm.test(segment)) {
                value[segment] = { ...value[segment], ...data };
            } else {
                value[segment] = (HelperClass.containsKey(data, segment))
                    ?
                    data[segment]
                    :
                    { ...value[segment], ...data };
                // HelperClass.containsKey(data, segment) ? data[segment] : data;
            }
            value = value[segment];
        } else if (TypeCheck.isObject(data)) {
            if (!value) {
                value = {};
            }
            for (const keys in data) {
                if (data.hasOwnProperty(keys)) {
                    value[keys] = data[keys];
                }
            }
        }

        return root;
    }

    setUuid(formdata: any, header: string = 'Steps') {
        formdata.id = uuid();
        if (!formdata.name) {
            formdata.name = header;
        }
        var items: any = [];
        for (let index = 0; index < this.DataHeader.length; index++) {
            items = formdata[this.DataHeader[index]];
            if (items) {
                for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
                    this.setUuid(items[itemIndex], this.DataHeader[index]);
                }
            }
        }

    }

    setInitializeValues(formdata: DataProps, props: {} = {}) {
        var data = { formdata: formdata };
        var baseId = uuid();
        var exceptionalStepsId = [uuid(), uuid()];

        if (data.formdata.steps && !data.formdata.id) {
            this.setUuid(data.formdata);
            data.formdata.steps.push(
                // {
                //     id: exceptionalStepsId[0],
                //     name: 'Review',
                //     label: 'Review',
                //     sections: []
                // },
                {
                    id: exceptionalStepsId[1],
                    name: 'Add Step',
                    label: 'Add Step',
                    sections: []
                }
            );
        }

        this.dispatchStore({
            ...data,
            currentStep: 0,
            baseId: baseId,
            isChildCalled: false,
            raised: '',
            modalOpen: false,
            exceptionalStepsId: exceptionalStepsId,
            propertyWindow: {},
            ...props
        });

    }

    getPropertyWindowControl(control: AllControlProps) {
        return control;
    }

    GetDragDropItems = (
        props: {
            item: {
                id: string,
                name: string,
                label: string,
                type: string,
                aria: string
            },
            index: number,
            dragIndex: number,
            itemRaised: string,
            stepIndex: number,
            sectionIndex: number,
            cellIndex: number,
            rowIndex: number,
            columnIndex: number,
            controlIndex: number,
            isDropDisabled: boolean,
            isVertical: boolean,
            location: string,
            content: (
                dragProvider?: DraggableProvided,
                dropProvider?: DroppableProvided,
                snapshot?: DraggableStateSnapshot,
                dropSnapshot?: DroppableStateSnapshot
            ) => JSX.Element | string
        }
    ) => {
        var item = props.item;
        var raised = props.itemRaised === `${item.aria + item.id + props.index}`;
        return (
            <DroppedItem>
                <Grid container={true} direction="row">
                    <Grid item={true} xs={12} md={12}>
                        <Card
                            {...{ 'aria-label': item.aria }}
                            onClick={(e) => this.cardRaised(
                                e,
                                item.aria + item.id + props.index,
                                {
                                    control: this.getPropertyWindowControl({
                                        name: item.name,
                                        type: item.type,
                                        label: item.label,
                                        id: item.id
                                    }),
                                    stepIndex: props.stepIndex,
                                    sectionIndex: props.sectionIndex,
                                    cellIndex: props.cellIndex,
                                    rowIndex: props.rowIndex,
                                    columnIndex: props.columnIndex,
                                    controlIndex: props.controlIndex
                                }
                            )}
                            raised={raised}
                            color={'primary'}
                            style={
                                raised
                                    ?
                                    { width: '100%' }
                                    :
                                    {
                                        backgroundColor: 'transparent',
                                        width: '100%',
                                        boxShadow: 'none'
                                    }
                            }
                            key={item.id + props.index}
                        >
                            <CardContent style={{ padding: 0 }}>
                                <ExpansionPanels
                                    location={props.location}
                                    index={props.dragIndex}
                                    panelHeader={item.label}
                                >
                                    {props.content(undefined, undefined, undefined, undefined)}
                                </ExpansionPanels>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </DroppedItem>
        );
    }

    chipClick = (
        name: string,
        type: string,
        props: {
            stepIndex: number,
            sectionIndex: number,
            cellIndex: number,
            rowIndex: number,
            columnIndex: number,
            controlIndex: number
        }) => {
        this.dispatchStore({
            bottomSideBar: true,
            propertyWindow: {
                control: this.getPropertyWindowControl({
                    name: `New ${name}`,
                    type: type,
                    label: `New ${name}`,
                    id: uuid()
                }),
                ...props
            },
            isChildCalled: true,
            raised: ''
        })
    }

}
