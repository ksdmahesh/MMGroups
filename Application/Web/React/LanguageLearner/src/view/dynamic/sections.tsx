import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import PanelDnd from '../shared/dnd/panelDnd';
import { TabPanelProps, SectionsProps } from './renderViewConstants';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Droppable } from 'react-beautiful-dnd';
import { Notice } from '../shared/dnd/dndConstants';
import Cells from './cells';
import uuid from 'uuid';
import { Grid, Chip } from '@material-ui/core';

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

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
    render() {

        return (
            <TabPanel
                value={this.props.currentStep}
                index={this.props.index}
            >
                <Droppable
                    droppableId="panelHeaders"
                    isDropDisabled={!this.props.isDropDisabled}
                >
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                this.props.sections.map((section, index) => {
                                    return (
                                        <PanelDnd
                                            key={`${section.id}-${index}`}
                                            isDropDisabled={this.props.isDropDisabled}
                                            section={section}
                                            index={index}
                                        >
                                            <React.Fragment>
                                                {section.cells.length === 0
                                                    ?
                                                    <Grid container={true} direction="row">
                                                        <Grid item={true} xs={12} style={{ textAlign: 'center' }}>
                                                            <Chip
                                                                label="Add Cell"
                                                                style={{ width: '50%' }}
                                                                onClick={() => this.handleClick(this.getState('currentStep'), index)}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    // <Notice style={{ userSelect: 'none' }} >
                                                    //     {'No Cells'}
                                                    // </Notice>
                                                    :
                                                    <Cells
                                                        sectionIndex={index}
                                                        section={section}
                                                        isDropDisabled={this.props.isDropDisabled}
                                                    />
                                                }
                                            </React.Fragment>
                                        </PanelDnd>
                                    );
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </TabPanel>
        );
    }
}