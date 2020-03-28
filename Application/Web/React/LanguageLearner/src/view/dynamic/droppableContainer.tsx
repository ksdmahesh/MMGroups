import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { Droppable, Draggable, DroppableProvided } from 'react-beautiful-dnd';
import { Container, Notice, controlItems } from '../shared/dnd/dndConstants';
import Controls from './controls';
import { AllControlProps, DroppableContainerProps } from './renderViewConstants';

export default class DroppableContainer extends BaseComponent<DroppableContainerProps> {

    getPlaceholder(provided: DroppableProvided) {
        return (
            !provided.placeholder && (
                <Notice style={{ userSelect: 'none' }} >
                    {'Drop items here'}
                </Notice>
            )
        );
    }

    getDraggableControl(
        control: AllControlProps,
        index: number,
        sectionIndex: number,
        cellIndex: number,
        rowIndex: number,
        columnIndex: number
    ) {
        return (
            <Draggable
                disableInteractiveElementBlocking={true}
                key={control.id}
                draggableId={control.id}
                index={index}
            >
                {
                    (provided, snapshot) => (
                        <Controls
                            key={`${control.id}-${index}`}
                            control={control}
                            provided={provided}
                            index={index}
                            sectionIndex={sectionIndex}
                            cellIndex={cellIndex}
                            rowIndex={rowIndex}
                            columnIndex={columnIndex}
                        />
                    )}
            </Draggable>
        );
    }
    render() {
        controlItems.controlItems[this.props.column.id] = {
            sectionIndex: this.props.sectionIndex,
            cellIndex: this.props.cellIndex,
            rowIndex: this.props.rowIndex,
            columnIndex: this.props.columnIndex,
            controls: this.props.column.controls
        };
        return (
            <Droppable droppableId={this.props.column.id} isDropDisabled={this.props.isDropDisabled}>
                {(provided, snapshot) => (
                    <Container ref={provided.innerRef} style={{ userSelect: 'none' }} >
                        {
                            this.props.column.controls.length
                                ?
                                this.props.column.controls.map((control, index) => {
                                    return (
                                        this.getDraggableControl(
                                            control,
                                            index,
                                            this.props.sectionIndex,
                                            this.props.cellIndex,
                                            this.props.rowIndex,
                                            this.props.columnIndex
                                        )
                                    );
                                })
                                : this.getPlaceholder(provided)
                        }
                        {provided.placeholder}
                    </Container>
                )}
            </Droppable>
        );
    }
}