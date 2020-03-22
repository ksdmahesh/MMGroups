import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BaseComponent from '../helper/baseComponent';
import { DragDropContext, Droppable, Draggable, DropResult, ResponderProvided, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { Chip, Grid } from '@material-ui/core';
import uuid from 'uuid';
import { TabProps, StepsProps } from '../../dynamic/renderViewConstants';

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

export default class TabDnd extends BaseComponent<TabProps> {

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
                    name: tabHeaders[result.destination.index].name,
                    type: 'step',
                    label: tabHeaders[result.destination.index].name,
                    id: tabHeaders[result.destination.index].id
                }),
                stepIndex: result.destination.index,
                sectionIndex: -1,
                columnIndex: -1,
                controlIndex: -1
            },
            controlRaised: '',
            isChildCalled: false,
            raised: ''
        });
    }

    handleClick = () => {
        this.dispatchStore({
            rightSideBar: true,
            propertyWindow: {
                control: this.getPropertyWindowControl({
                    name: 'New Section',
                    type: 'section',
                    label: 'Add Section',
                    id: uuid()
                }),
                stepIndex: currentStep,
                sectionIndex: -1,
                columnIndex: -1,
                controlIndex: -1
            },
            controlRaised: '',
            isChildCalled: false,
            raised: ''
        });
    }

    render() {
        var currentState = this.getState();
        currentStep = currentState.currentStep;
        var stepIndex = -1;
        if (!currentState.controlRaised && !currentState.raised) {
            stepIndex = currentState.propertyWindow?.stepIndex;
        }

        const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
            var item = this.props.tabHeaders[newValue];
            if (newValue === this.props.tabHeaders.length - 1) {
                this.dispatchStore({
                    rightSideBar: true,
                    propertyWindow: {
                        control: this.getPropertyWindowControl({
                            name: item.name,
                            type: 'step',
                            label: item.name,
                            id: item.id
                        }),
                        stepIndex: -1,
                        sectionIndex: -2,
                        columnIndex: -1,
                        controlIndex: -1
                    },
                    controlRaised: '',
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
                            label: item.name,
                            id: item.id
                        }),
                        stepIndex: newValue,
                        sectionIndex: -2,
                        columnIndex: -1,
                        controlIndex: -1
                    },
                    controlRaised: '',
                    isChildCalled: false,
                    raised: ''
                });
            }
        };
        return (
            <>
                <DragDropContext onDragEnd={this.onDragEnd}>
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
                                    this.props.tabHeaders.map((item, index) => (
                                        <Draggable
                                            isDragDisabled={this.props.tabHeaders.length - 1 === index}
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
                                                                stepIndex === index ?
                                                                    {
                                                                        boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
                                                                        color: 'blue'
                                                                    }
                                                                    :
                                                                    {}
                                                            )
                                                        }
                                                        }
                                                        label={item.name}
                                                        {...a11yProps(index)}
                                                    />
                                                )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                            </Tabs>
                        )}
                    </Droppable>
                </DragDropContext>
                {this.props.children}
                <Grid container={true} direction="row">
                    <Grid item={true} xs={12} style={{ textAlign: 'center' }}>
                        <Chip label="Add Section" style={{ width: '50%' }} onClick={this.handleClick} />
                    </Grid>
                </Grid>
                <br />
                <br />
            </>
        );
    }
}