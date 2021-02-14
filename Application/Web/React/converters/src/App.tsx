import React from 'react';
import './App.css';
import { CsstoJs } from './convert/CsstoJs';

class App extends React.Component {

  state = {
    value: '',
    result: ''
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <textarea
                value={this.state.value}
                onChange={ev => { this.setState({ value: ev.target.value }); }}
                onBlur={ev => { this.setState({ result: CsstoJs(ev.target.value) }); }}
              ></textarea>
            </td>
            <td>
              <textarea
                value={this.state.result}
                readOnly
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
