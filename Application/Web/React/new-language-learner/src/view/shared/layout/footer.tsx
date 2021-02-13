import * as React from 'react';
import BaseComponent from '../helper/baseComponent';
import { Toolbar, Typography, AppBar } from '@material-ui/core';
import { FooterProps } from '../../../models/renderViewConstants';

class Footer extends BaseComponent<FooterProps> {

    render() {
        var isDarkTheme = this.props.isDarkTheme;
        return (
            <footer id="footer">
                <div style={{ flexGrow: 1 }}>
                    <AppBar position="static" style={BaseComponent.getTheme(isDarkTheme, 'header')}>
                        <Toolbar
                            style={{ minHeight: '48px' }}
                        >
                            <Typography variant={'subtitle1'} style={{ flexGrow: 1, textAlign: 'center' }}>
                                &nbsp;{`Language Learner `}&copy;{new Date().getFullYear()}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </footer>
        );
    }
}
export default Footer;
