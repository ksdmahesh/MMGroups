import { Editor, EditorState } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React from 'react';

export default class Wysiwyg extends React.Component<any, any> {

    config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    onEditorStateChange = (editorState: EditorState) => {
        this.setState({ editor: editorState.get('') });
    }

    render() {
        return (
            <Editor
                editorState={this.state.editor}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
            />
        )
    }
}
