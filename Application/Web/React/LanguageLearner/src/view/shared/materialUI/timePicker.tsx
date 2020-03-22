import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker
} from '@material-ui/pickers';
import BaseComponent from '../helper/baseComponent';
import { TimePickerProps } from './materialConstants';

export default class TimePicker extends BaseComponent<TimePickerProps> {
    render() {

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container={true} justify="space-around">
                    <KeyboardTimePicker
                        disabled={this.props.disabled}
                        variant={this.props.variant}
                        margin={this.props.margin}
                        id={this.props.id}
                        color={this.props.color}
                        label={this.props.label}
                        format={this.props.format}
                        {...this.setAttributes(this.props)}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}