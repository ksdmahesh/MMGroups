import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { List } from '@material-ui/core';
import { getPropertiesByControl } from '../../../constants/constants';
import { BottomBarItemsProps } from '../../dynamic/renderViewConstants';

export default class RenderBottomBar extends BaseComponent<BottomBarItemsProps> {

    render() {
        var currentProperty = this.props.propertyWindow?.control;
        if (!currentProperty) {
            return '';
        }
        var isDarkTheme = this.props.isDarkTheme;
        return (
            <List
                component="nav"
                style={{
                    width: '100%',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    border: 0,
                    overflowX: 'hidden',
                    ...BaseComponent.getTheme(isDarkTheme, 'drawer')
                }}
            >
                {getPropertiesByControl(currentProperty, isDarkTheme)}
            </List>
        );
    }
}