import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class Editor extends Component {
    render() {
        return (
            <div className="App">
                <CKEditor
                    editor={ClassicEditor}
                    data={this.props.html}
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        // const data = editor.getData();
                        // console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        const data = editor.getData();
                        this.props.dispatch(data);
                        // console.log('Blur.', editor, event);
                    }}
                    onFocus={(event, editor) => {
                        // console.log('Focus.', editor);
                    }}
                />
            </div>
        );
    }
}
