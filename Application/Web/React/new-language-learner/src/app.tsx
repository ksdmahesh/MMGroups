import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import RouteConfig from './routes/routeConfig';
import { themes } from './themes/themes';
import BaseComponent from './view/shared/helper/baseComponent';

export default class App extends BaseComponent {
    componentDidMount() {
        if (window.location.pathname === '/') {
            window.location.assign('/dynamic');
        }
    }
    render() {
        return (
            <ThemeProvider theme={themes}>
                <RouteConfig />
            </ThemeProvider>
        );
    }
}