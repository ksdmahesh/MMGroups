import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BaseComponent from '../helper/baseComponent';
import { DragDropContext, Droppable, Draggable, DropResult, ResponderProvided, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { TabProps, StepsProps } from '../../../models/renderViewConstants';
import { withStyles } from '@material-ui/core';
import { useStyles } from '../../../themes/themes';

const reorder = (list: StepsProps, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function a11yProps(index: number) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`
    };
}

const getItemStyle = (isDragging: boolean, draggableStyle?: DraggingStyle | NotDraggingStyle | undefined) => ({
    cursor: 'pointer',
    // styles we need to apply on draggables
    ...draggableStyle,
});

var currentStep = 0;

class TabDnd extends BaseComponent<TabProps> {

    onDragEnd = (result: DropResult, provided: ResponderProvided) => {

        // dropped outside the list
        if (!result.destination) {
            return;
        }

        var formdata = this.getState('formdata');
        var tabHeaders = formdata.steps;

        if (result.destination.index === tabHeaders.length - 1 || result.source.index === tabHeaders.length - 1) {
            return;
        }
        formdata.steps = reorder(
            formdata.steps,
            result.source.index,
            result.destination.index
        );

        this.dispatchStore({
            formdata: formdata,
            currentStep: result.destination.index,
            propertyWindow: {
                control: this.getPropertyWindowControl({
                    name: tabHeaders[result.source.index].name,
                    type: 'step',
                    label: tabHeaders[result.source.index].label,
                    id: tabHeaders[result.source.index].id
                }),
                stepIndex: result.destination.index,
                sectionIndex: -2,
                cellIndex: -1,
                rowIndex: -1,
                columnIndex: -1,
                controlIndex: -1
            },
            isChildCalled: false,
            raised: `${this.DataHeader[0] + tabHeaders[result.source.index].id + result.destination.index}`
        });
    }

    render() {
        var currentState = this.getState();
        currentStep = currentState.currentStep;

        const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
            var item = this.props.tabHeaders[newValue];
            var itemId = `steps${item.id + newValue}`;
            if (newValue === this.props.tabHeaders.length - 1) {
                this.dispatchStore({
                    bottomSideBar: true,
                    propertyWindow: {
                        control: this.getPropertyWindowControl({
                            name: item.name,
                            type: 'step',
                            label: item.label,
                            id: item.id
                        }),
                        stepIndex: -1,
                        sectionIndex: -2,
                        rowIndex: -1,
                        columnIndex: -1,
                        controlIndex: -1
                    },
                    isChildCalled: false,
                    raised: ''
                });
            } else {
                this.dispatchStore({
                    currentStep: newValue,
                    propertyWindow: {
                        control: this.getPropertyWindowControl({
                            name: item.name,
                            type: 'step',
                            label: item.label,
                            id: item.id
                        }),
                        stepIndex: newValue,
                        sectionIndex: -2,
                        rowIndex: -1,
                        columnIndex: -1,
                        controlIndex: -1
                    },
                    isChildCalled: false,
                    raised: itemId
                });
            }
        };
        var isDarkTheme = this.props.isDarkTheme;
        const lastIndex = this.props.tabHeaders.length - 1;
        const lastItem = this.props.tabHeaders[lastIndex];
        const classes = this.props.classes;
        return (
            <>
                <DragDropContext onDragEnd={this.onDragEnd} >
                    <Droppable droppableId="tabHeaders" direction="horizontal">
                        {(provided, snapshot) => (
                            <Tabs
                                ref={provided.innerRef}
                                value={currentStep}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="on"
                                {...provided.droppableProps}
                                aria-label="scrollable auto tabs example"
                            >
                                {
                                    this.props.tabHeaders.map((item, index) => {
                                        var raised = currentState.raised === `steps${item.id + index}`;
                                        return (
                                            index === this.props.tabHeaders.length - 1
                                                ?
                                                ''
                                                :
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                    disableInteractiveElementBlocking={true}
                                                >
                                                    {
                                                        (dragProvided, dragSnapshot) => (
                                                            <Tab
                                                                onClick={(e) => handleChange(e, index)}
                                                                ref={dragProvided.innerRef}
                                                                {...dragProvided.draggableProps}
                                                                {...dragProvided.dragHandleProps}
                                                                style={{
                                                                    ...getItemStyle(
                                                                        dragSnapshot.isDragging,
                                                                        dragProvided.draggableProps.style
                                                                    ),
                                                                    ...(
                                                                        raised ?
                                                                            {
                                                                                boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
                                                                                color: 'blue',
                                                                                ...BaseComponent.getTheme(isDarkTheme, 'control')
                                                                            }
                                                                            :
                                                                            {}
                                                                    )
                                                                }
                                                                }
                                                                label={item.label}
                                                                {...a11yProps(index)}
                                                            />
                                                        )}
                                                </Draggable>
                                        );
                                    })}
                                <div
                                    className={classes.placeholder}
                                >
                                    {provided.placeholder}
                                </div>
                                <Tab
                                    key={lastItem.id}
                                    onClick={(e) => handleChange(e, lastIndex)}
                                    style={{
                                        ...BaseComponent.getTheme(isDarkTheme, 'control')
                                    }}
                                    label={lastItem.label}
                                    {...a11yProps(lastIndex)}
                                />
                            </Tabs>
                        )}
                    </Droppable>
                </DragDropContext>
                {this.props.children}
            </>
        );
    }
}

export default withStyles(useStyles)(TabDnd);