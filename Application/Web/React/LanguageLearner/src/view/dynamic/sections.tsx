import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { SectionsProps, SectionProps } from './renderViewConstants';
// import { Notice } from '../shared/dnd/dndConstants';
import Cells from './cells';
import { Grid, Chip } from '@material-ui/core';
import { dragIndex } from '../shared/dnd/dndConstants';
// import ExpansionPanels from '../shared/materialUI/expansionPanel';

export default class Sections extends BaseComponent<SectionsProps> {

    onLoad = () => {
        var currentState = this.getState();
        var currentStep = currentState.currentStep || 0;
        const props = (index: number, section: SectionProps[0], isDropDisabled: boolean = true, dragIndex: number = 0) => (
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
                length: section?.cells?.length || 0,
                isVertical: true,
                location: `${currentStep},${index}`,
                dragIndex: dragIndex
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
                        dragIndex.index += 1;
                        var itemProp = props(index, section, this.props.isDropDisabled, dragIndex.index);
                        return (
                            <this.GetDragDropItems
                                {...itemProp}
                                {...item(section)}
                                key={section.id + index}
                                content={(dragProvider, dropProvider, snapshot, dropSnapshot) => (
                                    itemProp.length === 0
                                        ?
                                        <>
                                            {this.getPlaceholder(this.props.dropProvider, 'No Cells')}
                                            <Grid container={true} direction="row">
                                                <Grid item={true} xs={12} style={{ textAlign: 'center' }}>
                                                    <Chip
                                                        label="Add Cell"
                                                        style={{ width: '50%' }}
                                                        onClick={() =>
                                                            this.chipClick(
                                                                'Cell',
                                                                'section',
                                                                { ...itemProp, ...{ cellIndex: -1 } }
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
                                            dropProvider={this.props.dropProvider}
                                        />
                                )}
                            />
                        );
                    })
                }
            </>
        );
    }
}