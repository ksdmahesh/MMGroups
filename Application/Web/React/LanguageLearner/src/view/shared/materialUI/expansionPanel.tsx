import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import BaseComponent from '../helper/baseComponent';
import { Typography, Grid, IconButton, Box, ListItem, ListItemText } from '@material-ui/core';
import { ExpanderProps } from '../../dynamic/renderViewConstants';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { DroppedItem, StyledItem, Item, Clone, clientSelectionRef } from '../dnd/dndConstants';

export default class ExpansionPanels extends React.Component<ExpanderProps> {

    getItemProps(provided: DraggableProvided, snapshot: DraggableStateSnapshot, isDarkTheme: boolean, isExpander: boolean) {
        return {
            ref: provided.innerRef,
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            isDragging: snapshot.isDragging,
            isDarkTheme: isDarkTheme,
            isExpander: isExpander,
            style: provided.draggableProps.style
        };
    }

    getInnerHtml(item: string) {
        return (
            <ListItem
                style={
                    {
                        // height: '56px'
                    }
                }
                title={item}
            >
                <ListItemText
                    primary={item}
                />
            </ListItem>
        );
    }

    render() {
        let { isDarkTheme, dropProvider, dropSnapshot, index, location } = this.props;
        return (
            <div style={{ padding: '0' }}>
                <ExpansionPanel
                    square={true}
                    expanded={true}
                    style={BaseComponent.getTheme(isDarkTheme, 'header')}
                >
                    <ExpansionPanelSummary
                        aria-label="Expand"
                        style={{
                            borderBottom: '1px solid #ddd',
                            ...BaseComponent.getTheme(isDarkTheme, 'header')
                        }}
                    >

                        <Grid container={true} direction="row" >
                            <Grid item={true} xs={12}
                                ref={dropProvider.innerRef}
                                {...dropProvider.droppableProps}
                            >
                                <Item
                                    id={location}
                                    index={index}
                                    isDarkTheme={isDarkTheme}
                                    isExpander={true}
                                    dropProvider={dropProvider}
                                    dropSnapshot={dropSnapshot}
                                >
                                    {this.getInnerHtml(this.props.panelHeader)}
                                </Item>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                        style={{ width: '100%', userSelect: 'none', ...BaseComponent.getTheme(isDarkTheme, 'drawer') }}
                    >
                        <div
                            style={{ width: '100%', ...BaseComponent.getTheme(isDarkTheme, 'drawer') }}
                        >
                            {this.props.children}
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}