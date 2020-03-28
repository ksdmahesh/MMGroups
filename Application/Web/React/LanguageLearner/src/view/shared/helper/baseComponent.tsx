import * as React from 'react';
import { Dispatch, store } from '../../../constants/defaultConstants';
import { PropertyWindowProps, DataProps, AllControlProps } from '../../dynamic/renderViewConstants';
import TypeCheck, { HelperClass } from './typeCheck';
import uuid from 'uuid';

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

    setUuid(formdata: any) {
        formdata.id = uuid();
        if (!formdata.name) {
            formdata.name = uuid();
        }
        var items: any = [];
        for (let index = 0; index < this.DataHeader.length; index++) {
            items = formdata[this.DataHeader[index]];
            if (items) {
                for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
                    this.setUuid(items[itemIndex]);
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
                {
                    id: exceptionalStepsId[0],
                    name: 'Review',
                    label: 'Review',
                    sections: []
                },
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

}
