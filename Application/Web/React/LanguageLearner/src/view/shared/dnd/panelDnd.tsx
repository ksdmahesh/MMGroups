import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ExpansionPanels from '../materialUI/expansionPanel';
import { Card, CardContent } from '@material-ui/core';
import BaseComponent from '../helper/baseComponent';
import { PanelProps, PanelState } from '../../dynamic/renderViewConstants';

var currentStep = 0;

export default class PanelDnd extends BaseComponent<PanelProps, PanelState> {

    render() {
        currentStep = this.getState('currentStep');
        var raised = this.getState(`raised`) === `raised${this.props.index}`;
        return (
            <Draggable draggableId={this.props.section.id} index={this.props.index}>
                {
                    (provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                        >
                            <Card
                                {...{ 'aria-label': 'parent' }}
                                onClick={(e) => this.cardRaised(e, `${this.props.index}`, {
                                    control: this.getPropertyWindowControl({
                                        name: this.props.section.name,
                                        type: 'section',
                                        label: this.props.section.name,
                                        id: this.props.section.id
                                    }),
                                    stepIndex: currentStep,
                                    sectionIndex: this.props.index,
                                    columnIndex: -1,
                                    controlIndex: -1
                                })}
                                raised={raised}
                                color={'primary'}
                                style={
                                    raised
                                        ?
                                        {}
                                        :
                                        {
                                            backgroundColor: 'transparent',
                                            boxShadow: 'none'
                                        }
                                }
                            >
                                <CardContent>
                                    <ExpansionPanels
                                        dragHandleProps={provided.dragHandleProps}
                                        panelHeader={this.props.section.name}
                                    >
                                        {this.props.children}
                                    </ExpansionPanels>
                                </CardContent>
                            </Card>
                        </div>
                    )}
            </Draggable>
        );
    }
}