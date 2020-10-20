import React from 'react';
import './assets/css/App.css';
import Editor from './editors/ckeditor';
import Jodit from './editors/jodit';
import TinyMce from './editors/tinymce';
import Wysiwyg from './editors/wysiwyg';

enum Editors {
  Jodit = '1',
  TimyMce = '2',
  CkEditor = '3',
  Wysiwyg = '4'
}

export default class App extends React.Component<any, any> {

  state = {
    editorType: '1',
    html: ''
  }

  dispatch = (html: string) => {
    this.setState({ html });
  }

  switchEditors = (editors: Editors) => {
    switch (editors) {
      case Editors.CkEditor:
        return <Editor html={this.state.html} dispatch={this.dispatch} />;
      case Editors.Jodit:
        return <Jodit html={this.state.html} dispatch={this.dispatch} />
      case Editors.TimyMce:
        return <TinyMce html={this.state.html} dispatch={this.dispatch} />
      case Editors.Wysiwyg:
        return <Wysiwyg html={this.state.html} dispatch={this.dispatch} />
      default:
        return '';
    }
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.editorType} onChange={(ev) => this.setState({ editorType: ev.target.value })}>
          <option value={Editors.Jodit}>{'Jodit'}</option>
          <option value={Editors.TimyMce}>{'TinyMce'}</option>
          <option value={Editors.CkEditor}>{'CkEditor'}</option>
          <option value={Editors.Wysiwyg}>{'Wysiwyg'}</option>
        </select>
        {this.switchEditors((this.state.editorType || '1') as Editors)}
      </div>
    )
  }
}
