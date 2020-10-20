import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';

export default class Wysiwyg extends React.Component<{ html: string, dispatch: (data: string) => void; }> {

    config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    loadContent = (html: string) => {
        const contentBlock = htmlToDraft(html || '');
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            return EditorState.createWithContent(contentState);
        } else {
            return EditorState.createEmpty();
        }
    }

    state = {
        editorState: this.loadContent(this.props.html)
    }

    onEditorStateChange = (editorState: EditorState) => {
        this.setState({ editorState });
    }

    componentWillUnmount(){
        const html = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
        this.props.dispatch(html);
    }
    render() {
        return (
            <Editor
                editorState={this.state.editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
            />
        )
    }
}
