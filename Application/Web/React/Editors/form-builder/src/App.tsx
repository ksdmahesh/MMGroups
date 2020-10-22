import React from 'react';
import './assets/css/App.css';
import Editor from './editors/ckeditor';
import Jodit from './editors/jodit';
import TinyMce from './editors/tinymce';
import Wysiwyg from './editors/wysiwyg';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, TextField, Button, IconButton } from '@material-ui/core';
import { writeStream, readStream } from './server/service-call';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';

enum Editors {
  Jodit = '1',
  TimyMce = '2',
  CkEditor = '3',
  Wysiwyg = '4'
}

const defaultPath = 'C:\\Users\\ksdma\\Desktop\\';

export default class App extends React.Component<any, any> {

  state = {
    editorType: '1',
    html: '',
    path: ''
  }

  dispatch = (html: string) => {
    this.setState({ html });
  }

  switchEditors = (editors: Editors) => {
    try {
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
    } catch (er) {
      alert(`error at: ${er}`);
      return '';
    }
  }

  writeStream = () => {
    writeStream({ path: this.state.path, data: this.state.html }).then(resp => {
      debugger;
      this.readStream();
    });
  }

  readStream = () => {
    readStream({ path: '' }).then(resp => {
      debugger;
      this.setState({ html: resp.data || '' });
    });
  }

  undoRedo = (undo: boolean) => {

  }

  readAllText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    const reader = new FileReader();
    let read: string | ArrayBuffer | null = null;
    reader.onload = (ev) => this.readText(ev, file);

    if (file) {
      reader.readAsText(file);
    }
  }

  readText = (event: ProgressEvent<FileReader>, file?: File) => {
    const result = event.target?.result;
    this.setState({ html: result || '', path: `${defaultPath}${file?.name}` });
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="editorsList-label">{'Editor'}</InputLabel>
              <Select
                fullWidth
                labelId="editorsList-label"
                id="editorsList-select"
                value={this.state.editorType}
                onChange={(ev) => this.setState({ editorType: ev.target.value })}
              >
                <MenuItem value={Editors.Jodit}>{'Jodit'}</MenuItem>
                <MenuItem value={Editors.TimyMce}>{'TinyMce'}</MenuItem>
                <MenuItem value={Editors.CkEditor}>{'CkEditor'}</MenuItem>
                <MenuItem value={Editors.Wysiwyg}>{'Wysiwyg'}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField disabled id="file-path" label="File Path" fullWidth value={this.state.path} />
          </Grid>
          <Grid item xs={1}>
            <input
              onChange={(ev) => this.readAllText(ev)}
              accept="html/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: 'none' }}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" style={{ marginTop: '12px' }} color="primary" component="span">
                {'Open/Create'}
              </Button>
            </label>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'right' }}>
            <IconButton onClick={() => this.undoRedo(true)} style={{ marginTop: '12px', marginRight: '12px' }} color="primary" aria-label="undo" component="span">
              <UndoIcon />
            </IconButton>
            <IconButton onClick={() => this.undoRedo(false)} style={{ marginTop: '12px', marginRight: '12px' }} color="primary" aria-label="redo" component="span">
              <RedoIcon />
            </IconButton>
            <Button variant="contained" style={{ marginTop: '12px', marginRight: '12px' }} color="primary" component="span" onClick={this.writeStream}>
              {'Save'}
            </Button>
          </Grid>
        </Grid>
        {this.switchEditors((this.state.editorType || '1') as Editors)}
      </div>
    )
  }
}
