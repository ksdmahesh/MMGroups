import React from 'react';
import JoditEditor from "jodit-react";
import { Config } from 'jodit/src/config';

export default class Jodit extends React.Component<{ html: string, dispatch: (data: string) => void; }> {

    editor: JoditEditor | null = null;

    config: Config | undefined | any = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    render() {
        return (
            <JoditEditor
                ref={rf => this.editor = rf}
                value={this.props.html || ''}
                config={this.config}
                onBlur={(ev: any) => this.props.dispatch(ev.target.innerHTML) } // preferred to use only this option to update the content for performance reasons
                onChange={ev => { }}
            />
        )
    }
}