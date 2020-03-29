import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid, Card, CardContent, Chip } from '@material-ui/core';
import { CellsProps, CellProps } from './renderViewConstants';
import Rows from './rows';
// import { Notice } from '../shared/dnd/dndConstants';
import uuid from 'uuid';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { DroppedItem } from '../shared/dnd/dndConstants';

export default class Cells extends BaseComponent<CellsProps> {

    onLoad = () => {
        var currentState = this.getState();
        var currentStep = currentState.currentStep || 0;
        var sectionIndex = this.props.sectionIndex || 0;
        const props = (index: number, isDropDisabled: boolean, cell: CellProps[0]) => (
            {
                stepIndex: currentStep,
                sectionIndex: sectionIndex,
                cellIndex: index,
                rowIndex: -2,
                columnIndex: -1,
                controlIndex: -1,
                index: index,
                itemRaised: currentState.raised,
                isDropDisabled: isDropDisabled,
                length: cell?.rows?.length || 0
            }
        )

        const item = (item: any) => (
            {
                item: {
                    aria: 'cells',
                    id: item.id,
                    label: item.label,
                    name: item.name,
                    type: 'cell'
                }
            }
        )

        return { props, item };
    }

    render() {
        const { props, item } = this.onLoad();
        return (
            <Grid container={true} style={{ width: '100%' }}>
                {this.props.section.cells.map((cell, index) => {
                    var itemProp = props(index, false, cell);
                    return (
                        <this.GetDragDropItems
                            {...itemProp}
                            {...item(cell)}
                            key={cell.id + index}
                            content={(dragProvider, dropProvider) => (
                                <>
                                    {
                                        itemProp.length === 0
                                            ?
                                            <>
                                                {this.getPlaceholder(dropProvider, 'No Rows')}
                                                <Grid container={true} direction="row">
                                                    <Grid item={true} xs={12} style={{ textAlign: 'center' }}>
                                                        <Chip
                                                            label="Add Row"
                                                            style={{ width: '50%' }}
                                                            onClick={() =>
                                                                this.chipClick(
                                                                    'Row',
                                                                    'section',
                                                                    { ...itemProp, ...{ rowIndex: -1 } }
                                                                )}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </>
                                            :
                                            <Rows
                                                cell={cell}
                                                sectionIndex={this.props.sectionIndex}
                                                cellIndex={index}
                                                isDropDisabled={this.props.isDropDisabled}
                                            />
                                    }
                                    {dropProvider.placeholder}
                                </>
                            )}
                        />);
                })
                }
            </Grid>
        );
    }
}