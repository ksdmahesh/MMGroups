import React from 'react';
import './App.css';
import { CsstoJs } from './convert/CsstoJs';
import Maths, { Angle, Area, Base, Complex, Energy, Length, Matrix, Mode, Powers, Pressure, Temperature, Time, Velocity, Volume, Weight } from './convert/Math';
import { JsonFlatten, JsonDeflatten } from './convert/JsonFlatten';
import { JsontoXml, XmltoJson } from './convert/JsontoXml';
import { JsontoCsv, CsvtoJson } from './convert/JsontoCsv';
import { getDefaultPath, readStream, writeStream } from './server/service-call';
import { Panchangam } from './convert/panchangam';

class App extends React.Component {

  state = {
    value: '',
    result: '',
    path: '',
    done: false,
    error: ''
  }

  checkMath = () => {

    //#region Common

    // 1+i2
    console.log(new Complex(1, 2).toString());
    // 1-i2
    console.log(new Complex(1, -2).toString());
    // 3+i6
    console.log(new Complex(1, 2).add(new Complex(2, 4)));
    // 1-i
    console.log(new Complex(1, 4).subtract(new Complex(0, 5)));
    // -6+i8
    console.log(new Complex(1, 2).multiply(new Complex(2, 4)));
    // 0.8-i0.2
    console.log(new Complex(1, 4).divide(new Complex(0, 5)));
    // 0.1-i0.2
    console.log(Maths.Inverse(new Complex(1, 4)));
    // 0.8-i0.2
    console.log(Maths.GetConstantValue('Speed of light c'));

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
    console.log(Maths.Log(new Complex(2, 4), new Complex(Math.E, 0)));
    // -4.82980938326939-i5.59205609364098
    console.log(Maths.Exponential(new Complex(2, 4)));
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

    // 114.59155902616465+i229.183118052329
    console.log(Maths.DegToRad(new Complex(2, 4)));
    // 0.03490658503988659+i0.06981317007977
    console.log(Maths.RadToDeg(new Complex(2, 4)));
    // 1.800000000000002+i3.600000000000004
    console.log(Maths.DegToGrad(new Complex(2, 4)));
    // 2.2222222222222197+i4.44444444444443
    console.log(Maths.GradToDeg(new Complex(2, 4)));
    // 0.03333333333333333
    console.log(Maths.MinuteToDeg(2));
    // 120
    console.log(Maths.DegToMinute(2));
    // 0.0005555555555555556
    console.log(Maths.SecondsToDeg(2));
    // 7200
    console.log(Maths.DegToSeconds(2));

    //#endregion

    //#region Algebra

    // 1(1/2)
    console.log(Maths.MixVsFraction(3, 2));
    // true
    console.log(Maths.Prime(3));
    // 60
    console.log(Maths.Angle(3));
    // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    console.log(Maths.ListOfPrime(100));
    // 3.605551275463989
    console.log(Maths.Abs(new Complex(3, 2)));
    // 4+i3
    console.log(Maths.Ceil(new Complex(3.4, 2.3)));
    // 3+i2
    console.log(Maths.Floor(new Complex(3.3, 2.5)));
    // 4+i2
    console.log(Maths.Round(new Complex(3.6, 2.4)));
    // 1
    console.log(Maths.Modulus(3, 2));
    // [1, 2, 6, 12, 60, 60, 420, 840, 2520, 2520, 27720, 27720, 360360, 360360, 360360, 720720, 12252240, 12252240, 232792560, 232792560, 232792560, 232792560, 5354228880, 5354228880, 26771144400]
    console.log(Maths.ListOfLcm(25));
    // 60
    console.log(Maths.Lcm([1, 2, 3, 4, 5]));
    // 5
    console.log(Maths.Hcf([125, 25, 5]));

    // 25
    console.log(Maths.APSum(1, 2, 10));
    // 5
    console.log(Maths.APDiff(1, 2, 10));
    // 15
    console.log(Maths.GPSum(1, 2, 10));
    // -5
    console.log(Maths.GPDiff(1, 2, 10));
    // 1.7873015873015872
    console.log(Maths.HPSum(1, 2, 10));
    // 0.8349206349206351
    console.log(Maths.HPDiff(1, 2, 10));

    //#endregion

    //#region Logical

    // 1
    console.log(Maths.And(1, 1));
    // 0
    console.log(Maths.Or(0, 0));
    // 1
    console.log(Maths.Xor(1, 0));
    // 0
    console.log(Maths.Not(1));

    //#endregion

    //#region Calculas

    // 6
    console.log(Maths.Permutation(3, 2));
    // 3
    console.log(Maths.Combination(3, 2));
    // 120
    console.log(Maths.Factorial(5));

    //#endregion

    //#region Convertions

    // 01010
    console.log(Maths.DecimalToBinary(10));
    // 12
    console.log(Maths.DecimalToOctal(10));
    // A
    console.log(Maths.DecimalToHexa(10));
    // 10
    console.log(Maths.BinaryToDecimal(1010));
    // 8
    console.log(Maths.OctalToDecimal(12));
    // 10
    console.log(Maths.HexaToDecimal('A'));

    // 8.48528137423857+i8.48528137423857
    console.log(Maths.PolarToRectangular(12, 45, Mode.Degree));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.RectangularToPolar(2, 4, Mode.Radians));

