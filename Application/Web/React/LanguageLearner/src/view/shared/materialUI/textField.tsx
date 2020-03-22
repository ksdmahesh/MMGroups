import React from 'react';
import TextField from '@material-ui/core/TextField';
import BaseComponent from '../helper/baseComponent';
import { StandardVarient, FilledTextFieldProps, OutlinedTextFieldProps } from './materialConstants';

export default class InputText extends BaseComponent<StandardVarient | FilledTextFieldProps | OutlinedTextFieldProps> {
    render() {
        return (
            <form noValidate={true} autoComplete="off" style={{ width: '100%' }}>
                <TextField
                    disabled={this.props.disabled}
                    {...this.setAttributes(this.props)}
                    type={this.props.type || 'text'}
                    id={this.props.id}
                    label={this.props.label}
                    variant={this.props.variant}
                    rowsMax={this.props.rowsMax}
                    rows={this.props.rows}
                    style={{ width: '100%' }}
                    size={this.props.size}
                    placeholder={this.props.placeholder}
                    multiline={this.props.multiline}
                />
            </form>
        );
    }
}