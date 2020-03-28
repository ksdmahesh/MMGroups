import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import DroppableContainer from './droppableContainer';
import { Grid, Card, CardContent } from '@material-ui/core';
import { ColumnsProps, DataProps } from './renderViewConstants';
import { IconButton, Badge } from '@material-ui/core';
import uuid from 'uuid';
import { Notice } from '../shared/dnd/dndConstants';

export default class Columns extends BaseComponent<ColumnsProps> {

    addList = (count: number, sectionIndex: number, cellIndex: number, rowIndex: number) => {
        var currentState = this.getState();
        var formdata: DataProps = currentState.formdata;
        var currentStep: number = currentState.currentStep;
        var colHeaders = formdata.steps[currentStep].sections[sectionIndex].cells[cellIndex].rows;
        var droppedControlData = colHeaders[rowIndex];
        var keys = droppedControlData.columns;

        if (count > keys.length) {
            while (formdata.steps[currentStep].sections[sectionIndex].cells[cellIndex].rows[rowIndex].columns.length < count) {
                var newId = uuid();
                var newCol = { id: newId, name: newId, label: newId, controls: [] };
                formdata.steps[currentStep].sections[sectionIndex].cells[cellIndex].rows[rowIndex].columns.push(newCol);
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
                >) => this.removeColumns(count, sectionIndex, cellIndex, rowIndex)
            });
        }
    }

    removeColumns = (count: number, sectionIndex: number, cellIndex: number, rowIndex: number) => {
        var currentState = this.getState();
        var formdata: DataProps = currentState.formdata;
        var currentStep: number = currentState.currentStep;
        var colHeaders = formdata.steps[currentStep].sections[sectionIndex].cells[cellIndex].rows;
        var droppedControlData = colHeaders[rowIndex];
        var keys = droppedControlData.columns;

        for (let index = keys.length; index > count; index--) {
            formdata.steps[currentStep].sections[sectionIndex].cells[cellIndex].rows[rowIndex].columns.pop();
        }
        this.dispatchStore({
            formdata: formdata,
            modalOpen: false,
        });
    }

    getColumnButtons(sectionIndex: number, cellIndex: number, rowIndex: number, length: number) {
        return (
            <>
                <IconButton color={'primary'} onClick={(e) => this.addList(1, sectionIndex, cellIndex, rowIndex)}>
                    <Badge color={length >= 1 ? 'primary' : 'default'} badgeContent={1} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(2, sectionIndex, cellIndex, rowIndex)}>
                    <Badge color={length >= 2 ? 'primary' : 'default'} badgeContent={2} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(3, sectionIndex, cellIndex, rowIndex)}>
                    <Badge color={length >= 3 ? 'primary' : 'default'} badgeContent={3} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(4, sectionIndex, cellIndex, rowIndex)}>
                    <Badge color={length === 4 ? 'primary' : 'default'} badgeContent={4} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
            </>
        );
    }

    getColumnCount(length: number) {
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
        var gridWidth = this.getColumnCount(this.props.row.columns.length);
        var currentState = this.getState();
        var currentStep = currentState.currentStep;
        var sectionIndex = this.props.sectionIndex || 0;
        var cellIndex = this.props.cellIndex || 0;
        var rowIndex = this.props.rowIndex || 0;
        return (
            <>
                {this.getColumnButtons(sectionIndex, cellIndex, rowIndex, this.props.row?.columns?.length || 0)}
                <Grid container={true} >
                    {
                        this.props.row.columns.length === 0
                            ?
                            <Grid
                                item={true} xs={12} md={12} sm={12}
                            >
                                <Notice style={{ userSelect: 'none' }} >
                                    {'No Columns'}
                                </Notice>
                            </Grid>
                            :
                            this.props.row.columns.map((column, index) => {
                                var raised = currentState.raised === `columns${column.id + index}`;
                                return (
                                    <Grid
                                        item={true} xs={12} key={`${column.id}-${index}`} md={gridWidth} sm={gridWidth}
                                    >
                                        <Card
                                            {...{ 'aria-label': 'columns' }}
                                            onClick={(e) => this.cardRaised(
                                                e,
                                                'columns' + column.id + index,
                                                {
                                                    control: this.getPropertyWindowControl({
                                                        name: column.name,
                                                        type: 'column',
                                                        label: column.label,
                                                        id: column.id
                                                    }),
                                                    stepIndex: currentStep,
                                                    sectionIndex: sectionIndex,
                                                    cellIndex: cellIndex,
                                                    rowIndex: rowIndex,
                                                    columnIndex: index,
                                                    controlIndex: -2
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
                                        >
                                            <CardContent style={{ padding: 10 }}>
                                                <DroppableContainer
                                                    isDropDisabled={this.props.isDropDisabled}
                                                    column={column}
                                                    sectionIndex={sectionIndex}
                                                    cellIndex={cellIndex}
                                                    rowIndex={rowIndex}
                                                    columnIndex={index}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })}
                </Grid>
            </>
        );
    }
}