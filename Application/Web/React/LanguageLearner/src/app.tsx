import React from 'react';
import RouteConfig from './appStart/routeConfig';
import BaseComponent from './view/shared/helper/baseComponent';

export default class App extends BaseComponent {
    componentDidMount() {
        if (window.location.pathname === '/') {
            window.location.assign('/dynamic');
        }
    }
    render() {
        return (
            <RouteConfig />
        );
    }
}