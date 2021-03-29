export enum Mode {
    Degree, Radians, Gradient
}

export class Complex {
    realNumber: number;
    imaginaryNumber: number

    static operands: any = [];
    static result: any = [];

    constructor(real: number, imaginary: number) {
        this.realNumber = real;
        this.imaginaryNumber = imaginary;
    }

    subtract = (value: Complex) => new Complex(this.realNumber - value.realNumber, this.imaginaryNumber - value.imaginaryNumber);

    add = (value: Complex) => new Complex(this.realNumber + value.realNumber, this.imaginaryNumber + value.imaginaryNumber);

    multiply = (value: Complex) => new Complex(this.realNumber * value.realNumber, this.imaginaryNumber * value.imaginaryNumber);

    divide = (value: Complex) => new Complex(this.realNumber / value.realNumber, isNaN(this.imaginaryNumber / value.imaginaryNumber) ? 0 : (this.imaginaryNumber / value.imaginaryNumber));

    static pow = (value: Complex, power: Complex) => {
        const log = Math.log(Math.sqrt(Math.pow(value.realNumber, 2) + Math.pow(value.imaginaryNumber, 2)));
        const atan2 = Math.atan2(value.imaginaryNumber, value.realNumber);

        const exp = Math.exp((power.realNumber * log) - (power.imaginaryNumber * atan2));
        const angle = (power.imaginaryNumber * log) + (power.realNumber * atan2);

        return new Complex(exp * Math.cos(angle), exp * Math.sin(angle));
    }

    static sqrt = (value: Complex, power: Complex) => {
        const log = Math.log(Math.sqrt(Math.pow(value.realNumber, 2) + Math.pow(value.imaginaryNumber, 2)));
        const atan2 = Math.atan2(value.imaginaryNumber, value.realNumber);

        const exp = Math.exp((power.realNumber * log) - (power.imaginaryNumber * atan2));
        const angle = (power.imaginaryNumber * log) + (power.realNumber * atan2);

        return new Complex(exp * Math.cos(angle), exp * Math.sin(angle));
    }

    private static logWithBase = (value: number, base: number) => (Math.log(value) / Math.log(base));

    static log = (value: Complex, base: number) => new Complex(Complex.logWithBase(Math.sqrt(Math.pow(value.realNumber, 2) + Math.pow(value.imaginaryNumber, 2)), base), Complex.logWithBase(Math.E, base) * Math.atan2(value.imaginaryNumber, value.realNumber));

    static sin = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));
    static cos = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));
    static tan = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));
    static asin = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));
    static acos = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));
    static atan = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));
    static sinh = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));
    static cosh = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));
    static tanh = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));
}

export default class Maths {

    static TwoEquation = (a1: Complex, a2: Complex, a: Complex, b1: Complex, b2: Complex, b: Complex) => [
        a.multiply(b2).subtract(b.multiply(a2)).divide(b2.multiply(a1).subtract(a2.multiply(b1))),
        a.multiply(b1).subtract(b.multiply(a1)).divide(b1.multiply(a2).subtract(a1.multiply(b2)))
    ];

    static Threeequation = (a: Complex[], b: Complex[], c: Complex[]) => {
        let ans1 = new Array<Complex>();
        let ans2 = new Array<Complex>();
        let x, y, z;
        ans1[0] = a[0].multiply(b[1]).subtract(a[1].multiply(b[0]));
        ans1[1] = a[2].multiply(b[1]).subtract(a[1].multiply(b[2]));
        ans1[2] = a[3].multiply(b[1]).subtract(a[1].multiply(b[3]));
        ans2[0] = a[0].multiply(c[1]).subtract(a[1].multiply(c[0]));
        ans2[1] = a[2].multiply(c[1]).subtract(a[1].multiply(c[2]));
        ans2[2] = a[3].multiply(c[1]).subtract(a[1].multiply(c[3]));
        x = ans1[2].multiply(ans2[1]).subtract(ans2[2].multiply(ans1[1])).divide(ans2[1].multiply(ans1[0]).subtract(ans1[1].multiply(ans2[0])));
        z = ans1[2].multiply(ans2[0]).subtract(ans2[2].multiply(ans1[0])).divide(ans2[0].multiply(ans1[1]).subtract(ans1[0].multiply(ans2[1])));
        y = a[3].subtract(a[0].multiply(x).add(a[2].multiply(z))).divide(a[1]);
        return [x, y, z];
    }

    static Power = (a: Complex, b: Complex) => Complex.pow(a, b);

    static Log = (a: Complex, b: number) => Complex.log(a, b);

    static Exp = (a: Complex) => Complex.pow(new Complex(Math.E, 0), a);

    static InverseLog = (a: Complex) => Complex.pow(new Complex(10, 0), a);

