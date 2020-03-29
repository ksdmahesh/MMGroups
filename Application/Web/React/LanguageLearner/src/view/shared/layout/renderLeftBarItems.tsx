import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { Kiosk, Item, Clone } from '../dnd/dndConstants';
import { Draggable, DraggableStateSnapshot, DraggableProvided } from 'react-beautiful-dnd';
import { ListItem, ListItemIcon, ListItemText, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import getIconByName from '../../../constants/constants';
import { AllControlProps, RenderLeftBarItemsProps } from '../../dynamic/renderViewConstants';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class RenderLeftBarItems extends BaseComponent<RenderLeftBarItemsProps> {

    getInnerHtml(item: AllControlProps) {
        return (
            <ListItem
                style={
                    {
                        height: '56px'
                    }
                }
                title={item.label}
            >
                <ListItemIcon>
                    {getIconByName(`${item.type}`)}
                </ListItemIcon>
                <ListItemText
                    className={'leftbar-container-item-animate'}
                    primary={item.label}
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

    handleChange = (event: string, s: any, d: any) => {
        if (!d) {
            this.dispatchStore({ leftExpander: '' });
        } else {
            this.dispatchStore({ leftExpander: event });
        }
    };

    render() {
        return (
            <Kiosk
                id={this.props.id}
                style={{ padding: '0' }}
            >
                {
                    Object.entries(this.props.items).map((dataItem: any, dataIndex: number) => {
                        var id = (dataItem[0]) + dataIndex;
                        return (
                            <ExpansionPanel
                                key={id}
                                square={true}
                                id={id}
                                expanded={id === this.getState('leftExpander')}
                                onChange={(e, y) => this.handleChange(id, e, y)}
                            >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-label="Expand"
                                    aria-controls={id + '-content'}
                                    id={id + 'summary'}
                                >
                                    {dataItem[0]}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails
                                    style={{ width: '100%', userSelect: 'none' }}
                                >
                                    <div>
                                        {dataItem[1].map((item: any, index: number) => {
                                            return (
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
                                            );
                                        })}
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        );
                    })
                }
            </Kiosk>
        );
    }
}