import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { List, ListItem, Tabs, Tab, ListItemIcon, ListItemText, ButtonGroup, Button, Divider } from '@material-ui/core';
import getIconByName, { getPropertiesByControl } from '../../../constants/constants';
import { RightBarItemsProps } from '../../dynamic/renderViewConstants';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function a11yProps(index: string) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`
    };
}

export default class RenderRightBarItems extends BaseComponent {

    handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => {
        if (value) {
            this.dispatchStore({
                themeInfo: value
            })
        }
    }

    render() {
        var theme = this.getState('themeInfo') || 'Dark';
        return (
            <List
                component="nav"
                style={{
                    width: '100%',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    border: 0,
                    overflowX: 'hidden'
                }}
            >
                <ListItem
                    style={{ overflowX: 'hidden' }}
                >
                    <ListItemText
                        style={{ color: '#aaa' }}
                        primary={'Account Info'}
                    />
                </ListItem>
                <Divider />
                <ListItem
                    style={{ overflowX: 'hidden' }}
                >
                    <ButtonGroup fullWidth={true} color="primary" aria-label="signInfo">
                        <Button>{'Sign In'}</Button>
                        <Button>{'Sign Up'}</Button>
                    </ButtonGroup>
                </ListItem>
                <Divider />
                <ListItem
                    style={{ overflowX: 'hidden' }}
                >
                    <ListItemText
                        style={{ color: '#aaa' }}
                        primary={'Project Info'}
                    />
                </ListItem>
                <Divider />
                <ListItem
                    style={{ overflowX: 'hidden' }}
                >
                    <ButtonGroup fullWidth={true} color="primary" aria-label="projectinfo">
                        <Button>{'Save'}</Button>
                        <Button>{'Open'}</Button>
                    </ButtonGroup>
                </ListItem>
                <Divider />
                <ListItem
                    style={{ overflowX: 'hidden' }}
                >
                    <ListItemText
                        style={{ color: '#aaa' }}
                        primary={'Theme Info'}
                    />
                </ListItem>
                <Divider />
                <ListItem
                    style={{ overflowX: 'hidden' }}
                >
                    <ToggleButtonGroup
                        style={{ width: '100%', border: '1px solid rgba(63, 81, 181, 0.5)' }}
                        value={theme}
                        exclusive={true}
                        size={'small'}
                        color={'primary'}
                        onChange={(e, v) => this.handleChange(e, v)}
                        aria-label="themeinfo"
                    >
                        <ToggleButton color={'primary'} style={{ ...{ width: '50%' }, ...(theme === 'Light' ? { backgroundColor: '#3f51b5', color: '#fff' } : { backgroundColor: '#fff', color: '#3f51b5' }) }} value="Light" aria-label="LightTheme">
                            {'Light'}
                        </ToggleButton>
                        <ToggleButton color={'primary'} style={{ ...{ width: '50%' }, ...(theme === 'Dark' ? { backgroundColor: '#3f51b5', color: '#fff' } : { backgroundColor: '#fff', color: '#3f51b5' }) }} value="Dark" aria-label="DarkTheme">
                            {'Dark'}
                        </ToggleButton>
                    </ToggleButtonGroup>
                </ListItem>
                <Divider />
                <ListItem
                    style={{ overflowX: 'hidden' }}
                >
                    <ListItemText
                        style={{ color: '#aaa' }}
                        primary={'Result Info'}
                    />
                </ListItem>
                <Divider />
                <ListItem
                    style={{ overflowX: 'hidden' }}
                >
                    <ButtonGroup fullWidth={true} color="primary" aria-label="resultinfo">
                        <Button>{'Preview'}</Button>
                        <Button>{'Publish'}</Button>
                    </ButtonGroup>
                </ListItem>
            </List >
        );
    }
}