import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { List } from '@material-ui/core';
import { getPropertiesByControl } from '../../../constants/constants';
import { RightBarItemsProps } from '../../dynamic/renderViewConstants';

export default class RenderRightBarItems extends BaseComponent<RightBarItemsProps> {

    componentDidMount() {
        $(`#rightBar-Items`).css({ 'top': (($('#rightbar-button-holder').outerHeight() || 0) + 1) + 'px' });
    }

    render() {
        var currentProperty = this.props.propertyWindow?.control;
        if (!currentProperty) {
            return '';
        }
        return (
            <List
                component="nav"
                style={{
                    width: '300px',
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    border: 0,
                    overflowX: 'hidden'
                }}
                id={'rightBar-Items'}
            >
                {getPropertiesByControl(currentProperty)}
            </List>
        );
    }
}