    // 4.47213595499958∠1.10714871779409
    console.log(Maths.AngleToAngle(Angle.Degree, Angle.Radian, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.AreaToArea(Area.Acres, Area.Hectares, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.BaseToBase(Base.Decimal, Base.Binary, '45'));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.EnergyToEnergy(Energy.Calorie, Energy.Joule, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.LengthToLength(Length.Angstorm, Length.Meter, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.PowerToPower(Powers.Horsepower, Powers.Kilowatt, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.PressureToPressure(Pressure.Atmosphere, Pressure.Pascal, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.TemperatureToTemperature(Temperature.DegreeCelsius, Temperature.DegreeFahrenheit, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.TimeToTime(Time.Day, Time.Minute, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.VelocityToVelocity(Velocity.FeetPerSecond, Velocity.Knots, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.VolumeToVolume(Volume.CubicCentimeter, Volume.CubicMeter, 45));
    // 4.47213595499958∠1.10714871779409
    console.log(Maths.WeightToWeight(Weight.Carat, Weight.Gram, 45));

    //#endregion

    //#region Matrix

    // [[3, 5], [7, 9]]
    console.log(Maths.Add(new Matrix([[1, 2], [3, 4]]), new Matrix([[2, 3], [4, 5]])));
    // [[-1, -1], [-1, -1]]
    console.log(Maths.Subtract(new Matrix([[1, 2], [3, 4]]), new Matrix([[2, 3], [4, 5]])));
    // [[10, 13], [22, 29]]
    console.log(Maths.Multiply(new Matrix([[1, 2], [3, 4]]), new Matrix([[2, 3], [4, 5]])));
    // [[1.5, -0.5], [0.5, 0.5]]
    console.log(Maths.Divide(new Matrix([[1, 2], [3, 4]]), new Matrix([[2, 3], [4, 5]])));
    // [[-2, 1], [1.5, -0.5]]
    console.log(Maths.Inverse(new Matrix([[1, 2], [3, 4]])));
    // [[2, 4], [6, 8]]
    console.log(Maths.MatrixMultiplyWithNumber(new Matrix([[1, 2], [3, 4]]), 2));
    // -2
    console.log(Maths.Determinent(new Matrix([[1, 2], [3, 4]])));
    // [[4, -3], [-2, 1]]
    console.log(Maths.Adjugate(new Matrix([[1, 2], [3, 4]])));
    // [[1, 3], [2, 4]]
    console.log(Maths.Transpose(new Matrix([[1, 2], [3, 4]])));
    // [[4]]
    console.log(Maths.Cofactor(new Matrix([[1, 2], [3, 4]]), 0));
    // [[1, 2], [3, 4]]
    console.log(Maths.Conjugate(new Matrix([[1, 2], [3, 4]])));
    // [[1-i2, 3-i4], [1, -i4]]
    console.log(Maths.Conjugate(new Matrix([[new Complex(1, 2), new Complex(3, 4)], [new Complex(1, 0), new Complex(0, 4)]])));

    //#endregion

    //#region Statistics

    // 4.667
    console.log(Maths.Mean([1, 2, 3, 3, 9, 10]));
    // 12.222
    console.log(Maths.Variance([1, 2, 3, 3, 9, 10]));
    // 3.496
    console.log(Maths.StandardDeviation(Maths.Variance([1, 2, 3, 3, 9, 10])));
    // 34
    console.log(Maths.MeanSquare([1, 2, 3, 3, 9, 10]));
    // 204
    console.log(Maths.SquareSum([1, 2, 3, 3, 9, 10]));
    // 28
    console.log(Maths.Sum([1, 2, 3, 3, 9, 10]));

    // 4.667
    console.log(Maths.Mean([new Complex(1, 0), new Complex(2, 0), new Complex(3, 0), new Complex(3, 0), new Complex(9, 0), new Complex(10, 0)]));
    // 12.222
    console.log(Maths.Variance([new Complex(1, 0), new Complex(2, 0), new Complex(3, 0), new Complex(3, 0), new Complex(9, 0), new Complex(10, 0)]));
    // 3.496
    console.log(Maths.StandardDeviation(Maths.Variance([new Complex(1, 0), new Complex(2, 0), new Complex(3, 0), new Complex(3, 0), new Complex(9, 0), new Complex(10, 0)])));
    // 34
    console.log(Maths.MeanSquare([new Complex(1, 0), new Complex(2, 0), new Complex(3, 0), new Complex(3, 0), new Complex(9, 0), new Complex(10, 0)]));
    // 204
    console.log(Maths.SquareSum([new Complex(1, 0), new Complex(2, 0), new Complex(3, 0), new Complex(3, 0), new Complex(9, 0), new Complex(10, 0)]));
    // 28
    console.log(Maths.Sum([new Complex(1, 0), new Complex(2, 0), new Complex(3, 0), new Complex(3, 0), new Complex(9, 0), new Complex(10, 0)]));

    //#endregion

  }

  checkPanchanga = () => {

    const panchanga = new Panchangam(13.628756, 79.419182);
    //#region Common

    // 0.8-i0.2
    // console.log(panchanga.getKaala(Date.now() / 1000), new Date(panchanga.getKaala(Date.now() / 1000) * 1000));

    console.log(panchanga.getTithi(16, 4, 2021));
    console.log(panchanga.getTithi(17, 4, 2021));
    console.log(panchanga.getTithi(18, 4, 2021));
    console.log(panchanga.getTithi(19, 4, 2021));
    console.log(panchanga.getTithi(20, 4, 2021));

    // console.log(panchanga.julianDate(10, 5, 2021));
    
    // console.log(panchanga.julianDay(10, 5, 2021));

    // console.log(panchanga.getYoga());

    //#endregion

  }

  convertors = {
    CsstoJs: {
      fnName: CsstoJs,
      read: 'read\\sampleCss.css',
      write: 'write\\outCss.ts',
      includeDefault: true,
      options: {
        caseType: 'camel',
        // useMaterialThemeStructure: false
      }
    },
    JsonFlatten: {
      fnName: JsonFlatten,
      read: 'read\\sampleJson.json',
      write: 'write\\outJson.ts',
      includeDefault: true
    },
    JsonDeflatten: {
      fnName: JsonDeflatten,
      read: 'write\\outJson.ts',
      write: 'write\\outJsonDeflat.ts',
      includeDefault: true
    },
    Math: {
      fnName: this.checkMath
    },
    Panchanga: {
      fnName: this.checkPanchanga
    },
    XmltoJson: {
      fnName: XmltoJson,
      read: 'read\\sampleXml.xml',
      write: 'write\\outXmlJson.ts',
      includeDefault: true
    },
    JsontoXml: {
      fnName: JsontoXml,
      read: 'write\\outXmlJson.ts',
      write: 'write\\outJsonXml.xml',
      includeDefault: false
    },
    CsvtoJson: {
      fnName: CsvtoJson,
      read: 'read\\sampleCsv.csv',
      write: 'write\\outCsvJson.ts',
      options: {
        containsHeaders: false,
        rowSplitter: ['\r', '\n', '\r\n'],
        columnSplitter: [','],
        considerEverythingAsColumns: false
      },
      includeDefault: true
    },
    JsontoCsv: {
      fnName: JsontoCsv,
      read: 'write\\outCsvJson.ts',
      write: 'write\\outJsonCsv.csv',
      includeDefault: false
    }
  }

  componentDidMount() {
    this.init(this.convertors.Panchanga);
  }

  init = async (activeConvertor: { fnName: Function, read?: string, write?: string, options?: object, includeDefault?: boolean }) => {
    if (activeConvertor.read) {
      const getPath = await getDefaultPath();
      if (getPath.data) {
        this.setState({
          path: getPath.data
        }, async () => {
          const readJson = await readStream({ path: `${this.state.path}${activeConvertor.read}` });
          if (readJson.data) {
            const writeJson = await writeStream({
              path: `${this.state.path}${activeConvertor.write}`, data: activeConvertor.fnName({ data: readJson.data, convertionProps: activeConvertor.options, includeDefault: activeConvertor.includeDefault })
            });
            if (writeJson.data?.error) {
              this.setState({ error: writeJson.data?.error });
            } else if (writeJson.data) {
              this.setState({ done: true });
            }
          }
        })
      }
    } else {
      activeConvertor.fnName();
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
