import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { List, ListItem, Tabs, Tab } from '@material-ui/core';
import { getPropertiesByControl } from '../../../constants/constants';
import { RightBarItemsProps, DataProps } from '../../dynamic/renderViewConstants';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid';

function a11yProps(key: string, index: string) {
    return {
        id: `scrollable-auto-top-tab-${index}`,
        'aria-controls': `${key}-${index}`
    };
}

var prevAria = '';
var topBarItems: any = {};
export default class RenderTopBarItems extends BaseComponent<any> {

    handleChange = (event: React.ChangeEvent<{}>, newValue: number, key: string) => {
        this.dispatchStore({ [`top-${key}`]: newValue });
    }

    setTabDropItem = (e: any) => {
        let aria = e.currentTarget.getAttribute('aria-controls');
        if (prevAria != aria) {
            prevAria = aria;
            let splitAria = aria.split('-');
            topBarItems[splitAria[0]] = splitAria[1];
            this.dispatchStore({ topBarItems: topBarItems });
        }
    }

    getDropItem = (items: any, key: string) => {
        return (
            <ListItem
                style={{ overflowX: 'hidden' }}
            >
                <Droppable droppableId={`top-${key}`} >
                    {(provided, snapshot) => (
                        <Tabs
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            value={+(this.getState(`top-${key}`) || 0)}
                            onChange={(e, n) => this.handleChange(e, n, key)}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="on"
                            aria-label={`top-${key}`}
                        >
                            {items.map((item: { id: string, label: string }, index: number) => (
                                <Draggable
                                    disableInteractiveElementBlocking={true}
                                    key={`top-${item.id + index}`}
                                    draggableId={`top-${key + index}`}
                                    index={index}
                                    isDragDisabled={true}
                                >
                                    {
                                        (dragProvided, snapshot) => (
                                            <Tab
                                                onMouseOver={this.setTabDropItem}
                                                ref={dragProvided.innerRef}
                                                {...dragProvided.draggableProps}
                                                {...dragProvided.dragHandleProps}
                                                label={item.label}
                                                {...a11yProps(key, `${index}`)}
                                            />
                                        )}
                                </Draggable>
                            ))}
                        </Tabs>
                    )}
                </Droppable>
            </ListItem>
        );
    }

    render() {
        let currentState = this.getState();
        let topBarItems = currentState.topBarItems;
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
                        let currentIndex = +topBarItems?.[dataIndex];
                        formData = formData?.[dataIndex];
                        if (!formData) {
                            return '';
                        }
                        console.log(currentIndex, formData, dataIndex, index, topBarItems)
                        let dropItem = this.getDropItem(formData, dataIndex);
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