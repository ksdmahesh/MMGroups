import React from 'react';
import './App.css';
import { CsstoJs } from './convert/CsstoJs';
import Maths, { Complex, Mode } from './convert/Math';
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
    this.checkMath();
  }

  checkMath = () => {
    //#region normal

    // 3+i6
    console.log(new Complex(1, 2).add(new Complex(2, 4)));
    // 1-i
    console.log(new Complex(1, 4).subtract(new Complex(0, 5)));
    // -6+i8
    console.log(new Complex(1, 2).multiply(new Complex(2, 4)));
    // 0.8-i0.2
    console.log(new Complex(1, 4).divide(new Complex(0, 5)));

    //#endregion

    //#region Equations

    // 4, 1
    console.log(Maths.TwoEquation(new Complex(1, 0), new Complex(1, 0), new Complex(5, 0), new Complex(1, 0), new Complex(-1, 0), new Complex(3, 0)));
    // 2, -1, 1
    console.log(Maths.Threeequation([new Complex(1, 0), new Complex(-2, 0), new Complex(3, 0), new Complex(7, 0)], [new Complex(2, 0), new Complex(1, 0), new Complex(1, 0), new Complex(4, 0)], [new Complex(-3, 0), new Complex(2, 0), new Complex(-2, 0), new Complex(-10, 0)]));

    //#endregion

    //#region Log

    // 0.0393715559769615-i0.0448190190487528
    console.log(Maths.Power(new Complex(1, 2), new Complex(2, 4)));
    // 1.497866136777+i1.10714871779409
    console.log(Maths.Log(new Complex(2, 4), Math.E));
    // -4.82980938326939-i5.59205609364098
    console.log(Maths.Exp(new Complex(2, 4)));
    // -97.7096228673234+i21.279793211529
    console.log(Maths.InverseLog(new Complex(2, 4)));

    //#endregion

    //#region Trigonometry

    // 0.034984579207998+i0.0698273312036254
    console.log(Maths.Sin(new Complex(2, 4), Mode.Degree));
    // 24.8313058489464-i11.3566127112182
    console.log(Maths.Sin(new Complex(2, 4), Mode.Radians));
    // 0.0314727818319772+i0.0628421788050667
    console.log(Maths.Sin(new Complex(2, 4), Mode.Gradient));
    // 1.00182727119645-i0.00243842413718573
    console.log(Maths.Cos(new Complex(2, 4), Mode.Degree));
    // -11.3642347064011-i24.8146514856342
    console.log(Maths.Cos(new Complex(2, 4), Mode.Radians));
    // 1.00148015639408-i0.00197489502987187
    console.log(Maths.Cos(new Complex(2, 4), Mode.Gradient));
    // 0.0347509155216735+i0.0697845533704915
    console.log(Maths.Tan(new Complex(2, 4), Mode.Degree));
    // -0.000507980623470052+i1.00043851320205
    console.log(Maths.Tan(new Complex(2, 4), Mode.Radians));
    // 0.0313024041919879+i0.0628110276233732
    console.log(Maths.Tan(new Complex(2, 4), Mode.Gradient));

    // 0.0348286262853213+i0.0697989761336092
    console.log(Maths.Sinh(new Complex(2, 4), Mode.Degree));
    // -2.370674169352-i2.84723908684883
    console.log(Maths.Sinh(new Complex(2, 4), Mode.Radians));
    // 0.0313590921511637+i0.0628215079572784
    console.log(Maths.Sinh(new Complex(2, 4), Mode.Gradient));
    // 0.998171862746946+i0.00243545480050446
    console.log(Maths.Cosh(new Complex(2, 4), Mode.Degree));
    // -2.45913521391738-i2.74481700679215
    console.log(Maths.Cosh(new Complex(2, 4), Mode.Radians));
    // 0.998519275386201+i0.001972946848067
    console.log(Maths.Cosh(new Complex(2, 4), Mode.Gradient));
    // 0.03506282117081+i0.069841261629655
    console.log(Maths.Tanh(new Complex(2, 4), Mode.Degree));
    // 1.00468231219024+i0.0364233692474037
    console.log(Maths.Tanh(new Complex(2, 4), Mode.Radians));
    // 0.0315297834597668+i0.0628523684193353
    console.log(Maths.Tanh(new Complex(2, 4), Mode.Gradient));

    // 26.0048474776034+i125.968955451167
    console.log(Maths.ASin(new Complex(2, 4), Mode.Degree));
    // 0.453870209963121+i2.19857302792093
    console.log(Maths.ASin(new Complex(2, 4), Mode.Radians));
    // 28.8942749751148+i139.965506056853
    console.log(Maths.ASin(new Complex(2, 4), Mode.Gradient));
    // 63.9951525223966-i125.968955451168
    console.log(Maths.ACos(new Complex(2, 4), Mode.Degree));
    // 1.11692611683177-i2.19857302792094
    console.log(Maths.ACos(new Complex(2, 4), Mode.Radians));
    // 71.105725024885-i139.965506056853
    console.log(Maths.ACos(new Complex(2, 4), Mode.Gradient));
    // 84.055670980186+i11.492766645722
    console.log(Maths.ATan(new Complex(2, 4), Mode.Degree));
    // 1.4670482135773+i0.200586618131234
    console.log(Maths.ATan(new Complex(2, 4), Mode.Radians));
    // 93.3951899779844+i12.7697407174689
    console.log(Maths.ATan(new Complex(2, 4), Mode.Gradient));

    // 125.110217116309+i62.8489752049206
    console.log(Maths.ASinh(new Complex(2, 4), Mode.Degree));
    // 2.18358521656456+i1.09692154883014
    console.log(Maths.ASinh(new Complex(2, 4), Mode.Radians));
    // 139.011352351455+i69.8321946721339
    console.log(Maths.ASinh(new Complex(2, 4), Mode.Gradient));
    // 125.968955451168+i63.9951525223966
    console.log(Maths.ACosh(new Complex(2, 4), Mode.Degree));
    // 2.19857302792094+i1.11692611683177
    console.log(Maths.ACosh(new Complex(2, 4), Mode.Radians));
    // 139.965506056853+i71.105725024885
    console.log(Maths.ACosh(new Complex(2, 4), Mode.Gradient));
    // 5.52420811676798+i78.5831729110412
    console.log(Maths.ATanh(new Complex(2, 4), Mode.Degree));
    // 0.0964156202029965+i1.37153510396169
    console.log(Maths.ATanh(new Complex(2, 4), Mode.Radians));
    // 6.13800901863108+i87.3146365678235
    console.log(Maths.ATanh(new Complex(2, 4), Mode.Gradient));

    //#endregion

    //#region Degree

    //#endregion

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
