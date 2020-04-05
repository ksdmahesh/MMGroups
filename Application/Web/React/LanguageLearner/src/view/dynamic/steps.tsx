import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import TabDnd from '../shared/dnd/tabDnd';
import Sections from './sections';
import { StepProps, TabPanelProps } from './renderViewConstants';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Droppable } from 'react-beautiful-dnd';
import { Grid, Chip } from '@material-ui/core';
import uuid from 'uuid';
import { dragIndex } from '../shared/dnd/dndConstants';

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

export default class Steps extends BaseComponent<StepProps> {

    handleClick = (currentStep: number) => {
        this.dispatchStore({
            bottomSideBar: true,
            propertyWindow: {
                control: this.getPropertyWindowControl({
                    name: 'New Section',
                    type: 'section',
                    label: 'Add Section',
                    id: uuid()
                }),
                stepIndex: currentStep,
                sectionIndex: -1,
                cellIndex: -1,
                rowIndex: -1,
                columnIndex: -1,
                controlIndex: -1
            },
            isChildCalled: false,
            raised: ''
        });
    }

    render() {
        var currentStep = this.getState('currentStep');
        var steps = this.props.steps || [];
        dragIndex.index = 0;
        return (
            <TabDnd tabHeaders={steps} >
                {
                    steps.map((step, index) => {
                        return (
                            <TabPanel
                                key={`${step.id}-${index}`}
                                value={currentStep}
                                index={index}
                            >
                                {
                                    currentStep === index
                                        ?
                                        <>
                                            {step.sections.length === 0
                                                ?
                                                <>
                                                    {this.getPlaceholder(this.props.dropProvider, 'No Sections')}
                                                    <Grid container={true} direction="row">
                                                        <Grid item={true} xs={12} style={{ textAlign: 'center' }}>
                                                            <Chip
                                                                label="Add Section"
                                                                style={{ width: '50%' }}
                                                                onClick={() => this.handleClick(currentStep)}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </>
                                                :
                                                <Sections
                                                    dropProvider={this.props.dropProvider}
                                                    currentStep={currentStep}
                                                    index={index}
                                                    sections={step.sections}
                                                    isDropDisabled={this.props.isDropDisabled || false}
                                                />
                                            }
                                        </>
                                        :
                                        ''
                                }
                            </TabPanel>
                        );
                    })
                }
            </TabDnd>
        );
    }
}