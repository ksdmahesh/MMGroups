import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { Kiosk, Item, Clone } from '../dnd/dndConstants';
import { Draggable, DraggableStateSnapshot, DraggableProvided } from 'react-beautiful-dnd';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import getIconByName from '../../../constants/constants';
import { DraggerProps, RenderLeftBarItemsProps } from '../../dynamic/renderViewConstants';

export default class RenderLeftBarItems extends BaseComponent<RenderLeftBarItemsProps> {

    getInnerHtml(item: DraggerProps[0]) {
        return (
            <ListItem
                style={
                    {
                        height: '56px'
                    }
                }
                title={item.content}
            >
                <ListItemIcon>
                    {getIconByName(item.content)}
                </ListItemIcon>
                <ListItemText
                    className={'leftbar-container-item-animate'}
                    primary={item.content}
                />
            </ListItem>
        );
    }

    getItemProps(provided: DraggableProvided, snapshot: DraggableStateSnapshot) {
        return {
            ref: provided.innerRef,
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            isDragging: snapshot.isDragging,
            style: provided.draggableProps.style
        };
    }

    render() {
        return (
            <Kiosk
                id={this.props.id}
                style={{ padding: '0' }}
            >
                {this.props.items.map((item, index) => (
                    <Draggable
                        isDragDisabled={!this.props.isDraggable}
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                    >
                        {
                            (provided, snapshot) => (
                                <React.Fragment>
                                    <Item
                                        {...this.getItemProps(provided, snapshot)}
                                    >
                                        {this.getInnerHtml(item)}
                                    </Item>
                                    {snapshot.isDragging && (
                                        <Clone>
                                            {this.getInnerHtml(item)}
                                        </Clone>
                                    )}
                                </React.Fragment>
                            )}
                    </Draggable>
                ))}
            </Kiosk>
        );
    }
}