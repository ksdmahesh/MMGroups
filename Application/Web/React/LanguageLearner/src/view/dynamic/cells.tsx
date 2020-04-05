import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid, Chip } from '@material-ui/core';
import { CellsProps, CellProps } from './renderViewConstants';
import Rows from './rows';
import { dragIndex } from '../shared/dnd/dndConstants';
// import { Notice } from '../shared/dnd/dndConstants';

export default class Cells extends BaseComponent<CellsProps> {

    onLoad = () => {
        var currentState = this.getState();
        var currentStep = currentState.currentStep || 0;
        var sectionIndex = this.props.sectionIndex || 0;
        const props = (index: number, cell: CellProps[0], isDropDisabled: boolean = true, dragIndex: number = 0, isDarkTheme: boolean = false) => (
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
                length: cell?.rows?.length || 0,
                isVertical: true,
                location: `${currentStep},${sectionIndex},${index}`,
                dragIndex: dragIndex,
                isDarkTheme: isDarkTheme
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
        var isDarkTheme = this.props.isDarkTheme;
        return (
            <Grid container={true} style={{ width: '100%' }}>
                {this.props.section.cells.map((cell, index) => {
                    dragIndex.index += 1;
                    var itemProp = props(index, cell, this.props.isDropDisabled, dragIndex.index, isDarkTheme);
                    return (
                        <this.GetDragDropItems
                            {...itemProp}
                            {...item(cell)}
                            key={cell.id + index}
                            content={(dragProvider, dropProvider, snapshot, dropSnapshot) => (
                                <>
                                    {
                                        itemProp.length === 0
                                            ?
                                            <>
                                                {this.getPlaceholder(this.props.dropProvider, 'No Rows')}
                                                <Grid container={true} direction="row">
                                                    <Grid item={true} xs={12} style={{ textAlign: 'center' }}>
                                                        <Chip
                                                            label="Add Row"
                                                            style={{ width: '50%', ...BaseComponent.getTheme(isDarkTheme, 'control') }}
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
                                                isDarkTheme={isDarkTheme}
                                                dropProvider={this.props.dropProvider}
                                                cell={cell}
                                                sectionIndex={this.props.sectionIndex}
                                                cellIndex={index}
                                                isDropDisabled={this.props.isDropDisabled}
                                            />
                                    }
                                    {this.props.dropProvider.placeholder}
                                </>
                            )}
                        />);
                })
                }
            </Grid>
        );
    }
}