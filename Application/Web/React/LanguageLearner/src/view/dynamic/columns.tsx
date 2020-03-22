import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import DroppableContainer from './droppableContainer';
import { Grid } from '@material-ui/core';
import { ColumnsProps } from './renderViewConstants';

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

    render() {
        var gridWidth = this.getColumnCount(this.props.section.columns.length);

        return (
            <Grid container={true} >
                {this.props.section.columns.map((column, index) => (
                    <Grid item={true} xs={12} key={`${column.id}-${index}`} md={gridWidth} sm={gridWidth} >
                        <DroppableContainer
                            sectionIndex={this.props.sectionIndex}
                            isDropDisabled={this.props.isDropDisabled}
                            column={column}
                            columnIndex={index}
                        />
                    </Grid>
                ))}
            </Grid>
        );
    }
}