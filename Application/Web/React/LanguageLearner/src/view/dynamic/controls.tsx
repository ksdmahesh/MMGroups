import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { AllControlProps, ControlProps } from './renderViewConstants';
import { DroppedItem, controlItems } from '../shared/dnd/dndConstants';
import { getControlByName } from '../../constants/constants';
import { Grid, Card, CardContent } from '@material-ui/core';
import { DraggableProvided, Draggable } from 'react-beautiful-dnd';

var currentStep = 0;

export default class Controls extends BaseComponent<ControlProps> {

    getControlByType(
        control: AllControlProps,
        provided: DraggableProvided,
        index: number,
        sectionIndex: number,
        cellIndex: number,
        rowIndex: number,
        columnIndex: number
    ) {
        var raised = this.getState(`raised`) === `controls${control.id + index}`;
        return (
            <Grid {...provided.dragHandleProps} container={true} direction="row">
                <Grid item={true} xs={12} md={12}>
                    <Card
                        {...{ 'aria-label': 'controls' }}
                        onClick={(e) => this.cardRaised(
                            e,
                            'controls' + control.id + index,
                            {
                                control: this.getPropertyWindowControl(control),
                                stepIndex: currentStep,
                                sectionIndex: sectionIndex,
                                cellIndex: cellIndex,
                                rowIndex: rowIndex,
                                columnIndex: columnIndex,
                                controlIndex: index
                            }
                        )}
                        raised={raised}
                        color={'primary'}
                        style={
                            raised
                                ?
                                {}
                                :
                                {
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none'
                                }
                        }
                    >
                        <CardContent style={{ padding: 10 }}>
                            {getControlByName(control)}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }

    render() {
        var controls = this.props.controls || [];
        var sectionIndex = this.props.sectionIndex;
        var cellIndex = this.props.cellIndex;
        var rowIndex = this.props.rowIndex;
        var columnIndex = this.props.columnIndex;
        currentStep = this.getState('currentStep');
        controlItems.controlItems[this.props.columnId] = {
            sectionIndex: this.props.sectionIndex,
            cellIndex: this.props.cellIndex,
            rowIndex: this.props.rowIndex,
            columnIndex: this.props.columnIndex,
            controls: this.props.controls
        };
        return (
            <>
                {
                    controls.map((control, index) => (
                        <Draggable
                            disableInteractiveElementBlocking={true}
                            key={control.id}
                            draggableId={control.id}
                            index={index}
                        >
                            {
                                (provided, snapshot) => (
                                    <DroppedItem
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        style={provided.draggableProps.style}
                                    >
                                        {this.getControlByType(control, provided, index, sectionIndex, cellIndex, rowIndex, columnIndex)}
                                    </DroppedItem>
                                )
                            }
                        </Draggable>
                    ))
                }
            </>
        );
    }
}