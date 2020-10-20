import React from 'react';
import './assets/css/App.css';
import Editor from './editors/ckeditor';
import Jodit from './editors/jodit';
import TinyMce from './editors/tinymce';
import Wysiwyg from './editors/wysiwyg';

enum Editors {
  CkEditor = '1',
  Jodit = '2',
  TimyMce = '3',
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
        return 'ok';
    }
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.editorType} onChange={(ev) => this.setState({ editorType: ev.target.value })}>
          <option value={'1'}>{'CkEditor'}</option>
          <option value={'2'}>{'Jodit'}</option>
          <option value={'3'}>{'TinyMce'}</option>
          <option value={'4'}>{'Wysiwyg'}</option>
        </select>
        {this.switchEditors((this.state.editorType || '1') as Editors)}
      </div>
    )
  }
}
