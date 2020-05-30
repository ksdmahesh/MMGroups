import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid } from '@material-ui/core';
import { ColumnsProps, ColumnProps } from './renderViewConstants';
import { dragIndex } from '../shared/dnd/dndConstants';
import Controls from './controls';

export default class Columns extends BaseComponent<ColumnsProps> {

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

    onLoad = () => {
        var currentState = this.getState();
        var currentStep = currentState.currentStep;
        var sectionIndex = this.props.sectionIndex || 0;
        var cellIndex = this.props.cellIndex || 0;
        var rowIndex = this.props.rowIndex || 0;

        const props = (index: number, column: ColumnProps[0], isDropDisabled: boolean = true, dragIndex: number = 0, isDarkTheme: boolean = false) => (
            {
                stepIndex: currentStep,
                sectionIndex: sectionIndex,
                cellIndex: cellIndex,
                rowIndex: rowIndex,
                columnIndex: index,
                controlIndex: -2,
                index: index,
                itemRaised: currentState.raised,
                isDropDisabled: isDropDisabled,
                length: column?.controls?.length || 0,
                isVertical: true,
                location: `${currentStep},${sectionIndex},${cellIndex},${rowIndex},${index}`,
                dragIndex: dragIndex,
                isDarkTheme: isDarkTheme
            }
        )

        const item = (item: any) => (
            {
                item: {
                    aria: 'columns',
                    id: item.id,
                    label: item.label,
                    name: item.name,
                    type: 'column'
                }
            }
        )

        return { props, item };
    }

    render() {

        const gridWidth = this.getColumnCount(this.props.columns.length);

        const { props, item } = this.onLoad();

        var isDarkTheme = this.props.isDarkTheme;
        return (
            <this.GetDroppable
                id={this.props.id}
                type={this.DataHeader[4]}
                content={(getDropProvider, getSnapshot) => (
                    <Grid container={true} >
                        {
                            this.props.columns.map((column, index) => {
                                dragIndex.index += 1;
                                var itemProp = props(index, column, this.props.isDropDisabled, dragIndex.index, isDarkTheme);
                                return (
                                    <Grid
                                        item={true} xs={12} key={`${column.id}-${index}`} md={gridWidth} sm={gridWidth}
                                    >
                                        <this.GetDragDropItems
                                            {...itemProp}
                                            {...item(column)}
                                            key={column.id + index}
                                            dropProvider={getDropProvider}
                                            dropSnapshot={getSnapshot}
                                            content={(dragProvider, snapshot) => (
                                                <>
                                                    {
                                                        itemProp.length === 0
                                                            ?
                                                            this.getPlaceholder(getDropProvider, 'No Controls')
                                                            :
                                                            <Controls
                                                                isDarkTheme={isDarkTheme}
                                                                dropProvider={this.props.dropProvider}
                                                                {...itemProp}
                                                                controls={column.controls}
                                                                columnId={column.id}
                                                            />
                                                    }
                                                    {/* {this.props.dropProvider.placeholder} */}
                                                </>
                                            )}
                                        />
                                    </Grid>
                                );
                            })}
                    </Grid>
                )}
            >

            </this.GetDroppable>
        );
    }
}