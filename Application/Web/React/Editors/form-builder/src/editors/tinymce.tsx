import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { activeData } from '../App';

export default class TinyMce extends React.Component<{ html: string, dispatch: (data: string) => void; }> {

  handleEditorChange = (html: string, editor: TinyMCEEditor) => {
    activeData.html = html;
    this.props.dispatch(html);
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
            `undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help`
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}
