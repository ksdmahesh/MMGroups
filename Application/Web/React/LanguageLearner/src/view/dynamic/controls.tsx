import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { AllControlProps, ControlProps } from './renderViewConstants';
import { DroppedItem } from '../shared/dnd/dndConstants';
import { getControlByName } from '../../constants/constants';
import { Grid, Card, CardContent } from '@material-ui/core';
import { DraggableProvided } from 'react-beautiful-dnd';

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
        var control = this.props.control;
        var provided = this.props.provided;
        var index = this.props.index;
        var sectionIndex = this.props.sectionIndex;
        var cellIndex = this.props.cellIndex;
        var rowIndex = this.props.rowIndex;
        var columnIndex = this.props.columnIndex;
        currentStep = this.getState('currentStep');
        return (
            <DroppedItem
                ref={provided.innerRef}
                {...provided.draggableProps}
                style={provided.draggableProps.style}
            >
                {this.getControlByType(control, provided, index, sectionIndex, cellIndex, rowIndex, columnIndex)}
            </DroppedItem>
        );
    }
}