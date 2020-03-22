import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import PanelDnd from '../shared/dnd/panelDnd';
import { IconButton, Badge } from '@material-ui/core';
import Columns from './columns';
import { TabPanelProps, SectionsProps, DataProps } from './renderViewConstants';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Droppable } from 'react-beautiful-dnd';
import uuid from 'uuid';
import { Notice } from '../shared/dnd/dndConstants';

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

    addList = (count: number, sectionIndex: number) => {
        var currentState = this.getState();
        var formdata: DataProps = currentState.formdata;
        var currentStep: number = currentState.currentStep;
        var colHeaders = formdata.steps[currentStep].sections;
        var droppedControlData = colHeaders[sectionIndex];
        var keys = droppedControlData.columns;

        if (count > keys.length) {
            while (formdata.steps[currentStep].sections[sectionIndex].columns.length < count) {
                var newId = uuid();
                var newCol = { id: newId, name: newId, controls: [] };
                formdata.steps[currentStep].sections[sectionIndex].columns.push(newCol);
            }
            this.dispatchStore({
                formdata: formdata
            });
        } else if (keys.length - count > 0) {
            this.dispatchStore({
                showCancelButton: true,
                modalTitle: 'Alert',
                modalContent: `Need to delete last ${keys.length - count} (column)s`,
                modalOpen: true,
                modalCloseCallback: (event: React.MouseEvent<
                    HTMLAnchorElement,
                    MouseEvent
                >) => this.removeColumns(count, sectionIndex)
            });
        }
    }

    removeColumns = (count: number, sectionIndex: number) => {
        var currentState = this.getState();
        var formdata: DataProps = currentState.formdata;
        var currentStep: number = currentState.currentStep;
        var colHeaders = formdata.steps[currentStep].sections;
        var droppedControlData = colHeaders[sectionIndex];
        var keys = droppedControlData.columns;

        for (let index = keys.length; index > count; index--) {
            formdata.steps[currentStep].sections[sectionIndex].columns.pop();
        }
        this.dispatchStore({
            formdata: formdata,
            modalOpen: false,
        });
    }

    getColumnButtons(sectionIndex: number, length: number) {
        return (
            <>
                <IconButton color={'primary'} onClick={(e) => this.addList(1, sectionIndex)}>
                    <Badge color={length >= 1 ? 'primary' : 'default'} badgeContent={1} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(2, sectionIndex)}>
                    <Badge color={length >= 2 ? 'primary' : 'default'} badgeContent={2} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(3, sectionIndex)}>
                    <Badge color={length >= 3 ? 'primary' : 'default'} badgeContent={3} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
                <IconButton color={'primary'} onClick={(e) => this.addList(4, sectionIndex)}>
                    <Badge color={length === 4 ? 'primary' : 'default'} badgeContent={4} >
                        {/* <MailIcon /> */}
                    </Badge>
                </IconButton>
            </>
        );
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
                                                {this.getColumnButtons(index, section.columns.length)}
                                                {section.columns.length === 0
                                                    ?
                                                    <Notice style={{ userSelect: 'none' }} >
                                                        {'No Columns'}
                                                    </Notice>
                                                    :
                                                    <Columns
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