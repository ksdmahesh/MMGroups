import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import AntSwitch from '@material-ui/core/Switch';
import { Grid, Typography } from '@material-ui/core';
import BaseComponent from '../helper/baseComponent';
import { TogglerProps } from './materialConstants';

export default class Toggler extends BaseComponent<TogglerProps>  {
    render() {
        return (
            <FormGroup row={true}>
                <Typography component="div">
                    <Grid component="label" container={true} alignItems="center" >
                        <Grid item={true}>Off</Grid>
                        <Grid item={true}>
                            <AntSwitch
                                {...this.setAttributes(this.props, undefined, true)}
                                value={this.props.value || ''}
                                color={this.props.color}
                                size={this.props.size}
                                disabled={this.props.disabled}
                            />
                        </Grid>
                        <Grid item={true}>On</Grid>
                    </Grid>
                </Typography>
            </FormGroup>
        );
    }
}