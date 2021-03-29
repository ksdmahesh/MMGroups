import React from 'react';
import './App.css';
import { CsstoJs } from './convert/CsstoJs';
import { Complex, TwoEquation } from './convert/Math';
// import { JsonFlatten, JsonDeflatten } from './convert/JsonFlatten';
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
    console.log(TwoEquation(new Complex(1, 2), new Complex(3, 4), new Complex(5, 6), new Complex(7, 8), new Complex(9, 10), new Complex(11, 12)))
    // this.init();
  }

  init = async () => {
    const getPath = await getDefaultPath();
    if (getPath.data) {
      this.setState({
        path: getPath.data
      }, async () => {
        const readJson = await readStream({ path: `${this.state.path}read\\sampleCss.css` });
        if (readJson.data) {
          const writeJson = await writeStream({
            path: `${this.state.path}write\\outCss.ts`, data: CsstoJs(readJson.data, {
              caseType: 'camel',
              // useMaterialThemeStructure: false
            })
          });
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
