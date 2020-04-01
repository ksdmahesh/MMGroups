// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable, Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd';

export type Id = string;
export var grid = 8;

export type Task = {
    id: Id,
    content: string,
};

let uniqueId = 0;
function getTasks(count: number): any {
    return Array.from({ length: count }, (): any => {
        const id: string = `${uniqueId++}`;

        return {
            id,
            content: `task: ${id}`,
        };
    });
}

const Item = styled.div`
  padding: ${grid}px;
  border: 1px solid ${'gray'};
  background-color: ${(props: { isDragging: boolean }) => (props.isDragging ? 'yellow' : 'gray')};
  margin-top: ${grid}px;
  margin-left: ${grid}px;
  margin-right: ${grid}px;
`;

function renderTasks(
    tasks: any,
    options: { isDragEnabled: boolean } = { isDragEnabled: true },
) {
    return tasks.map((task: any, index: number) => {
        return (
            <Draggable
                draggableId={task.id}
                index={index}
                key={task.id}
                isDragDisabled={!options.isDragEnabled}
            >
                {(provided, snapshot) => (
                    <Item
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        ref={provided.innerRef}
                    >
                        Task id: {task.id}
                    </Item>
                )}
            </Draggable>
        );
    });
}

const App = styled.div`
  display: flex;
  /* not going to force them to grow to the same size when the drag starts */
  align-items: start;
  user-select: none;
`;

const List = styled.div`
  border: 1px solid ${'gray'};
  margin: ${grid}px;
  text-align: center;
  padding-bottom: ${grid}px;
`;

const Bin = styled(List)`
  border-color: ${'red'};
`;

const Tasks = styled(List)``;

const ListTitle = styled.h3`
  padding: ${grid}px;
  width: 250px;
`;

export function moveBetween<T>({
    list1,
    list2,
    source,
    destination,
}: any): any {
    const newFirst = Array.from(list1.values);
    const newSecond = Array.from(list2.values);

    const moveFrom = source.droppableId === list1.id ? newFirst : newSecond;
    const moveTo = moveFrom === newFirst ? newSecond : newFirst;

    const [moved] = moveFrom.splice(source.index, 1);
    moveTo.splice(destination.index, 0, moved);

    return {
        list1: {
            ...list1,
            values: newFirst,
        },
        list2: {
            ...list2,
            values: newSecond,
        },
    };
}

export default function AddingThings() {
    const [isShowingBin, setIsShowingBin] = useState(false);
    const [tasks, setTasks] = useState(() => getTasks(10));
    const [trash, setTrash] = useState(() => getTasks(2));

    function onBeforeCapture() {
        setIsShowingBin(true);
    }

    const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    function onDragEnd(result: DropResult) {
        setIsShowingBin(false);
        const { destination, source } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            if (source.droppableId === 'tasks') {
                setTasks(reorder(tasks, source.index, destination.index));
            }
            // In our current UI it won't be possible to reorder trash
            return;
        }

        const { list1, list2 } = moveBetween({
            list1: {
                id: 'tasks',
                values: tasks,
            },
            list2: {
                id: 'trash',
                values: trash,
            },
            source,
            destination,
        });

        setTasks(list1.values);
        setTrash(list2.values);
    }
console.log(isShowingBin)
    return (
        <DragDropContext onBeforeCapture={onBeforeCapture} onDragEnd={onDragEnd}>
            <App>
                <Tasks>
                    <ListTitle>
                        Tasks{' '}
                        <span role="img" aria-label="book">
                            {'📘'}
                        </span>
                    </ListTitle>
                    <Droppable droppableId="tasks">
                        {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {renderTasks(tasks)}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </Tasks>
                {isShowingBin ? (
                    <Bin>
                        <ListTitle>
                            {'Trash'}{' '}
                            <span role="img" aria-label="trash">
                                {'🗑'}
                            </span>
                        </ListTitle>
                        <Droppable droppableId="bin">
                            {provided => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {renderTasks(trash, { isDragEnabled: false })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </Bin>
                ) : null}
            </App>
        </DragDropContext>
    );
}