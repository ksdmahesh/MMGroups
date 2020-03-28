import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid, Card, CardContent, IconButton, Badge } from '@material-ui/core';
import { RowsProps, DataProps } from './renderViewConstants';
import Columns from './columns';
import uuid from 'uuid';

export default class Rows extends BaseComponent<RowsProps> {

    addList = (count: number, sectionIndex: number, cellIndex: number) => {
        var currentState = this.getState();
        var formdata: DataProps = currentState.formdata;
        var currentStep: number = currentState.currentStep;
        var colHeaders = formdata.steps[currentStep].sections[sectionIndex].cells;
        var droppedControlData = colHeaders[cellIndex];
        var keys = droppedControlData.rows;

        if (count > keys.length) {
            while (formdata.steps[currentStep].sections[sectionIndex].cells[cellIndex].rows.length < count) {
                var newId = uuid();
                var newCol = { id: newId, name: newId, label: newId, columns: [] };
                formdata.steps[currentStep].sections[sectionIndex].cells[cellIndex].rows.push(newCol);
            }
            this.dispatchStore({
                formdata: formdata
            });
        } else if (keys.length - count > 0) {
            this.dispatchStore({
                showCancelButton: true,
                modalTitle: 'Alert',
                modalContent: `Need to delete last ${keys.length - count} (column)s`,
                modalOpen: true,
                modalCloseCallback: (event: React.MouseEvent<
                    HTMLAnchorElement,
                    MouseEvent
                >) => this.removeRows(count, sectionIndex, cellIndex)
            });
        }
    }

    removeRows = (count: number, sectionIndex: number, cellIndex: number) => {
        var currentState = this.getState();
        var formdata: DataProps = currentState.formdata;
        var currentStep: number = currentState.currentStep;
        var colHeaders = formdata.steps[currentStep].sections[sectionIndex].cells;
        var droppedControlData = colHeaders[cellIndex];
        var keys = droppedControlData.rows;

        for (let index = keys.length; index > count; index--) {
            formdata.steps[currentStep].sections[sectionIndex].cells[cellIndex].rows.pop();
        }
        this.dispatchStore({
            formdata: formdata,
            modalOpen: false,
        });
    }

    getRowButtons(sectionIndex: number, cellIndex: number, length: number) {
        return (
            <>
                <IconButton color={'primary'} onClick={(e) => this.addList(1, sectionIndex, cellIndex)}>
                    <Badge color={length >= 1 ? 'primary' : 'default'} badgeContent={1} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(2, sectionIndex, cellIndex)}>
                    <Badge color={length >= 2 ? 'primary' : 'default'} badgeContent={2} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(3, sectionIndex, cellIndex)}>
                    <Badge color={length >= 3 ? 'primary' : 'default'} badgeContent={3} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(4, sectionIndex, cellIndex)}>
                    <Badge color={length === 4 ? 'primary' : 'default'} badgeContent={4} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
            </>
        );
    }

    getRowCount(length: number) {
        var gridWidth: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined = 'auto';
        switch (length) {
            case 0:
            case 1:
                gridWidth = 12;
                break;
            case 2:
                gridWidth = 6;
                break;
            case 3:
                gridWidth = 4;
                break;
            case 4:
                gridWidth = 3;
                break;
            default:
                break;
        }
        return gridWidth;
    }

    render() {
        var currentState = this.getState();
        var currentStep = currentState.currentStep;
        var sectionIndex = this.props.sectionIndex || 0;
        var cellIndex = this.props.cellIndex || 0;
        return (
            <>
                {this.getRowButtons(sectionIndex, cellIndex, this.props.cell?.rows?.length || 0)}
                <Grid container={true} >
                    {this.props.cell.rows.map((row, index) => {
                        var raised = currentState.raised === `row${row.id + index}`;
                        return (
                            <Card
                                {...{ 'aria-label': 'row' }}
                                onClick={(e) => this.cardRaised(
                                    e,
                                    'row' + row.id + index,
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
                                key={row.id + index}
                            >
                                <CardContent style={{ padding: 10 }}>
                                    <Columns
                                        sectionIndex={sectionIndex}
                                        cellIndex={cellIndex}
                                        rowIndex={index}
                                        row={row}
                                        isDropDisabled={this.props.isDropDisabled}
                                    />
                                </CardContent>
                            </Card>
                        );
                    })}
                </Grid>
            </>
        );
    }
}