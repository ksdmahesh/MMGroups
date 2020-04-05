import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import BaseComponent from '../helper/baseComponent';
import { Typography, Grid, IconButton, Box, ListItem, ListItemText } from '@material-ui/core';
import { ExpanderProps } from '../../dynamic/renderViewConstants';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { DroppedItem, Item, Clone } from '../dnd/dndConstants';

export default class ExpansionPanels extends React.Component<ExpanderProps> {

    getItemProps(provided: DraggableProvided, snapshot: DraggableStateSnapshot) {
        return {
            ref: provided.innerRef,
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            isDragging: snapshot.isDragging,
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
        return (
            <div style={{ padding: '0' }}>
                <ExpansionPanel
                    square={true}
                    expanded={true}
                >
                    <ExpansionPanelSummary
                        aria-label="Expand"
                        style={{
                            borderBottom: '1px solid #ddd',
                        }}
                    >

                        <Grid container={true} direction="row" >
                            <Grid item={true} xs={12} >
                                <Draggable
                                    disableInteractiveElementBlocking={true}
                                    draggableId={this.props.location}
                                    index={this.props.index}
                                >
                                    {
                                        (provided, snapshot) => (
                                            <>
                                                <Item
                                                    {...this.getItemProps(provided, snapshot)}
                                                >
                                                    {this.getInnerHtml(this.props.panelHeader)}
                                                </Item>
                                                {snapshot.isDragging && (
                                                    <Clone>
                                                        {this.getInnerHtml(this.props.panelHeader)}
                                                    </Clone>
                                                )}
                                            </>
                                        )
                                    }
                                </Draggable>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                        style={{ width: '100%', userSelect: 'none' }}
                    >
                        <div
                            style={{ width: '100%' }}
                        >
                            {this.props.children}
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}