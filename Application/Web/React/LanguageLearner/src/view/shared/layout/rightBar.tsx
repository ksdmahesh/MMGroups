import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import BaseComponent from '../helper/baseComponent';
import { Typography, ButtonGroup, Button } from '@material-ui/core';
import RenderRightBarItems from './renderRightBarItems';
import { Bin, ListTitle } from '../dnd/dndConstants';
import { Droppable } from 'react-beautiful-dnd';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { List, ListItem, Tabs, Tab, ListItemIcon, ListItemText } from '@material-ui/core';

export default class RightBar extends BaseComponent {

    handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => {

    }

    render() {
        return (
            <div>
                <CssBaseline />
                <Drawer
                    // style={{ width: '300px' }}
                    anchor="right"
                    variant="temporary"
                    open={this.getState('rightSideBar')}
                >
                    <RenderRightBarItems />
                </Drawer>
            </div>
        );
    }
}