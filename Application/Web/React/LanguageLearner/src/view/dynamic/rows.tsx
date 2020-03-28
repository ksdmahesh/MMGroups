import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid, Card, CardContent, Chip } from '@material-ui/core';
import { RowsProps } from './renderViewConstants';
import Columns from './columns';
import uuid from 'uuid';
// import { Notice } from '../shared/dnd/dndConstants';

export default class Rows extends BaseComponent<RowsProps> {

    render() {
        var currentState = this.getState();
        var currentStep = currentState.currentStep;
        var sectionIndex = this.props.sectionIndex || 0;
        var cellIndex = this.props.cellIndex || 0;
        return (
            <>
                <Grid container={true} >
                    {this.props.cell.rows.map((row, index) => {
                        var raised = currentState.raised === `rows${row.id + index}`;
                        return (
                            <Card
                                {...{ 'aria-label': 'rows' }}
                                onClick={(e) => this.cardRaised(
                                    e,
                                    'rows' + row.id + index,
                                    {
                                        control: this.getPropertyWindowControl({
                                            name: row.name,
                                            type: 'row',
                                            label: row.label,
                                            id: row.id
                                        }),
                                        stepIndex: currentStep,
                                        sectionIndex: sectionIndex,
                                        cellIndex: cellIndex,
                                        rowIndex: index,
                                        columnIndex: -2,
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
                                key={row.id + index}
                            >
                                <CardContent style={{ padding: 10 }}>
                                    {
                                        // row.columns.length === 0
                                        //     ?
                                        //     <Grid container={true} direction="row">
                                        //         <Grid item={true} xs={12} style={{ textAlign: 'center' }}>
                                        //             <Chip
                                        //                 label="Add Column"
                                        //                 style={{ width: '50%' }}
                                        //                 onClick={() => this.handleClick(currentStep, sectionIndex, cellIndex, index)}
                                        //             />
                                        //         </Grid>
                                        //     </Grid>
                                            // <Notice style={{ userSelect: 'none' }} >
                                            //     {'No Columns'}
                                            // </Notice>
                                            // :
                                            <Columns
                                                sectionIndex={sectionIndex}
                                                cellIndex={cellIndex}
                                                rowIndex={index}
                                                row={row}
                                                isDropDisabled={this.props.isDropDisabled}
                                            />
                                    }
                                </CardContent>
                            </Card>
                        );
                    })}
                </Grid>
            </>
        );
    }
}