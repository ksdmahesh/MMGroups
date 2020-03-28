import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid, Card, CardContent } from '@material-ui/core';
import { CellsProps } from './renderViewConstants';
import Rows from './rows';

export default class Cells extends BaseComponent<CellsProps> {

    render() {
        var currentState = this.getState();
        var currentStep = currentState.currentStep;
        var sectionIndex = this.props.sectionIndex;
        return (
            <Grid container={true} >
                {this.props.section.cells.map((cell, index) => {
                    var raised = currentState.raised === `cell${cell.id + index}`;
                    return (
                        <Card
                            {...{ 'aria-label': 'cell' }}
                            onClick={(e) => this.cardRaised(
                                e,
                                'cell' + cell.id + index,
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
                                    rowIndex: -1,
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
                                <Rows
                                    cell={cell}
                                    sectionIndex={this.props.sectionIndex}
                                    cellIndex={index}
                                    isDropDisabled={this.props.isDropDisabled}
                                />
                            </CardContent>
                        </Card>
                    );
                })}
            </Grid>
        );
    }
}