import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Grid } from '@material-ui/core';
import { ColumnsProps, ColumnProps } from './renderViewConstants';
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

        const props = (index: number, isDropDisabled: boolean, column: ColumnProps[0]) => (
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
                length: column?.controls?.length || 0
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

        const { props, item } = this.onLoad();

        return (
            <Grid container={true} >
                {
                    this.props.columns.map((column, index) => {
                        var itemProp = props(index, false, column);
                        return (
                            <this.GetDragDropItems
                                {...itemProp}
                                {...item(column)}
                                key={column.id + index}
                                content={(dragProvider, dropProvider) => (
                                    <>
                                        {
                                            itemProp.length === 0
                                                ?
                                                this.getPlaceholder(dropProvider, 'No Controls')
                                                :
                                                <Controls
                                                    {...itemProp}
                                                    controls={column.controls}
                                                    columnId={column.id}
                                                />
                                        }
                                        {dropProvider.placeholder}
                                    </>
                                )}
                            />);
                    })}
            </Grid>
        );
    }
}