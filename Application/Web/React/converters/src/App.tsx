import React from 'react';
import './App.css';
// import { CsstoJs } from './convert/CsstoJs';
import { JsonFlatten } from './convert/JsonFlatten';
import { getDefaultPath, readStream, writeStream } from './server/service-call';

class App extends React.Component {

  state = {
    value: '',
    result: '',
    path: '',
    done: false,
    error: ''
  }

  componentDidMount() {
    this.init();
  }

  init = async () => {
    const getPath = await getDefaultPath();
    if (getPath.data) {
      this.setState({
        path: getPath.data
      }, async () => {
        const readJson = await readStream({ path: `${this.state.path}read\\sampleJson.json` });
        if (readJson.data) {
          const writeJson = await writeStream({ path: `${this.state.path}write\\outJson.ts`, data: JsonFlatten(readJson.data) });
          if (writeJson.data?.error) {
            this.setState({ error: writeJson.data?.error });
          } else if (writeJson.data) {
            this.setState({ done: true });
          }
        }
      })
    }
  }

  render() {
    return (
      <>
        {this.state.done ? 'Done' : this.state.error}
      </>
      // <table>
      //   <tbody>
      //     <tr>
      //       <td>
      //         <textarea
      //           value={this.state.value}
      //           onChange={ev => { this.setState({ value: ev.target.value }); }}
      //           onBlur={ev => { this.setState({ result: CsstoJs(ev.target.value) }); }}
      //         ></textarea>
      //       </td>
      //       <td>
      //         <textarea
      //           value={this.state.result}
      //           readOnly
      //         ></textarea>
      //       </td>
      //     </tr>
      //   </tbody>
      // </table>
    );
  }
}

export default App;
