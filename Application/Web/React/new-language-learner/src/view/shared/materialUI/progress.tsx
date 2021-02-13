import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import BaseComponent from '../helper/baseComponent';

// tslint:disable-next-line: no-any
export default class CircularIndeterminate extends BaseComponent {
    render() {
        return (
            <div>
                <CircularProgress />
            </div>
        );
    }
}