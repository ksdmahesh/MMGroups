import React from 'react';
import './App.css';
import { CsstoJs } from './convert/CsstoJs';
import Maths, { Complex } from './convert/Math';
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
    // 4, 1
    console.log(Maths.TwoEquation(new Complex(1, 0), new Complex(1, 0), new Complex(5, 0), new Complex(1, 0), new Complex(-1, 0), new Complex(3, 0)));
    // 2, -1, 1
    console.log(Maths.Threeequation([new Complex(1, 0), new Complex(-2, 0), new Complex(3, 0), new Complex(7, 0)], [new Complex(2, 0), new Complex(1, 0), new Complex(1, 0), new Complex(4, 0)], [new Complex(-3, 0), new Complex(2, 0), new Complex(-2, 0), new Complex(-10, 0)]));
    // 0.0393715559769615-i0.0448190190487528
    console.log(Maths.Power(new Complex(1, 2), new Complex(2, 4)))
    // 0.650514997831991+i0.480828578784234
    console.log(Maths.Log(new Complex(2, 4), 10))
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
