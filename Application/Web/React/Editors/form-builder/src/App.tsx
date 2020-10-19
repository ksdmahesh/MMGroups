import React from 'react';
import './assets/css/App.css';
import CKEditor from './editors/ckeditor';
import Jodit from './editors/jodit';
import TinyMce from './editors/tinymce';
import Wysiwyg from './editors/wysiwyg';

enum Editors {
  CkEditor,
  Jodit,
  TimyMce,
  Wysiwyg
}

export default class App extends React.Component<any, any> {
  switchEditors = (editors: Editors) => {
    switch (editors) {
      case Editors.CkEditor:
        return <CKEditor />
      case Editors.Jodit:
        return <Jodit />
      case Editors.TimyMce:
        <TinyMce />
      case Editors.Wysiwyg:
        <Wysiwyg />
      default:
        return '';
    }
  }

  render() {
    return (
      <div className="App">
        {this.switchEditors(Editors.CkEditor)}
      </div>
    )
  }
}
