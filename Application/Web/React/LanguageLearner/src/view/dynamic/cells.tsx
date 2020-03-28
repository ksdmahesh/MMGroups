import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid, Card, CardContent, Chip } from '@material-ui/core';
import { CellsProps } from './renderViewConstants';
import Rows from './rows';
// import { Notice } from '../shared/dnd/dndConstants';
import uuid from 'uuid';

export default class Cells extends BaseComponent<CellsProps> {
    handleClick = (currentStep: number, sectionIndex: number, cellIndex: number) => {
        this.dispatchStore({
            rightSideBar: true,
            propertyWindow: {
                control: this.getPropertyWindowControl({
                    name: 'New Row',
                    type: 'section',
                    label: 'Add Row',
                    id: uuid()
                }),
                stepIndex: currentStep,
                sectionIndex: sectionIndex,
                cellIndex: cellIndex,
                rowIndex: -1,
                columnIndex: -1,
                controlIndex: -1
            },
            isChildCalled: true,
            raised: ''
        });
    }
    render() {
        var currentState = this.getState();
        var currentStep = currentState.currentStep;
        var sectionIndex = this.props.sectionIndex;
        return (
            <Grid container={true} >
                {this.props.section.cells.map((cell, index) => {
                    var raised = currentState.raised === `cells${cell.id + index}`;
                    return (
                        <Card
                            {...{ 'aria-label': 'cells' }}
                            onClick={(e) => this.cardRaised(
                                e,
                                'cells' + cell.id + index,
                                {
                                    control: this.getPropertyWindowControl({
                                        name: cell.name,
                                        type: 'cell',
                                        label: cell.label,
                                        id: cell.id
                                    }),
                                    stepIndex: currentStep,
                                    sectionIndex: sectionIndex,
                                    cellIndex: index,
                                    rowIndex: -2,
                                    columnIndex: -1,
                                    controlIndex: -1
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
                            key={cell.id + index}
                        >
                            <CardContent style={{ padding: 10 }}>
                                {
                                    cell.rows.length === 0
                                        ?
                                        <Grid container={true} direction="row">
                                            <Grid item={true} xs={12} style={{ textAlign: 'center' }}>
                                                <Chip
                                                    label="Add Row"
                                                    style={{ width: '50%' }}
                                                    onClick={() => this.handleClick(currentStep, sectionIndex, index)}
                                                />
                                            </Grid>
                                        </Grid>
                                        // <Notice style={{ userSelect: 'none' }} >
                                        //     {'No Rows'}
                                        // </Notice>
                                        :
                                        <Rows
                                            cell={cell}
                                            sectionIndex={this.props.sectionIndex}
                                            cellIndex={index}
                                            isDropDisabled={this.props.isDropDisabled}
                                        />
                                }
                            </CardContent>
                        </Card>
                    );
                })}
            </Grid>
        );
    }
}