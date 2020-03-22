import React from 'react';
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import BaseComponent from '../helper/baseComponent';
import { StandardVarient, FilledTextFieldProps, OutlinedTextFieldProps } from './materialConstants';

export default class InputPassword extends BaseComponent<
    StandardVarient | FilledTextFieldProps | OutlinedTextFieldProps
    > {

    render() {
        const handleClickShowPassword = () => {
            this.dispatchStore({ showPassword: !this.getState('showPassword') });
        };
        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
        };
        return (
            <FormControl>
                <InputLabel htmlFor={this.props.id}>Password</InputLabel>
                <Input
                    disabled={this.props.disabled}
                    id={this.props.id}
                    type={this.getState('showPassword') ? 'text' : 'password'}
                    {...this.setAttributes(this.props)}
                    label={this.props.label}
                    variant={this.props.variant}
                    size={this.props.size}
                    placeholder={this.props.placeholder}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {this.getState('showPassword') ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        );
    }
}