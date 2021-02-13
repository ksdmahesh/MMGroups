import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TypeCheck from '../helper/typeCheck';
import BaseComponent from '../helper/baseComponent';
import { ButtonProps } from './materialConstants';

export default class InputButton extends BaseComponent<ButtonProps> {
    render() {
        return (
            <div>
                {
                    TypeCheck.isArray(this.props.value)
                        ?
                        <ButtonGroup
                            orientation={this.props.orientation}
                            {...this.props.variant ? { variant: this.props.variant } : ''}
                            color={this.props.color}
                            disabled={this.props.disabled}
                            size={this.props.size}
                        >
                            {
                                this.props.value && (this.props.value as []).map((value: string, index: number) => {
                                    return (
                                        <Button
                                            key={`${value}-${index}`}
                                        >
                                            {value}
                                        </Button>
                                    );
                                })
                            }
                        </ButtonGroup>
                        :
                        <Button
                            {...this.props.variant ? { variant: this.props.variant } : ''}
                            color={this.props.color}
                            disabled={this.props.disabled}
                            size={this.props.size}
                        >
                            {this.props.value}
                        </Button>
                }
            </div>
        );
    }
}