import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

export default class TinyMce extends React.Component<{ html: string, dispatch: (data: string) => void; }> {
  
  handleEditorChange = (a: string, editor: TinyMCEEditor) => {
    this.props.dispatch(a);
  };

  render() {
    return (
      <Editor
        initialValue={this.props.html}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}
