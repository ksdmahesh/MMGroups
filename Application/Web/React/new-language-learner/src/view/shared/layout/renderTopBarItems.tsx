import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { List, ListItem, Tabs, Tab } from '@material-ui/core';
import { Droppable, Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { controlItems, topBarItems } from '../dnd/dndConstants';

function a11yProps(key: string, index: string) {
    return {
        id: `scrollable-auto-top-tab-${key}-${index}`,
        'aria-controls': `${key}-${index}`
    };
}

var prevAria = '';
let cDragIndex = -1;

const getItemStyle = (isDragging: boolean, draggableStyle?: any) => ({
    cursor: 'pointer',
    // styles we need to apply on draggables
    ...draggableStyle,
});

export default class RenderTopBarItems extends BaseComponent<any> {

    handleChange = (event: React.ChangeEvent<{}>, newValue: number, key: string) => {
        this.dispatchStore({ [`top-${key}`]: newValue });
    }

    componentDidUpdate() {
        let topBarItemsState = this.getState('topBarItems');
        if (topBarItems.drop !== topBarItemsState) {
            this.dispatchStore({ topBarItems: topBarItems.drop });
            cDragIndex = this.DataHeader.indexOf(controlItems.drag.activeElement);
        }
    }

    setTabDropItem = (e: any) => {
        let aria = e.currentTarget.getAttribute('aria-controls');
        if (prevAria != aria) {
            prevAria = aria;
            let splitAria = aria.split('-');
            let dragIndex = this.DataHeader.indexOf(controlItems.drag.activeElement);
            let dropIndex = this.DataHeader.indexOf(splitAria[0]);
            if ((dragIndex === -1 || dropIndex === -1)) {
                return;
            }
            if (dragIndex <= dropIndex) {
                return;
            }
            if (controlItems.drag.isLeft) {

            } else {

            }
            topBarItems.drop[splitAria[0]] = splitAria[1];
            this.dispatchStore({ topBarItems: topBarItems.drop });
        }
    }

    getDropItem = (items: any, key: string, isDisabled: boolean, activeTab: number) => {
        return (
            <ListItem
                style={{ width: '100%' }}
                key={`top-${key}`}
            >
                <Droppable
                    droppableId={`top-${key}`}
                    direction={'horizontal'}
                    isDropDisabled={isDisabled}
                    key={`top-${key}-drop`}
                    mode={'virtual'}
                    renderClone={(provided, snapshot, rubric) => (
                        this.getVirtualListItem(provided, snapshot, items?.[rubric.source.index]?.label, rubric.source.index, key)
                    )}
                >
                    {(provided, snapshot) => (
                        <>
                            {
                                items.length
                                    ?
                                    <Tabs
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        value={isNaN(activeTab) ? 0 : activeTab}
                                        onChange={(e, n) => this.handleChange(e, n, key)}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="scrollable"
                                        scrollButtons={'on'}
                                        style={{ width: '100%' }}
                                        aria-label={`top-${key}`}
                                    >
                                        {items.map((item: { id: string, label: string }, index: number) => (
                                            <Draggable
                                                disableInteractiveElementBlocking={true}
                                                key={`top-${key}-${item.id}-${index}`}
                                                draggableId={`top-${key}-${item.id}-${index}`}
                                                index={index}
                                                isDragDisabled={true}
                                            >
                                                {
                                                    (dragProvided, dragSnapshot) => (
                                                        this.getVirtualListItem(dragProvided, dragSnapshot, item.label, index, key)
                                                    )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </Tabs>
                                    :
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{ width: '100%' }}
                                    >
                                        {provided.placeholder}
                                    </div>
                            }
                            {provided.placeholder}
                        </>
                    )}
                </Droppable>
            </ListItem>
        );
    }

    getVirtualListItem = (dragProvided: DraggableProvided, snapshot: DraggableStateSnapshot, label: string, index: number, key: string) => {
        return (

            <Tab
                onMouseOver={this.setTabDropItem}
                onTouchMove={(e) => console.log('move')}
                onTouchCancel={(e) => console.log('canc')}
                onTouchCancelCapture={(e) => console.log('can cap')}
                onTouchEnd={(e) => console.log('end')}
                onTouchEndCapture={(e) => console.log('end cap')}
                onTouchMoveCapture={(e) => console.log('move cap')}
                onTouchStart={(e) => console.log('start')}
                onTouchStartCapture={(e) => console.log('start cap')}
                onPointerMove={(e) => console.log('point')}
                onDragOver={(e) => console.log('point')}
                onDrag={(e) => console.log('point')}
                onDragEnter={(e) => console.log('point')}
                onDragStart={(e) => console.log('point')}
                onDrop={(e) => console.log('point')}
                ref={dragProvided.innerRef}
                {...dragProvided.draggableProps}
                {...dragProvided.dragHandleProps}
                label={label}
                style={{
                    ...getItemStyle(
                        snapshot.isDragging,
                        dragProvided.draggableProps.style
                    )
                }}
                {...a11yProps(key, `${index}`)}
            />
        );
    }

    render() {
        let currentState = this.getState();
        let formData = currentState.formdata;
        return (
            <List
                component="nav"
                style={{
                    width: '100%',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    border: 0,
                    overflowX: 'hidden'
                }}
            >
                {
                    this.DataHeader.map((dataIndex: string, index: number) => {
                        let currentIndex = +topBarItems.drop?.[dataIndex];
                        formData = formData?.[dataIndex];
                        // if (!formData) {
                        //     return '';
                        // }
                        // console.log(currentIndex, formData, dataIndex, index, topBarItems)
                        if (cDragIndex < index) {
                            return;
                        }
                        let dropItem = this.getDropItem(formData || [], dataIndex, cDragIndex !== index, currentIndex);
                        if (!isNaN(currentIndex) && currentIndex > -1) {
                            formData = formData?.[currentIndex];
                        }
                        return dropItem;
                    })
                }
                {/* {currentState.steps.map((header, index) => (
                    <ListItem
                        key={header + index}
                        style={{ overflowX: 'hidden' }}
                    >
                        <Droppable droppableId={header + index} >
                            {(provided, snapshot) => (
                                <Tabs
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    value={index}
                                    onChange={this.handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    scrollButtons="on"
                                    aria-label={`${header}DropTabs`}
                                >
                                    {this.DataHeader.map((content, contentIndex) => (
                                        <Draggable
                                            disableInteractiveElementBlocking={true}
                                            key={content + contentIndex}
                                            draggableId={header + index + content + contentIndex}
                                            index={contentIndex}
                                            isDragDisabled={true}
                                        >
                                            {
                                                (dragProvided, snapshot) => (
                                                    <Tab
                                                        ref={dragProvided.innerRef}
                                                        {...dragProvided.draggableProps}
                                                        {...dragProvided.dragHandleProps}
                                                        label={content}
                                                        {...a11yProps(content + contentIndex)}
                                                    />
                                                )}
                                        </Draggable>
                                    ))}
                                </Tabs>
                            )}
                        </Droppable>
                    </ListItem>
                ))} */}
            </List>
        );
    }
}