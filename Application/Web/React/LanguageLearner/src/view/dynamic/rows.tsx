import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid, Card, CardContent } from '@material-ui/core';
import { RowsProps } from './renderViewConstants';
import Columns from './columns';

export default class Rows extends BaseComponent<RowsProps> {

    render() {
        var currentState = this.getState();
        var currentStep = currentState.currentStep;
        var sectionIndex = this.props.sectionIndex;
        return (
            <Grid container={true} >
                {this.props.section.rows.map((row, index) => {
                    var raised = currentState.controlRaised === `rowRaised${row.name + index}`;
                    return (
                        <Card
                            {...{ 'aria-label': 'row' }}
                            onClick={(e) => this.cardRaised(
                                e,
                                'row' + row.name + index,
                                {
                                    control: this.getPropertyWindowControl({
                                        name: row.name,
                                        type: 'row',
                                        label: row.label,
                                        id: row.id
                                    }),
                                    stepIndex: currentStep,
                                    sectionIndex: sectionIndex,
                                    rowIndex: index,
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
                            key={row.name + index}
                        >
                            <CardContent style={{ padding: 10 }}>
                                <Columns
                                    sectionIndex={this.props.sectionIndex}
                                    rowIndex={index}
                                    row={row}
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