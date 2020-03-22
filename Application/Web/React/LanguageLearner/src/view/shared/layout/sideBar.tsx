import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import BaseComponent from '../helper/baseComponent';

export default class SideBar extends BaseComponent {

    render() {

        type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
        const toggleDrawer = (side: DrawerSide, open: boolean) => (
            event: React.KeyboardEvent | React.MouseEvent,
        ) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            this.dispatchStore({ [side]: open });
            this.setState({ ...this.state, [side]: open });
        };

        const sideList = (side: DrawerSide) => (
            <div
                role="presentation"
                onClick={toggleDrawer(side, false)}
                onKeyDown={toggleDrawer(side, false)}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button={true} key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button={true} key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        const fullList = (side: DrawerSide) => (
            <div
                role="presentation"
                onClick={toggleDrawer(side, false)}
                onKeyDown={toggleDrawer(side, false)}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button={true} key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button={true} key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
        return (
            <div>
                <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
                <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
                <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
                <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button>
                <Drawer
                    anchor="left"
                    variant="persistent"
                    open={this.getState('left')}
                    onClose={toggleDrawer('left', false)}
                >
                    {sideList('left')}
                </Drawer>
                <Drawer anchor="top" open={this.getState('top')} onClose={toggleDrawer('top', false)}>
                    {fullList('top')}
                </Drawer>
                <Drawer anchor="bottom" open={this.getState('bottom')} onClose={toggleDrawer('bottom', false)}>
                    {fullList('bottom')}
                </Drawer>
                <Drawer anchor="right" open={this.getState('right')} onClose={toggleDrawer('right', false)}>
                    {sideList('right')}
                </Drawer>
            </div>
        );
    }
}