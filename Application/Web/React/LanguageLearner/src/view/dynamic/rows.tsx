import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid } from '@material-ui/core';
import { RowsProps, DataProps, RowProps } from './renderViewConstants';
import Columns from './columns';
import uuid from 'uuid';
import { IconButton, Badge } from '@material-ui/core';
// import uuid from 'uuid';
// import { Notice } from '../shared/dnd/dndConstants';

export default class Rows extends BaseComponent<RowsProps> {

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

    getColumnButtons(props: { sectionIndex: number, cellIndex: number, rowIndex: number, length: number }) {
        return (
            <>
                <IconButton color={'primary'} onClick={(e) => this.addList(1, props.sectionIndex, props.cellIndex, props.rowIndex)}>
                    <Badge color={props.length >= 1 ? 'primary' : 'default'} badgeContent={1} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(2, props.sectionIndex, props.cellIndex, props.rowIndex)}>
                    <Badge color={props.length >= 2 ? 'primary' : 'default'} badgeContent={2} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(3, props.sectionIndex, props.cellIndex, props.rowIndex)}>
                    <Badge color={props.length >= 3 ? 'primary' : 'default'} badgeContent={3} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(4, props.sectionIndex, props.cellIndex, props.rowIndex)}>
                    <Badge color={props.length === 4 ? 'primary' : 'default'} badgeContent={4} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
            </>
        );
    }

    onLoad = () => {
        var currentState = this.getState();
        var currentStep = currentState.currentStep || 0;
        var sectionIndex = this.props.sectionIndex || 0;
        var cellIndex = this.props.cellIndex || 0;
        const props = (index: number, row: RowProps[0]) => (
            {
                stepIndex: currentStep,
                sectionIndex: sectionIndex,
                cellIndex: cellIndex,
                rowIndex: index,
                columnIndex: -2,
                controlIndex: -1,
                index: index,
                itemRaised: currentState.raised,
                isDropDisabled: currentState.dropId !== 'rows',
                length: row?.columns?.length || 0,
                isVertical: false
            }
        )

        const item = (item: any) => (
            {
                item: {
                    aria: 'rows',
                    id: item.id,
                    label: item.label,
                    name: item.name,
                    type: 'row'
                }
            }
        )

        return { props, item };
    }

    render() {
        const { props, item } = this.onLoad();
        return (
            <>
                <Grid container={true} >
                    {this.props.cell.rows.map((row, index) => {
                        var itemProp = props(index, row);
                        return (
                            <this.GetDragDropItems
                                {...itemProp}
                                {...item(row)}
                                key={row.id + index}
                                content={(dragProvider, dropProvider) => (
                                    <>
                                        {this.getColumnButtons(itemProp)}
                                        {
                                            itemProp.length === 0
                                                ?
                                                this.getPlaceholder(dropProvider, 'No Columns')
                                                :
                                                <Columns
                                                    {...itemProp}
                                                    columns={row.columns}
                                                    isDropDisabled={this.props.isDropDisabled}
                                                />
                                        }
                                        {dropProvider.placeholder}
                                    </>
                                )}
                            />);
                    })}
                </Grid>
            </>
        );
    }
}