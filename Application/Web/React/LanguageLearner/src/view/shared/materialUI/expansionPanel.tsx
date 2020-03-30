import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import BaseComponent from '../helper/baseComponent';
import { Typography, Grid, IconButton, Box } from '@material-ui/core';
import { ExpanderProps } from '../../dynamic/renderViewConstants';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

export default class ExpansionPanels extends React.Component<ExpanderProps> {

    render() {
        return (
            <div>
                <ExpansionPanel
                    square={true}
                    expanded={true}
                >
                    <ExpansionPanelSummary
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                        style={{
                            borderBottom: '1px solid #ddd',
                            // cursor: 'grab'
                        }}
                    // {...this.props.dragHandleProps}
                    >
                        <Grid container={true} direction="row">
                            <Grid item={true} xs={12} >
                                <Typography
                                    
                                >
                                    <IconButton
                                        edge={false}
                                        color="inherit"
                                        aria-label="drag"
                                        {...this.props.dragHandleProps}
                                    >
                                        <DragHandleIcon />
                                    </IconButton>{this.props.panelHeader}</Typography>
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