import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import PanelDnd from '../shared/dnd/panelDnd';
import { SectionsProps, SectionProps } from './renderViewConstants';
// import { Notice } from '../shared/dnd/dndConstants';
import Cells from './cells';
import uuid from 'uuid';
import { Grid, Chip } from '@material-ui/core';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { DroppedItem } from '../shared/dnd/dndConstants';

export default class Sections extends BaseComponent<SectionsProps> {
    handleClick = (currentStep: number, sectionIndex: number) => {
        this.dispatchStore({
            rightSideBar: true,
            propertyWindow: {
                control: this.getPropertyWindowControl({
                    name: 'New Cell',
                    type: 'section',
                    label: 'Add Cell',
                    id: uuid()
                }),
                stepIndex: currentStep,
                sectionIndex: sectionIndex,
                cellIndex: -1,
                rowIndex: -1,
                columnIndex: -1,
                controlIndex: -1
            },
            isChildCalled: true,
            raised: ''
        });
    }

    onLoad = () => {
        var currentState = this.getState();
        var currentStep = currentState.currentStep || 0;
        const props = (index: number, isDropDisabled: boolean, section: SectionProps[0]) => (
            {
                stepIndex: currentStep,
                sectionIndex: index,
                cellIndex: -2,
                rowIndex: -1,
                columnIndex: -1,
                controlIndex: -1,
                index: index,
                itemRaised: currentState.raised,
                isDropDisabled: isDropDisabled,
                length: section?.cells?.length || 0
            }
        )

        const item = (item: any) => (
            {
                item: {
                    aria: 'sections',
                    id: item.id,
                    label: item.label,
                    name: item.name,
                    type: 'section'
                }
            }
        )

        return { props, item };
    }

    render() {
        const { props, item } = this.onLoad();
        var sections = this.props.sections || [];
        return (
            <>
                {
                    sections.map((section, index) => {
                        var itemProp = props(index, false, section);
                        return (
                            <this.GetDragDropItems
                                {...itemProp}
                                {...item(section)}
                                key={section.id + index}
                                content={(dragProvider, dropProvider) => (
                                    <>
                                        {
                                            itemProp.length === 0
                                                ?
                                                <>
                                                    {this.getPlaceholder(dropProvider, 'No Cells')}
                                                    <Grid container={true} direction="row">
                                                        <Grid item={true} xs={12} style={{ textAlign: 'center' }}>
                                                            <Chip
                                                                label="Add Cell"
                                                                style={{ width: '50%' }}
                                                                onClick={() => 
                                                                    this.chipClick(
                                                                        'Cell',
                                                                        'section',
                                                                        { ...itemProp }
                                                                    )}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </>
                                                :
                                                <Cells
                                                    sectionIndex={index}
                                                    section={section}
                                                    isDropDisabled={this.props.isDropDisabled}
                                                />
                                        }
                                        {dropProvider.placeholder}
                                    </>
                                )}
                            />);
                    })
                }
            </>
        );
    }
}