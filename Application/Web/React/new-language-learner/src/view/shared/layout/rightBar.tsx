import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import BaseComponent from '../helper/baseComponent';
import RenderRightBarItems from './renderRightBarItems';

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
                    onClose={() => { this.dispatchStore({ rightSideBar: false }) }}
                >
                    <RenderRightBarItems />
                </Drawer>
            </div>
        );
    }
}