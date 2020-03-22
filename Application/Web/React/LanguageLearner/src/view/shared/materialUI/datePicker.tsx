import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import BaseComponent from '../helper/baseComponent';
import { DatePickerProps } from './materialConstants';

export default class DatePicker extends BaseComponent<DatePickerProps> {
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container={true} justify="space-around">
                    <KeyboardDatePicker
                        disabled={this.props.disabled}
                        variant={this.props.variant}
                        margin={this.props.margin}
                        defaultValue={this.props.defaultValue || '01/01/0001'}
                        id={this.props.id}
                        label={this.props.label}
                        format={this.props.format || 'MM/dd/yyyy'}
                        color={this.props.color}
                        {...this.setAttributes(this.props, undefined, undefined, undefined, '01/01/0001')}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}