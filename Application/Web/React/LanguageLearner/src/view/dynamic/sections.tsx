import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import PanelDnd from '../shared/dnd/panelDnd';
import { TabPanelProps, SectionsProps } from './renderViewConstants';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Droppable } from 'react-beautiful-dnd';
import { Notice } from '../shared/dnd/dndConstants';
import Rows from './rows';

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
                                                {section.rows.length === 0
                                                    ?
                                                    <Notice style={{ userSelect: 'none' }} >
                                                        {'No Columns'}
                                                    </Notice>
                                                    :
                                                    <Rows
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