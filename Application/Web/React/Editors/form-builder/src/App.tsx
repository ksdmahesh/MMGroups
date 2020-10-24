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
import { writeStream, readStream, getDefaultPath } from './server/service-call';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';

//#region 

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

enum Editors {
  Jodit = '1',
  TimyMce = '2',
  CkEditor = '3',
  Wysiwyg = '4'
}

type BaseType = {
  editorType: Editors,
  html: string | ArrayBuffer | null | undefined,
  path: string
};

type AppState = BaseType & {
  redo: BaseType[],
  undo: BaseType[],
  open: boolean,
  message: string,
  severity: string
};

const customStyle: {
  btn: React.CSSProperties,
  gridItem: React.CSSProperties,
  grid: React.CSSProperties,
  inputFile: React.CSSProperties
} = {
  btn: {

  },
  gridItem: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  grid: {
    padding: '8px'
  },
  inputFile: {
    display: 'none'
  }
};

let defaultPath = '';

export const activeData = {
  html: ''
}

//#endregion

export default class App extends React.Component<any, AppState> {

  //#region 

  state = {
    editorType: Editors.Jodit,
    html: '',
    path: '',
    open: false,
    message: '',
    severity: 'success',
    redo: [],
    undo: []
  }

  componentDidMount() {
    getDefaultPath().then(resp => {
      if (resp.error || resp.data?.error) {
        this.setState({
          severity: 'error',
          message: resp.data?.error || JSON.stringify(resp.error || '{}'),
          open: true
        });
      } else if (resp.data) {
        defaultPath = resp.data;
      }
    });
    window.addEventListener("beforeunload", this.afterSetState);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.afterSetState);
  }

  dispatch = (html: string) => {
    this.setUndo({
      html,
      path: this.state.path,
      editorType: this.state.editorType
    });
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

  setData = (resp: {
    data?: any;
    error?: string | object | undefined;
    headers?: object | undefined;
    msg: string;
  }) => {
    if (resp.error || resp.data?.error) {
      this.setState({
        severity: 'error',
        message: resp.data?.error || JSON.stringify(resp.error || '{}'),
        open: true
      }, this.afterSetState);
    } else if (resp.data) {
      this.setUndo({
        html: resp.data || '',
        path: this.state.path,
        editorType: this.state.editorType
      }, {
        severity: 'success',
        message: resp.msg,
        open: true
      });
    }
  }

  writeStream = () => {
    writeStream({ path: this.state.path, data: this.state.html }).then(resp => {
      this.setData({ ...resp, msg: 'Saved successfully' });
    });
  }

  readStream = () => {
    readStream({ path: this.state.path }).then(resp => {
      this.setData({ ...resp, msg: 'Read successfully' });
    });
  }

  undoRedo = (isUndo: boolean) => {
    const undo: BaseType[] = this.state.undo;
    const redo: BaseType[] = this.state.redo;
    let popObject: BaseType | undefined = undefined;

    if (isUndo) {
      if (undo.length) {
        popObject = undo.pop();
        if (popObject) {
          redo.push(popObject);
          const currentObject: BaseType = undo[undo.length - 1] || {
            editorType: Editors.Jodit,
            html: '',
            path: ''
          };
          this.setState({ ...this.state, redo, undo, ...currentObject }, this.afterSetState);
        }
      }
    } else {
      if (redo.length) {
        popObject = redo.pop();
        if (popObject) {
          undo.push(popObject);
          this.setState({ ...this.state, undo, redo, ...popObject }, this.afterSetState);
        }
      }
    }
  }

  setUndo = (baseType: BaseType, other?: any) => {
    const undo: BaseType[] = this.state.undo;
    undo.push({
      editorType: baseType.editorType,
      html: baseType.html,
      path: baseType.path
    });
    this.setState({ ...this.state, undo, redo: [], ...baseType, ...other }, this.afterSetState);
  }

  readAllText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    const reader = new FileReader();
    reader.onload = (ev) => this.readText(ev, file);

    if (file) {
      reader.readAsText(file);
    }
  }

  readText = (event: ProgressEvent<FileReader>, file?: File) => {
    const result = event.target?.result;
    this.setUndo({
      html: result || '',
      path: `${defaultPath}${file?.name || ''}`,
      editorType: this.state.editorType
    });
  }

  setEditorsChange = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>, child: React.ReactNode) => {
    this.setUndo({
      html: this.state.html,
      path: this.state.path,
      editorType: (event.target.value || Editors.Jodit) as Editors
    });
  }

  handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  }

  afterSetState = () => {
    localStorage.setItem('formdata', JSON.stringify({
      ...this.state,
      severity: 'success',
      message: '',
      open: false,
      html: activeData.html || this.state.html
    }));
  }

  getLocalStorage = () => {
    const currentStorage = JSON.parse(localStorage.getItem('formdata') || '{}');
    this.setState({ ...currentStorage });
  }

  //#endregion

  render() {
    return (
      <div className="App">
        <Grid container style={customStyle.grid}>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="editorsList-label">{'Editor'}</InputLabel>
              <Select
                fullWidth
                labelId="editorsList-label"
                id="editorsList-select"
                value={this.state.editorType}
                onChange={this.setEditorsChange}
              >
                <MenuItem value={Editors.Jodit}>{'Jodit'}</MenuItem>
                <MenuItem value={Editors.TimyMce}>{'TinyMce'}</MenuItem>
                <MenuItem value={Editors.CkEditor}>{'CkEditor'}</MenuItem>
                <MenuItem value={Editors.Wysiwyg}>{'Wysiwyg'}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField disabled id="file-path" label="File Path" fullWidth value={this.state.path} />
          </Grid>
          <Grid item xs={12} md={6} style={customStyle.gridItem}>
            <input
              onChange={(ev) => this.readAllText(ev)}
              accept="html/*"
              id="contained-button-file"
              multiple
              type="file"
              style={customStyle.inputFile}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span" style={customStyle.btn}>
                {'Open/Create'}
              </Button>
            </label>
            <IconButton disabled={this.state.undo.length === 0} onClick={() => this.undoRedo(true)} color="primary" aria-label="undo" component="span" style={customStyle.btn}>
              <UndoIcon />
            </IconButton>
            <IconButton disabled={this.state.redo.length === 0} onClick={() => this.undoRedo(false)} color="primary" aria-label="redo" component="span" style={customStyle.btn}>
              <RedoIcon />
            </IconButton>
            <Button variant="contained" onClick={this.writeStream} color="primary" aria-label="save" component="span" style={customStyle.btn}>
              {'Save'}
            </Button>
            <Button variant="contained" onClick={this.readStream} color="primary" aria-label="read" component="span" style={customStyle.btn}>
              {'Read again'}
            </Button>
            <Button variant="contained" onClick={this.getLocalStorage} color="primary" aria-label="save" component="span" style={customStyle.btn}>
              {'Load from local storage'}
            </Button>
          </Grid>
        </Grid>
        {this.switchEditors((this.state.editorType || '1') as Editors)}
        <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
          <Alert severity={this.state.severity as Color} onClose={this.handleClose}>{this.state.message}</Alert>
        </Snackbar>
      </div>
    )
  }
}