    static Sin = (a: Complex, mode: Mode) => {
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.RadToDeg(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToGrad(Maths.RadToDeg(a));
                    break;
                }
        }
        return Complex.sin(a);
    }

    static Cos = (a: Complex, mode: Mode) => {
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.RadToDeg(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToGrad(Maths.RadToDeg(a));
                    break;
                }
        }
        return Complex.cos(a);
    }

    static Tan = (a: Complex, mode: Mode) => {
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.RadToDeg(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToGrad(Maths.RadToDeg(a));
                    break;
                }
        }
        return Complex.tan(a);
    }

    static Sinh = (a: Complex, mode: Mode) => {
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.RadToDeg(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToGrad(Maths.RadToDeg(a));
                    break;
                }
        }
        return Complex.sinh(a);
    }

    static Cosh = (a: Complex, mode: Mode) => {
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.RadToDeg(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToGrad(Maths.RadToDeg(a));
                    break;
                }
        }
        return Complex.cosh(a);
    }

    static Tanh = (a: Complex, mode: Mode) => {
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.RadToDeg(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToGrad(Maths.RadToDeg(a));
                    break;
                }
        }
        return Complex.tanh(a);
    }

    static ASin = (a: Complex, mode: Mode) => {
        a = Complex.asin(a);
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.DegToRad(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToRad(Maths.GradToDeg(a));
                    break;
                }
        }
        return a;
    }

    static ACos = (a: Complex, mode: Mode) => {
        a = Complex.acos(a);
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.DegToRad(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToRad(Maths.GradToDeg(a));
                    break;
                }
        }
        return a;
    }

    static ATan = (a: Complex, mode: Mode) => {
        a = Complex.atan(a);
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.DegToRad(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToRad(Maths.GradToDeg(a));
                    break;
                }
        }
        return a;
    }

    static ASinh = (a: Complex, mode: Mode) => {
        a = Complex.log(a.add(Complex.sqrt(a.multiply(a).add(new Complex(1, 0)))), Math.E);
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.DegToRad(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToRad(Maths.GradToDeg(a));
                    break;
                }
        }
        return a;
    }

    static ACosh = (a: Complex, mode: Mode) => {
        a = Complex.log(a.add(Complex.sqrt(a.multiply(a).subtract(new Complex(1, 0)))), Math.E);
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.DegToRad(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToRad(Maths.GradToDeg(a));
                    break;
                }
        }
        return a;
    }

    static ATanh = (a: Complex, mode: Mode) => {
        a = Complex.log(Complex.sqrt(a.add(new Complex(1, 0))), Math.E).subtract(Complex.log(Complex.sqrt(new Complex(1, 0).subtract(a)), Math.E));
        switch (mode) {
            case Mode.Degree:
                {
                    a = Maths.DegToRad(a);
                    break;
                }
            case Mode.Radians:
                {
                    break;
                }
            case Mode.Gradient:
                {
                    a = Maths.DegToRad(Maths.GradToDeg(a));
                    break;
                }
        }
        return a;
    }

    static DegToRad = (a: Complex) => a.multiply(new Complex(180, 0)).divide(new Complex(Math.PI, 0));

    static RadToDeg = (a: Complex) => a.multiply(new Complex(Math.PI, 0)).divide(new Complex(180, 0));

    static DegToGrad = (a: Complex) => a.multiply(new Complex(0.900000000000001, 0));

    static GradToDeg = (a: Complex) => a.divide(new Complex(0.900000000000001, 0));

    static MinuteToDeg = (a: number) => (a / 60);

    static DegToMinute = (a: number) => (a * 60);

    static SecondsToDeg = (a: number) => (a / 3600);

    static DegToSeconds = (a: number) => (a * 3600);

}

// Complex.prototype.valueOf = function () {
//     Complex.operands.push(this);
//     return 3;
// }

// Object.defineProperty(Complex.prototype, '_', {
//     set: function (value) {
//         const ops = Complex.operands;
//         let operator: Function;
//         if (ops.length === 2 && value === 0) { // 3 - 3
//             operator = this.subtract;
//         } else if (ops.length === 2 && value === 1) { // 3 / 3
//             operator = this.divide;
//         } else if (ops.length >= 2 && (value === 3 * ops.length)) {
//             // 3 + 3 + 3 + ...
//             operator = this.add;
//         } else if (ops.length >= 2 && (value === Math.pow(3, ops.length))) {
//             // 3 * 3 * 3 * ...
//             operator = this.multiply;
//         } else {
//             throw new Error("Unsupported operation (code " + value + ")");
//         }
//         Complex.operands = []; // reset
//         Complex.result = operator.apply(this, [ops]);
//     },
//     get: function () {
//         return Complex.result;
//     },
//     enumerable: true,
//     configurable: true,
// });
