import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { List, ListItem, Tabs, Tab } from '@material-ui/core';
import { getPropertiesByControl } from '../../../constants/constants';
import { RightBarItemsProps } from '../../dynamic/renderViewConstants';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function a11yProps(index: string) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`
    };
}

export default class RenderTopBarItems extends BaseComponent<any> {

    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {

    }

    render() {
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
                {this.DataHeader.map((header, index) => (
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
                ))}
            </List>
        );
    }
}