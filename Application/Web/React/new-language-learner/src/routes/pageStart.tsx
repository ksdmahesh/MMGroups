import * as React from 'react';
import { ConnectComponent } from '../constants/defaultConstants';

export default class PageStart extends React.Component<{component: React.ComponentType}> {

    render() {
        const component = this.props.component;
        if (component) {
            const Connect = ConnectComponent(component);
            return (
                <Connect />
            );
        } else {
            return '';
        }
    }
}
