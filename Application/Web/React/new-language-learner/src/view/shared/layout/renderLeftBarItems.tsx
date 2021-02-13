import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { Kiosk, Item } from '../dnd/dndConstants';
import { DraggableStateSnapshot, DraggableProvided } from 'react-beautiful-dnd';
import { ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import getIconByName from '../../../constants/constants';
import { AllControlProps, RenderLeftBarItemsProps } from '../../../models/renderViewConstants';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class RenderLeftBarItems extends BaseComponent<RenderLeftBarItemsProps> {

    getInnerHtml(item: AllControlProps, isDarkTheme: boolean) {
        return (
            <ListItem
                style={
                    {
                        height: '56px',
                        ...BaseComponent.getTheme(isDarkTheme, 'control'),
                        // zIndex: 7000,
                        // position: 'relative' 
                    }
                }
                title={item.label}
            >
                <ListItemIcon
                    style={BaseComponent.getTheme(isDarkTheme, 'control')}
                >
                    {getIconByName(`${item.type}`)}
                </ListItemIcon>
                <ListItemText
                    style={BaseComponent.getTheme(isDarkTheme, 'control')}
                    className={'leftbar-container-item-animate'}
                    primary={item.label}
                />
            </ListItem>
        );
    }

    getItemProps(provided: DraggableProvided, snapshot: DraggableStateSnapshot, isDarkTheme: boolean) {
        return {
            ref: provided.innerRef,
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            isDragging: snapshot.isDragging,
            isDarkTheme: isDarkTheme,
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
        let { isDarkTheme, dropProvider, dropSnapshot }= this.props;
        return (
            <Kiosk
                isDraggingOver={this.props.isDragging}
                id={this.props.id}
                style={{ padding: '0', ...BaseComponent.getTheme(isDarkTheme, 'drawer') }}
            >
                {this.props.children}
                {
                    Object.entries(this.props.items).map((dataItem: any, dataIndex: number) => {
                        var id = (dataItem[0]) + dataIndex;
                        return (
                            <Accordion
                                key={id}
                                square={true}
                                id={id}
                                expanded={id === this.getState('leftExpander')}
                                onChange={(e, y) => this.handleChange(id, e, y)}
                                style={{...BaseComponent.getTheme(isDarkTheme, 'header')}}
                            >
                                <AccordionSummary
                                    IconButtonProps={{ style: BaseComponent.getTheme(isDarkTheme, 'drawer') }}
                                    style={BaseComponent.getTheme(isDarkTheme, 'drawer')}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-label="Expand"
                                    aria-controls={id + '-content'}
                                    id={id + 'summary'}
                                >
                                    {dataItem[0]}
                                </AccordionSummary>
                                <AccordionDetails
                                    style={{ width: '100%', userSelect: 'none', ...BaseComponent.getTheme(isDarkTheme, 'drawer') }}
                                >
                                    <div style={{...BaseComponent.getTheme(isDarkTheme, 'drawer')}}>
                                        {dataItem[1].map((item: any, index: number) => {
                                            return (
                                                <Item
                                                    isDragDisabled={!this.props.isDraggable}
                                                    key={item.id}
                                                    id={`${dataItem[0]},${index}`}
                                                    index={index}
                                                    dropProvider={dropProvider}
                                                    dropSnapshot={dropSnapshot}
                                                >
                                                    {this.getInnerHtml(item, isDarkTheme)}
                                                </Item>
                                            );
                                        })}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })
                }
            </Kiosk>
        );
    }
}