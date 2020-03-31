import React from 'react';
import { CircularProgress, Backdrop } from '@material-ui/core';
import BaseComponent from '../helper/baseComponent';

export default class BackDrop extends BaseComponent {
    render() {
        return (
            <Backdrop
                open={this.props.open}
                onClick={() => {
                    this.dispatchStore({ backDrop: false });
                }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }
}