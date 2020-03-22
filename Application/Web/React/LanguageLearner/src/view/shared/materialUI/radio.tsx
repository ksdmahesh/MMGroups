import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import BaseComponent from '../helper/baseComponent';
import { RadioProps } from './materialConstants';
import TypeCheck from '../helper/typeCheck';

export default class RadioButtonsGroup extends BaseComponent<RadioProps> {

    render() {
        var values: Array<string> = [];
        if (TypeCheck.isArray(this.props.value)) {
            values = this.props.value as Array<string>;
        } else {
            values.push(this.props.value as string);
        }
        return (
            <div>
                <FormControl>
                    <FormLabel>{this.props.label}</FormLabel>
                    <RadioGroup
                        disabled={this.props.disabled}
                        size={this.props.size}
                        row={this.props.orientation === 'vertical'}
                        aria-label={this.props.label}
                        id={this.props.id}
                        {...this.setAttributes(this.props, undefined, true)}
                    >
                        {
                            values.map((value, index) => {
                                return (
                                    <FormControlLabel
                                        key={`${value}-${index}`}
                                        value={value}
                                        control={<Radio />}
                                        label={value}
                                    />
                                );
                            })
                        }
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}