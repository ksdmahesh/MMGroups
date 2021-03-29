export class Complex {
    realNumber: number;
    imaginaryNumber: number

    static operands: any = [];
    static result: any = [];

    constructor(real: number, imaginary: number) {
        this.realNumber = real;
        this.imaginaryNumber = imaginary;
    }

    subtract = (value: Complex) => new Complex(value.realNumber - this.realNumber, value.imaginaryNumber - this.imaginaryNumber);

    add = (value: Complex) => new Complex(value.realNumber + this.realNumber, value.imaginaryNumber + this.imaginaryNumber);

    multiply = (value: Complex) => new Complex(value.realNumber * this.realNumber, value.imaginaryNumber * this.imaginaryNumber);

    divide = (value: Complex) => new Complex(value.realNumber / this.realNumber, value.imaginaryNumber / this.imaginaryNumber);

    static pow = (value: Complex, power: Complex) => new Complex(Math.exp(power.realNumber * Math.log(Math.sqrt(value.realNumber ^ 2 + value.imaginaryNumber ^ 2)) - power.imaginaryNumber * Math.atan2(value.imaginaryNumber, value.realNumber)) * Math.cos(power.imaginaryNumber * Math.log(Math.sqrt(value.realNumber ^ 2 + value.imaginaryNumber ^ 2)) + power.realNumber * Math.atan2(value.imaginaryNumber, value.realNumber)), Math.exp(power.realNumber * Math.log(Math.sqrt(value.realNumber ^ 2 + value.imaginaryNumber ^ 2)) - power.imaginaryNumber * Math.atan2(value.imaginaryNumber, value.realNumber)) * Math.sin(power.imaginaryNumber * Math.log(Math.sqrt(value.realNumber ^ 2 + value.imaginaryNumber ^ 2)) + power.realNumber * Math.atan2(value.imaginaryNumber, value.realNumber)));
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

    static Power(a: Complex, b: Complex) {
        return Complex.pow(a, b);
    }

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
