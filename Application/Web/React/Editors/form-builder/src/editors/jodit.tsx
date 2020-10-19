import React from 'react';
import JoditEditor from "jodit-react";
import { Config } from 'jodit/src/config';

export default class Jodit extends React.Component<any, any> {

    editor: JoditEditor | null = null;

    config: Config | undefined | any = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    render() {
        return (
            <JoditEditor
                ref={rf => this.editor = rf}
                value={this.state.content}
                config={this.config}
                onBlur={newContent => this.setState({ content: newContent })} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { }}
            />
        )
    }
}