import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { FileUploadProps } from './materialConstants';
import { Button } from '@material-ui/core';

export default class FileUpload extends BaseComponent<FileUploadProps> {
    render() {

        return (
            <>
                <input
                    type={'file'}
                    id={this.props.id}
                    onChange={this.props.onChange}
                    style={{ display: 'none' }}
                    accept={this.props.accept}
                    multiple={this.props.multiple}
                />
                <Button
                    color={this.props.color}
                    onClick={() => $(`#${this.props.id}`).click()}
                    disabled={this.props.disabled}
                    size={this.props.size}
                >
                    {this.props.label}
                </Button>
            </>
        );
    }
}