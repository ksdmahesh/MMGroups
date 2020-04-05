import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BaseComponent from '../helper/baseComponent';
import { IconButton, Typography } from '@material-ui/core';
import RenderTopBarItems from './renderTopBarItems';
import CheckIcon from '@material-ui/icons/Check';
// import { PropertyWindowProps } from '../../dynamic/renderViewConstants';
import uuid from 'uuid';
import { HelperClass } from '../helper/typeCheck';
import { Notice } from '../dnd/dndConstants';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

var isDisabled = false;

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
                        // PaperProps={{variant: 'outlined', style: {height: '100%', position: 'fixed'}}}
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