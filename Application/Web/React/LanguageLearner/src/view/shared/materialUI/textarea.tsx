import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import BaseComponent from '../helper/baseComponent';
import { TextAreaProps } from './materialConstants';

export default class Textarea extends BaseComponent<TextAreaProps> {
  render() {
    return (
      <TextareaAutosize
        rows={this.props.rows}
        {...this.setAttributes(this.props)}
        rowsMax={this.props.rowsMax}
        aria-label="maximum height"
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        cols={this.props.cols}
        id={this.props.id}
      />
    );
  }
}