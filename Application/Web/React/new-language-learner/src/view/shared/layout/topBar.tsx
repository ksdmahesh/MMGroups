import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import BaseComponent from '../helper/baseComponent';
import {  Typography } from '@material-ui/core';
import RenderTopBarItems from './renderTopBarItems';

export default class TopBar extends BaseComponent {

    render() {
        return (
            <React.Fragment>
                <div
                    style={{ width: '100%', overflow: 'hidden' }}
                >
                    <CssBaseline />
                    <Drawer
                        style={{ width: '100%' }}
                        anchor="top"
                        variant={'persistent'}
                        open={this.getState('topSideBar')}
                        PaperProps={{ style: { height: '100%' } }}
                    >
                        <div>
                            <Typography
                                component={'h5'}
                                style={{
                                    width: '90%',
                                    margin: 5,
                                    padding: 5
                                }}
                                noWrap={true}
                            >
                                {'Drop Item'}
                            </Typography>
                        </div>
                        <Divider />
                        <RenderTopBarItems />
                    </Drawer>
                </div>
            </React.Fragment>
        );
    }
}