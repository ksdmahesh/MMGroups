import * as React from 'react';
import { ConnectComponent } from '../constants/default';

export default class StartUp extends React.Component<{component: React.ComponentType}> {

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
