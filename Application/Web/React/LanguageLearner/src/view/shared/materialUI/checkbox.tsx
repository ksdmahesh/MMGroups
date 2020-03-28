import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import BaseComponent from '../helper/baseComponent';
import { CheckBoxProps } from './materialConstants';

export default class CheckBox extends BaseComponent<CheckBoxProps> {

    render() {

        return (
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            {...this.setAttributes(this.props, undefined, true)}
                            value={this.props.value}
                            color={this.props.color}
                            disabled={this.props.disabled}
                            size={this.props.size}
                        />
                    }
                    label={this.props.label}
                />
            </div>
        );
    }
}