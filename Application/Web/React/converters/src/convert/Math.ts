//#region enums

export enum Mode {
    Degree, Radians, Gradient
}

export enum Number {
    Binary, Decimal, Octal, HexaDecimal
}

export enum Converter {
    Angle, Area, Base, Energy, Length, Power, Pressure, Temperature, Time, Velocity, Volume, Weight
}

export enum Angle {
    Degree, Gradian, Radian
}

export enum Base {
    Binary, Decimal, HexaDecimal, Octal
}

export enum Area {
    Acres, Hectares, SquareCentimeter, SquareFeet, SquareInch, SquareKilometer, SquareMeter, SquareMile, SquareMillimeter, SquareYard
}

export enum Energy {
    BritishThermalUnit, Calorie, ElectronVolts, FootPound, Joule, KiloCalorie, KiloJoule
}

export enum Length {
    Angstorm, Centimeter, Chain, Fathom, Feet, Hand, Inch, Kilometer, Link, Meter, Microns, Mile, Millimeter, Nanometer, NauticalMile, PICA, Rods, Span, Yard
}

export enum Powers {
    BTUminute, FootPound, Horsepower, Kilowatt, Watt
}

export enum Pressure {
    Atmosphere, Bar, KiloPascal, MillimeterOfMercury, Pascal, PoundPerSquareInch
}

export enum Temperature {
    DegreeCelsius, DegreeFahrenheit, Kelvin
}

export enum Time {
    Day, Hour, MicroSecond, MilliSecond, Minute, Second, Week
}

export enum Velocity {
    CentimeterPerSecond, FeetPerSecond, KilometerPerHour, Knots, Mach, MeterPerSecond, MilesPerHour
}

export enum Volume {
    CubicCentimeter, CubicFeet, CubicInch, CubicMeter, CubicYard, FluidOunceUK, FluidounceUS, GallonUK, GallonUS, Liter, PintUK, PintUS, QuartUK, QuartUS
}

export enum Weight {
    Carat, CentiGram, DeciGram, DekaGram, Gram, HectoGram, KiloGram, LongTon, MilliGram, Ounce, Pound, ShortTon, Stone, Tonne
}

//#endregion

//#region constants

const _constants = {
    'Speed of light c': `${2.997924580 * Math.pow(10, +8)} m.s-1 or m/s`,
    'Permeability of vacuum μ0': `${12.566370614 * Math.pow(10, -7)} kg.m.s-2.A-2 or H/m or N/A2`,
    'Permittivity of vacuum ε0': `${8.854187817 * Math.pow(10, -12)} kg-1.m-3.s4.A2 or F/m`,
    'Gravitation constant G': `${6.6738480 * Math.pow(10, -11)} kg-1.m3.s-2`,
    'Planck constant h': `${6.6260695729 * Math.pow(10, -34)} kg.m2.s-1 or J.s`,
    'Angular Planck constant': `${1.05457172647 * Math.pow(10, -34)} kg.m2.s-1 or J.s`,
    'Charge/Quantum ratio': `${2.41798934853 * Math.pow(10, +14)} kg-1.m-2.s2.A or A/J`,
    'Elementary charge e': `${1.60217656535 * Math.pow(10, -19)} s.A or C`,
    'Quantum/Charge ratio': `${4.1356675210 * Math.pow(10, -15)} kg.m2.s-2.A-1 or J/A`,
    'Fine structure constant α': `${7.297352569824 * Math.pow(10, -3)} Dimensionless`,
    'Inverse of fine structure constant': `${137.03599907445} Dimensionless`,
    'Boltzmann constant k': `${1.380648813 * Math.pow(10, -23)} kg.m2.s-2.K-1 or J/K`,
    'Planck mass mp': `${2.1765113 * Math.pow(10, -8)} kg`,
    'Planck time tp': `${5.3910632 * Math.pow(10, -44)} s`,
    'Planck length lp': `${1.61619997 * Math.pow(10, -35)} m`,
    'Planck temperature': `${1.41683385 * Math.pow(10, +32)} K`,
    'Impedance of vacuum Z0': `${376.730313461} kg.m2.s-3.A-2 or Ω`,
    'Magnetic flux quantum Φ0': `${2.06783375846 * Math.pow(10, -15)} kg.m2.s-2.A-1 or Wb`,
    'Josephson constant KJ': `${4.8359787011 * Math.pow(10, 14)} kg-1.m-2.s2.A or Hz/V`,
    'von Klitzing constant RK': `${2.5812807443484 * Math.pow(10, +4)} kg.m2.s-3.A-2 or Ω`,
    'Conductance quantum G0': `${7.748091734625 * Math.pow(10, -5)} kg-1.m-2.s3.A2 or S`,
    'Inverse of conductance quantum': `${1.2906403721742 * Math.pow(10, +4)} kg.m2.s-3.A-2 or Ω`,
    'Stefan-Boltzmann const. σ': `${5.67037321 * Math.pow(10, -8)} kg.s-3.K-4 or W/m2.K4`,
    'Rydberg constant R∞': `${1.097373156853955 * Math.pow(10, +7)} m-1 or m-1 `,
    'Hartree energy EH': `${4.3597443419 * Math.pow(10, -18)} kg.m2.s-2 or J`,
    'Bohr radius': `${5.291772109217 * Math.pow(10, -11)} m or m`,
    'Bohr magneton μB': `${9.2740096820 * Math.pow(10, -24)} m2.A or J/T`,
    'Bohr magneton in Hz/T': `${1.39962455531 * Math.pow(10, +10)} kg-1.s.A or Hz/T`,
    'Quantum of circulation': `${3.636947552024 * Math.pow(10, -4)} m2.s-1 or m2/s`,
    'Richardson constant': `${1.20173 * Math.pow(10, +6)} A.m-2.K-2 `,
    'Classical electron radius re': `${2.817940326727 * Math.pow(10, -15)} m`,
    'Thomson cross section σe': `${0.665245873413 * Math.pow(10, -28)} m2`,
    'Boltzmann constant in eV/K': `${8.617332478 * Math.pow(10, -5)} kg.m2.s-3.A-1.K-1 or V/K`,
    'Avogadro\'s number NA': `${6.0221412927 * Math.pow(10, +23)} mol-1 or count/mol`,
    'Molar Planck constant': `${3.990312717628 * Math.pow(10, -10)} kg.m2.s-1.mol-1 or J.s/mol`,
    'Molar Planck constant by c': `${0.11962656577984} kg.m3.s-2.mol-1 or J.m/mol`,
    'Electron molar mass': `${5.485799094622 * Math.pow(10, -7)} kg.mol-1 or kg/mol`,
    'Electron molar charge': `${-9.6485336521 * Math.pow(10, +4)} s.A.mol-1 or C/mol`,
    'Faraday constant F': `${+9.6485336521 * Math.pow(10, +4)} s.A.mol-1 or C/mol`,
    'Molar gas constant R': `${8.314462175} kg.m2.s-2.K-1.mol-1 or J/K.mol`,
    'Molar volume of ideal gas Vm': `${22.41396820 * Math.pow(10, -3)} m3.mol-1 or m3/mol`,
    'Electron volt': `${1.60217656535 * Math.pow(10, -19)} kg.m2.s-2 or J`,
    'Electron volt to mass': `${1.78266184539 * Math.pow(10, -36)} kg`,
    'Electron volt to atomic units u': `${1.07354415024 * Math.pow(10, -9)} u`,
    'Electron volt to frequency': `${2.41798934853 * Math.pow(10, +14)} s-1 or Hz`,
    'Joul to eV': `${6.2415093414 * Math.pow(10, +18)} eV`,
    'Mass to eV': `${5.6095888512 * Math.pow(10, +35)} eV`,
    'Atomic unit u to eV': `${931.49406121 * Math.pow(10, +6)} eV`,
    'Frequency (1 Hz) to eV': `${4.13566751691 * Math.pow(10, -15)} eV`,
    'Light-year ly': `${9.4607304725808 * Math.pow(10, +15)} m or ~9.5 Pm`
};

type _constType = keyof (typeof _constants);

//#endregion

//#region classes

export class Complex {

    //#region members

    realNumber: number;
    imaginaryNumber: number

    //#endregion

    //#region static members

    static operands: any = [];
    static result: any = [];

    //#endregion

    //#region constructor

    constructor(real: number, imaginary: number) {
        this.realNumber = real;
        this.imaginaryNumber = imaginary;
    }

    //#endregion

    //#region private functions

    private static logWithBase = (value: number, base: number) => (Math.log(value) / Math.log(base));

    private static getRootAngle = (value: Complex) => new Complex(value.realNumber >= 0 ? (0.5 * Math.sqrt(2 * (Complex.abs(value) + value.realNumber))) : (Math.abs(value.imaginaryNumber) / Math.sqrt(2 * (Complex.abs(value) - value.realNumber))), (value.imaginaryNumber < 0 ? -1 : 1) * (value.imaginaryNumber <= 0 ? (0.5 * Math.sqrt(2 * (Complex.abs(value) - value.realNumber))) : (Math.abs(value.imaginaryNumber) / Math.sqrt(2 * (Complex.abs(value) + value.realNumber)))));

    private static getRootAngleLog = (value: Complex, sqrt: Complex) => new Complex(sqrt.realNumber - value.imaginaryNumber, sqrt.imaginaryNumber + value.realNumber);

    private static sumOfSquares = (value: Complex) => ((value.realNumber * value.realNumber) + (value.imaginaryNumber * value.imaginaryNumber));

    //#endregion

    //#region public functions

    subtract = (value: Complex) => new Complex(this.realNumber - value.realNumber, this.imaginaryNumber - value.imaginaryNumber);

    add = (value: Complex) => new Complex(this.realNumber + value.realNumber, this.imaginaryNumber + value.imaginaryNumber);

    multiply = (value: Complex) => new Complex((this.realNumber * value.realNumber) - (this.imaginaryNumber * value.imaginaryNumber), (this.realNumber * value.imaginaryNumber) + (this.imaginaryNumber * value.realNumber));

    divide = (value: Complex) => new Complex(((this.realNumber * value.realNumber) + (this.imaginaryNumber * value.imaginaryNumber)) / (Math.pow(value.realNumber, 2) + Math.pow(value.imaginaryNumber, 2)), ((this.imaginaryNumber * value.realNumber) - (value.imaginaryNumber * this.realNumber)) / (Math.pow(value.realNumber, 2) + Math.pow(value.imaginaryNumber, 2)));

    //#endregion

    //#region static functions

    static inverse = (value: Complex) => new Complex(1, 0).divide(value);

    static abs = (value: Complex) => Math.sqrt(Complex.sumOfSquares(value));

    static ceil = (value: Complex) => new Complex(Math.ceil(value.realNumber), Math.ceil(value.imaginaryNumber));

    static floor = (value: Complex) => new Complex(Math.floor(value.realNumber), Math.floor(value.imaginaryNumber));

    static round = (value: Complex) => new Complex(Math.round(value.realNumber), Math.round(value.imaginaryNumber));

    static arg = (value: Complex) => Math.atan2(value.imaginaryNumber, value.realNumber);

    static conjugate = (value: Complex) => new Complex(value.realNumber, -value.imaginaryNumber);

    static pow = (value: Complex, power: Complex) => {
        const log = Math.log(Math.sqrt(Math.pow(value.realNumber, 2) + Math.pow(value.imaginaryNumber, 2)));
        const atan2 = Math.atan2(value.imaginaryNumber, value.realNumber);

        const exp = Math.exp((power.realNumber * log) - (power.imaginaryNumber * atan2));
        const angle = (power.imaginaryNumber * log) + (power.realNumber * atan2);

        return new Complex(exp * Math.cos(angle), exp * Math.sin(angle));
    }

    static sqrt = (value: Complex) => Complex.pow(value, new Complex(2, 0));

    static log = (value: Complex, base: number) => new Complex(Complex.logWithBase(Math.sqrt(Math.pow(value.realNumber, 2) + Math.pow(value.imaginaryNumber, 2)), base), Complex.logWithBase(Math.E, base) * Math.atan2(value.imaginaryNumber, value.realNumber));

    static sin = (value: Complex) => new Complex(Math.sin(value.realNumber) * Math.cosh(value.imaginaryNumber), Math.cos(value.realNumber) * Math.sinh(value.imaginaryNumber));

    static cos = (value: Complex) => new Complex(Math.cos(value.realNumber) * Math.cosh(value.imaginaryNumber), -1 * Math.sin(value.realNumber) * Math.sinh(value.imaginaryNumber));

    static tan = (value: Complex) => Complex.sin(value).divide(Complex.cos(value));

    static sinh = (value: Complex) => new Complex(0, -1).multiply(Complex.sin(new Complex(0, 1).multiply(value)));

    static cosh = (value: Complex) => new Complex(1, 0).multiply(Complex.cos(new Complex(0, 1).multiply(value)));

    static tanh = (value: Complex) => new Complex(0, -1).multiply(Complex.tan(new Complex(0, 1).multiply(value)));

    static asin = (value: Complex) => {
        const { realNumber, imaginaryNumber } = Complex.log(Complex.getRootAngleLog(value, Complex.getRootAngle(new Complex(1, 0).subtract(value.multiply(value)))), Math.E);
        return new Complex(imaginaryNumber, -realNumber);
    };

    static acos = (value: Complex) => {
        const { realNumber, imaginaryNumber } = Complex.asin(value);
        return new Complex((Math.PI / 2) - realNumber, -imaginaryNumber);
    };

    static atan = (value: Complex) => new Complex(0, 1).divide(new Complex(2, 0)).multiply(Complex.log(new Complex(0, 1).add(value).divide(new Complex(0, 1).subtract(value)), Math.E));

    static asinh = (value: Complex) => {
        const { realNumber, imaginaryNumber } = Complex.asin(new Complex(value.imaginaryNumber, -value.realNumber));
        return new Complex(-imaginaryNumber, realNumber);
    };

    static acosh = (value: Complex) => {
        const { realNumber, imaginaryNumber } = Complex.acos(value);
        return (imaginaryNumber <= 0 ? new Complex(-imaginaryNumber, realNumber) : new Complex(imaginaryNumber, -realNumber));
    };

    static atanh = (value: Complex) => {
        const sumOfSquares = Complex.sumOfSquares(value);
        const base = (1 + sumOfSquares) - (2 * value.realNumber);
        const angleValue = base
            ?
            new Complex((1 - sumOfSquares) / base, (2 * value.imaginaryNumber) / base)
            :
            new Complex((value.realNumber !== -1) ? (value.realNumber / base) : 0, (value.imaginaryNumber !== 0) ? (value.imaginaryNumber / base) : 0);

        const { realNumber } = Complex.log(angleValue, Math.E);

        return new Complex(realNumber / 2, ((value.realNumber > 1 && 0 === value.imaginaryNumber) ? -1 : 1) * Math.atan2(angleValue.imaginaryNumber, angleValue.realNumber) / 2);
    };

    //#endregion

}

export default class Maths {

    //#region private functions

    private static clone = (data: any) => JSON.parse(JSON.stringify(data));

    private static validate = (input: number) => {
        if (input.toString().includes('.')) {
            if (input.toString().split('.').length > 2) {
                throw new Error("invalid input");
            }
        }
        if (input.toString().includes(',')) {
            throw new Error("invalid input");
        }
    }

    private static Acres = (b: Area, input: number) => {
        switch (b) {
            case Area.Acres:
                {
                    return input;
                }
            case Area.Hectares:
                {
                    return input * 0.40468564224;
                }
            case Area.SquareCentimeter:
                {
                    return input * 40468564.224;
                }
            case Area.SquareFeet:
                {
                    return input * 43560;
                }
            case Area.SquareInch:
                {
                    return input * 6272640;
                }
            case Area.SquareKilometer:
                {
                    return input * 0.0040468564224;
                }
            case Area.SquareMeter:
                {
                    return input * 4046.8564224;
                }
            case Area.SquareMile:
                {
                    return input * 0.0015625;
                }
            case Area.SquareMillimeter:
                {
                    return input * 4046856422.4;
                }
            case Area.SquareYard:
                {
                    return input * 4840;
                }
        }
        return 0;
    }

    private static Decimal = (b: Base, input: string) => {
        switch (b) {
            case Base.Binary:
                {
                    const reg = new RegExp("[0-9]", 'ig');
                    const count = Array.from(input.matchAll(reg));
                    if (count.length !== input.length) {
                        throw new Error("please input integer");
                    }
                    return Maths.BinaryToDecimal(parseInt(input));
                }
            case Base.Decimal:
                {
                    const reg = new RegExp("[0-9]", 'ig');
                    const count = Array.from(input.matchAll(reg));
                    if (count.length !== input.length) {
                        throw new Error("please input integer");
                    }
                    return input.toString();
                }
            case Base.HexaDecimal:
                {
                    const reg = new RegExp("[A-F0-9]", 'ig');
                    const count = Array.from(input.matchAll(reg));
                    if (count.length !== input.length) {
                        throw new Error("please input integer");
                    }
                    return Maths.HexaToDecimal(`${input}`);
                }
            case Base.Octal:
                {
                    const reg = new RegExp("[0-9]", 'ig');
                    const count = Array.from(input.matchAll(reg));
                    if (count.length !== input.length) {
                        throw new Error("please input integer");
                    }
                    return Maths.OctalToDecimal(parseInt(input));
                }
        }
        return "0";
    }

    private static BritishThermalUnit = (b: Energy, input: number) => {
        switch (b) {
            case Energy.BritishThermalUnit:
                {
                    return input;
                }
            case Energy.Calorie:
                {
                    return input * 251.9957963122194;
                }
            case Energy.ElectronVolts:
                {
                    return input * 6585142025517001000000;
                }
            case Energy.FootPound:
                {
                    return input * 778.1693709678747;
                }
            case Energy.Joule:
                {
                    return input * 1055.056;
                }
            case Energy.KiloCalorie:
                {
                    return input * 0.2519957963122194;
                }
            case Energy.KiloJoule:
                {
                    return input * 1.055056;
                }
        }
        return 0;
    }

    private static Fathom = (b: Length, input: number) => {
        switch (b) {
            case Length.Angstorm:
                {
                    return input * 18288000000;
                }
            case Length.Centimeter:
                {
                    return input * 182.88;
                }
            case Length.Chain:
                {
                    return input * 0.0909090909090909;
                }
            case Length.Fathom:
                {
                    return input;
                }
            case Length.Feet:
                {
                    return input * 6;
                }
            case Length.Hand:
                {
                    return input * 18;
                }
            case Length.Inch:
                {
                    return input * 72;
                }
            case Length.Kilometer:
                {
                    return input * 0.0018288;
                }
            case Length.Link:
                {
                    return input * 9.090909090909091;
                }
            case Length.Meter:
                {
                    return input * 1.8288;
                }
            case Length.Microns:
                {
                    return input * 1828800;
                }
            case Length.Mile:
                {
                    return input * 0.0011363636363636;
                }
            case Length.Millimeter:
                {
                    return input * 1828.8;
                }
            case Length.Nanometer:
                {
                    return input * 1828800000;
                }
            case Length.NauticalMile:
                {
                    return input * 0.0009874730021598272;
                }
            case Length.PICA:
                {
                    return input * 433.6200043362;
                }
            case Length.Rods:
                {
                    return input * 0.3636363636363636;
                }
            case Length.Span:
                {
                    return input * 8;
                }
            case Length.Yard:
                {
                    return input * 2;
                }
        }
        return 0;
    }

    private static BTUPerMinute = (b: Powers, input: number) => {
        switch (b) {
            case Powers.BTUminute:
                {
                    return input;
                }
            case Powers.FootPound:
                {
                    return input * 778.1693709678747;
                }
            case Powers.Horsepower:
                {
                    return input * 0.0235808900293295;
                }
            case Powers.Kilowatt:
                {
                    return input * 0.0175842666666667;
                }
            case Powers.Watt:
                {
                    return input * 17.58426666666667;
                }
        }
        return 0;
    }

    private static Atmosphere = (b: Pressure, input: number) => {
        switch (b) {
            case Pressure.Atmosphere:
                {
                    return input;
                }
            case Pressure.Bar:
                {
                    return input * 1.01325;
                }
            case Pressure.KiloPascal:
                {
                    return input * 101.325;
                }
            case Pressure.MillimeterOfMercury:
                {
                    return input * 760.1275318829707;
                }
            case Pressure.Pascal:
                {
                    return input * 101325;
                }
            case Pressure.PoundPerSquareInch:
                {
                    return input * 14.69594940039221;
                }
        }
        return 0;
    }

    private static Celsius = (b: Temperature, input: number) => {
        switch (b) {
            case Temperature.DegreeCelsius:
                {
                    return input;
                }
            case Temperature.DegreeFahrenheit:
                {
                    return ((input * 1.8) + 32);
                }
            case Temperature.Kelvin:
                {
                    return input + 273.15;
                }
        }
        return 0;
    }

    private static Day = (b: Time, input: number) => {
        switch (b) {
            case Time.Day:
                {
                    return input;
                }
            case Time.Hour:
                {
                    return input * 24;
                }
            case Time.MicroSecond:
                {
                    return input * 86400000000;
                }
            case Time.MilliSecond:
                {
                    return input * 86400000;
                }
            case Time.Minute:
                {
                    return input * 1440;
                }
            case Time.Second:
                {
                    return input * 86400;
                }
            case Time.Week:
                {
                    return input * 0.1428571428571429;
                }
        }
        return 0;
    }

    private static Knots = (b: Velocity, input: number) => {
        switch (b) {
            case Velocity.CentimeterPerSecond:
                {
                    return input * 51.44444444444444;
                }
            case Velocity.FeetPerSecond:
                {
                    return input * 1.687809857101196;
                }
            case Velocity.KilometerPerHour:
                {
                    return input * 1.852;
                }
            case Velocity.Knots:
                {
                    return input;
                }
            case Velocity.Mach:
                {
                    return input * 0.0015117677734015;
                }
            case Velocity.MeterPerSecond:
                {
                    return input * 0.5144444444444444;
                }
            case Velocity.MilesPerHour:
                {
                    return input * 1.150779448023543;
                }
        }
        return 0;
    }

    private static CubicFeet = (b: Volume, input: number) => {
        switch (b) {
            case Volume.CubicCentimeter:
                {
                    return input * 28316.846592;
                }
            case Volume.CubicFeet:
                {
                    return input;
                }
            case Volume.CubicInch:
                {
                    return input * 1728;
                }
            case Volume.CubicMeter:
                {
                    return input * 0.028316846592;
                }
            case Volume.CubicYard:
                {
                    return input * 0.037037037037037;
                }
            case Volume.FluidOunceUK:
                {
                    return input * 996.6136734468521;
                }
            case Volume.FluidounceUS:
                {
                    return input * 957.5064935064935;
                }
            case Volume.GallonUK:
                {
                    return input * 6.228835459042826;
                }
            case Volume.GallonUS:
                {
                    return input * 7.480519480519481;
                }
            case Volume.Liter:
                {
                    return input * 28.316846592;
                }
            case Volume.PintUK:
                {
                    return input * 49.83068367234261;
                }
            case Volume.PintUS:
                {
                    return input * 59.84415584415584;
                }
            case Volume.QuartUK:
                {
                    return input * 24.9153418361713;
                }
            case Volume.QuartUS:
                {
                    return input * 29.92207792207792;
                }
        }
        return 0;
    }

    private static KiloGram = (b: Weight, input: number) => {
        switch (b) {
            case Weight.Carat:
                {
                    return input * 5000;
                }
            case Weight.CentiGram:
                {
                    return input * 100000;
                }
            case Weight.DeciGram:
                {
                    return input * 10000;
                }
            case Weight.DekaGram:
                {
                    return input * 100;
                }
            case Weight.Gram:
                {
                    return input * 1000;
                }
            case Weight.HectoGram:
                {
                    return input * 10;
                }
            case Weight.KiloGram:
                {
                    return input;
                }
            case Weight.LongTon:
                {
                    return input * 0.0009842065276110606;
                }
            case Weight.MilliGram:
                {
                    return input * 1000000;
                }
            case Weight.Ounce:
                {
                    return input * 35.27396194958041;
                }
            case Weight.Pound:
                {
                    return input * 2.204622621848776;
                }
            case Weight.ShortTon:
                {
                    return input * 0.0011023113109244;
                }
            case Weight.Stone:
                {
                    return input * 0.1574730444177697;
                }
            case Weight.Tonne:
                {
                    return input * 0.001;
                }
        }
        return 0;
    }

    //#endregion

    //#region public functions

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
        a = Complex.asinh(a);
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
        a = Complex.acosh(a);
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
        a = Complex.atanh(a);
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

    static MixVsFraction = (a: number, b: number = 1) => {
        let retry = true;
        while (retry) {
            retry = false;
            if (a % 10 !== 0) {
                a = (a * 10);
                b = 10 * b;
                retry = true;
            }
            a = a / 10;
            b = b / 10;
            try {
                for (let i = parseInt(`${Math.min(a, b)}`); i > 0; i--) {
                    if (parseInt(`${Math.min(a, b)}`) % i === 0) {
                        if (parseInt(`${Math.max(a, b)}`) % i === 0) {
                            //mixed
                            if ((a / i) > (b / i)) {
                                return (Math.floor((a / i) / (b / i))).toString() + "(" + ((a / i) % (b / i)).toString() + "/" + (b / i).toString() + ")";
                            }
                            //fraction
                            else { return (a / i).toString() + "/" + (b / i).toString(); }
                        }
                    }
                }
                return (a + "/" + b);
            }
            catch (Exception) {
                return (a + "/" + b);
            }
        }
    }

    static And = (a: number, b: number) => (a & b);

    static Or = (a: number, b: number) => (a | b);

    static Xor = (a: number, b: number) => (a ^ b);

    static Not = (a: number) => (a === 1 ? 0 : a === 0 ? 1 : 0);

    static Prime = (a: number) => {
        let j = 0;
        for (let i = 1; i <= a; i++) {
            if (a % i === 0) {
                j++;
            }
        }

        return j === 2;
    }

    static ListOfPrime = (a: number) => {
        let b = 0;
        const temp = new Array<number>();
        for (let i = 1; i <= a; i++) {
            for (let j = 1; j <= i; j++) {
                if (i % j === 0) {
                    b++;
                }
            }
            if (b === 2) {
                temp.push(i);
            }
            b = 0;
        }
        return temp;
    }

    static Permutation = (a: number, b: number) => {
        if (b === -1) {
            throw new Error('Null Reference Exception');
        }

        let c = 1;
        for (let i = 0; i < b; i++) {
            c = c * (a - i);
        }

        return c;
    }

    static Combination = (a: number, b: number) => {
        if (b === -1) {
            throw new Error('Null Reference Exception');
        }

        let c = 1, d = 1;
        for (let i = 0; i < b; i++) {
            c = c * (a - i);
            d = d * (b - i);
        }

        return (c / d);
    }

    static Factorial = (a: number) => {
        let b = 1;
        for (let i = 1; i <= a; i++) {
            b = b * i;
        }

        return b;
    }

    static Add = (a: Complex, b: Complex) => a.add(b);

    static Subtract = (a: Complex, b: Complex) => a.subtract(b);

    static Multiply = (a: Complex, b: Complex) => a.multiply(b);

    static Divide = (a: Complex, b: Complex) => a.divide(b);

    static Inverse = (a: Complex) => Complex.inverse(a);

    static Abs = (a: Complex) => Complex.abs(a);

    static Ceil = (a: Complex) => Complex.ceil(a);

    static Floor = (a: Complex) => Complex.floor(a);

    static Round = (a: Complex) => Complex.round(a);

    static ComplexArgument = (a: Complex) => Complex.arg(a);

    static ComplexConjugate = (a: Complex) => Complex.conjugate(a);

    static Modulus = (a: number, b: number) => (a % b);

    static LCM = (a: number) => {
        try {
            if (a === 0) { return null; }
            let b = a, retry1 = true;;
            const temp = new Array<number>(), result = new Array<number>();
            while (retry1) {
                retry1 = false;
                let q, j, k = 1, l = 1, retry = true;
                a = 1;
                while (retry) {
                    retry = false;
                    for (let i = 1; i <= b; i++) {
                        if (a % i === 0 && a > i) {
                            l++;
                        }
                        else if (a === i) {
                            if (l === 2) {
                                temp.push(a);
                                k = k * a;
                            }
                            else if (l > 2) {
                                for (j = 2; j <= b; j++) {
                                    let y = 1 / j;
                                    let z = Math.pow(a, y);
                                    if (z % 1 === 0) {
                                        for (q = 0; q < temp.length; q++) {
                                            if (a % parseInt(`${temp[q]}`) === 0) {
                                                k = k * (a / parseInt(`${temp[q]}`));
                                                temp.splice(q, 1, a);
                                            }
                                        }
                                    }
                                }
                            }
                            a = a + 1;
                            l = 1;
                            retry = true;
                            break;
                        }
                        if (a > b && !retry) {
                            result.push(k);
                            break;
                        }
                    }
                }
                b = b - 1;
                if (b === 0) {
                    result.reverse();
                    return result;
                }
                retry1 = true;
            }
            result.reverse();
            return result;
        }
        catch (Exception) { return null; }
    }

    static DecimalToBinary = (a: number) => {
        const list = new Array<number>();
        let c = '';
        let retry = true;
        while (retry) {
            retry = false;
            if (a > 2) {
                list.push(parseInt(`${a % 2}`));
                a = a / 2;
                retry = true;
                continue;
            }
            list.push(parseInt(`${a % 2}`));
            list.push(parseInt(`${a / 2}`));
            list.reverse();
            for (let item of list) { c += `${item.toString()}`; }
            return c;
        }
    }

    static DecimalToOctal = (a: number) => {
        const list = new Array<number>();
        let c = '';
        let retry = true;
        while (retry) {
            retry = false;
            if (a >= 8) {
                list.push(parseInt(`${a % 8}`));
                a = a / 8;
                retry = true;
            }
            list.push(parseInt(`${a}`));
            list.reverse();
            for (let item of list) { c += item.toString(); }
            return c;
        }
    }

    static DecimalToHexa = (a: number) => {
        const list = new Array<string | number>();
        let c = '';
        let retry = true;
        while (retry) {
            retry = false;
            if (a >= 16) {
                if (a % 16 >= 10) {
                    if (a % 16 === 10) { list.push('A'); }
                    if (a % 16 === 11) { list.push('B'); }
                    if (a % 16 === 12) { list.push('C'); }
                    if (a % 16 === 13) { list.push('D'); }
                    if (a % 16 === 14) { list.push('E'); }
                    if (a % 16 === 15) { list.push('F'); }
                }
                else {
                    list.push(parseInt(`${a % 16}`));
                }
                a = a / 16;
                retry = true;
            }
            else if (a >= 10) {
                if (a === 10) { list.push('A'); a = 0; }
                if (a === 11) { list.push('B'); a = 0; }
                if (a === 12) { list.push('C'); a = 0; }
                if (a === 13) { list.push('D'); a = 0; }
                if (a === 14) { list.push('E'); a = 0; }
                if (a === 15) { list.push('F'); a = 0; }
            }
            if (a !== 0) {
                list.push(parseInt(`${a}`));
            }
            list.reverse();
            for (let item of list) { c += item.toString(); }
            return c;
        }
    }

    static BinaryToDecimal = (a: number) => {
        const list = new Array<number>();
        let pow = 0;
        let count = a.toString().length - 1;
        const d = a.toString();
        let retry = true;
        while (retry) {
            retry = false;
            if (pow <= a.toString().length - 1) {
                list.push(Math.abs(parseInt(`${d.charCodeAt(pow) - 48}`) * Math.pow(2, count)));
                pow++;
                count--;
                retry = true;
                continue;
            }
            a = 0;
            for (let item of list) { a += item; }
            return a.toString();
        }
    }

    static OctalToDecimal = (a: number) => {
        const list = new Array<number>();
        let pow = 0;
        let count = a.toString().length - 1;
        const d = a.toString();
        let retry = true;
        while (retry) {
            retry = false;
            if (pow <= a.toString().length - 1) {
                list.push(Math.abs(parseInt(`${d.charCodeAt(pow) - 48}`) * Math.pow(8, count)));
                pow++;
                count--;
                retry = true;
            }
            a = 0;
            for (let item of list) { a += item; }
            return a.toString();
        }
    }

    static HexaToDecimal = (a: string) => {
        const list = new Array<number>();
        let pow = 0;
        let e = a.toString().length - 1;
        const itemList = a;
        let retry = true;
        while (retry) {
            retry = false;
            if (pow <= a.toString().length - 1) {
                if (isNaN(+itemList[pow])) {
                    if (itemList[pow] === 'A' || itemList[pow] === 'a') { list.push(10 * Math.pow(16, e)); }
                    if (itemList[pow] === 'B' || itemList[pow] === 'b') { list.push(11 * Math.pow(16, e)); }
                    if (itemList[pow] === 'C' || itemList[pow] === 'c') { list.push(12 * Math.pow(16, e)); }
                    if (itemList[pow] === 'D' || itemList[pow] === 'd') { list.push(13 * Math.pow(16, e)); }
                    if (itemList[pow] === 'E' || itemList[pow] === 'e') { list.push(14 * Math.pow(16, e)); }
                    if (itemList[pow] === 'F' || itemList[pow] === 'f') { list.push(15 * Math.pow(16, e)); }
                }
                if (!isNaN(+itemList[pow])) {
                    list.push(Math.abs(parseInt(`${+itemList.charCodeAt(pow) - 48}`) * Math.pow(16, e)));
                }
                pow++;
                e--;
                retry = true;
            }
            a = '';
            for (let item of list) { a = (a + item).toString(); }
            return a;
        }
    }

    static MatrixAdd = (a: number[][], b: number[][]) => {
        let row = a.length;
        let col = a.every(item => item.length === a[0].length) ? a[0].length : (row - 1);
        const c = new Array<number[]>();

        let rw1 = 0;
        let cl1 = 0;
        let row1 = b.length;
        let col1 = b.every(item => item.length === b[0].length) ? b[0].length : (row1 - 1);

        if (row !== row1 || col !== col1) {
            throw new Error("invalid row and column length");
        }

        if (row === row1 && col === col1) {
            while (rw1 < row) {
                if (!c[rw1]) {
                    c[rw1] = [];
                }
                c[rw1][cl1] = a[rw1][cl1] + b[rw1][cl1];
                cl1++;
                if (cl1 === col) {
                    cl1 = 0;
                    rw1++;
                }
            }
        }
        return c;
    }

    static MatrixSubtract = (a: number[][], b: number[][]) => {
        let row = a.length;
        let col = a.every(item => item.length === a[0].length) ? a[0].length : (row - 1);
        const c = new Array<number[]>();

        let rw1 = 0;
        let cl1 = 0;
        let row1 = b.length;
        let col1 = b.every(item => item.length === b[0].length) ? b[0].length : (row1 - 1);

        if (row !== row1 || col !== col1) {
            throw new Error("invalid row and column length");
        }
        if (row === row1 && col === col1) {
            while (rw1 < row) {
                if (!c[rw1]) {
                    c[rw1] = [];
                }
                c[rw1][cl1] = a[rw1][cl1] - b[rw1][cl1];
                cl1++;
                if (cl1 === col) {
                    cl1 = 0;
                    rw1++;
                }
            }
        }
        return c;
    }

    static MatrixMultiply = (a: number[][], b: number[][]) => {
        let row = a.length;
        let col = a.every(item => item.length === a[0].length) ? a[0].length : (row - 1);
        let ANS = null;
        const d = new Array<number>();

        let rw1 = 0;
        let cl1 = 0;
        let row1 = b.length;
        let col1 = b.every(item => item.length === b[0].length) ? b[0].length : (row1 - 1);
        let ans = 0;

        if ((row === 0 && col === 0) || (row1 === 0 && col1 === 0)) {
            throw new Error("null values in list of matrix");
        }
        else if (row !== col1 || row1 !== col) {
            throw new Error("unable to multiple invalid rows and columns");
        }
        else if (row === 1 && col1 === 1 && row1 === 1 && col === 1) {
            throw new Error("unable to multiple invalid rows and columns");
        }

        let rw11 = 0;
        let cl11 = 0;
        let e = null;
        let c = null;
        if (row > col && row1 < col1) {
            e = new Array<number[]>();
            c = new Array<number[]>();
            ANS = new Array<number[]>();
            rw11 = 0;
            cl11 = 0;
            while (rw11 < row && cl11 < col1) {
                if (!c[rw11]) {
                    c[rw11] = [];
                }
                if (rw11 < row1 && cl11 < col1) {
                    c[rw11][cl11] = b[rw11][cl11];
                }
                else {
                    c[rw11][cl11] = 0;
                }
                cl11++;
                if (cl11 === col1) {
                    cl11 = 0;
                    rw11++;
                }
            }
            rw11 = 0;
            cl11 = 0;
            while (rw11 < row && cl11 < col1) {
                if (!e[rw11]) {
                    e[rw11] = [];
                }
                if (rw11 < row && cl11 < col) {
                    e[rw11][cl11] = a[rw11][cl11];
                }
                else {
                    e[rw11][cl11] = 0;
                }
                cl11++;
                if (cl11 === col1) {
                    cl11 = 0;
                    rw11++;
                }
            }
        }
        if (row <= col && row1 >= col1) {
            e = new Array<number[]>();
            c = new Array<number[]>();
            ANS = new Array<number[]>();
            rw11 = 0;
            cl11 = 0;
            while (rw11 < row1 && cl11 < col) {
                if (!c[rw11]) {
                    c[rw11] = [];
                }
                if (rw11 < row1 && cl11 < col1) {
                    c[rw11][cl11] = b[rw11][cl11];
                }
                else {
                    c[rw11][cl11] = 0;
                }
                cl11++;
                if (cl11 === col) {
                    cl11 = 0;
                    rw11++;
                }
            }
            rw11 = 0;
            cl11 = 0;
            while (rw11 < row1 && cl11 < col) {
                if (!e[rw11]) {
                    e[rw11] = [];
                }
                if (rw11 < row && cl11 < col) {
                    e[rw11][cl11] = a[rw11][cl11];
                }
                else {
                    e[rw11][cl11] = 0;
                }
                cl11++;
                if (cl11 === col) {
                    cl11 = 0;
                    rw11++;
                }
            }
        }
        rw1 = 0;
        cl1 = 0;
        rw11 = 0;
        if (row === col1 && e && c) {
            while (rw11 < row) {
                d.push(e[rw11][cl1] * c[cl1][rw1]);
                rw1++;
                if (rw1 === row) {
                    rw1 = 0;
                    cl1++;
                }
                if (cl1 === col1) {
                    cl1 = 0;
                    rw1 = 0;
                    rw11++;
                }
            }
        }
        rw1 = 0;
        cl1 = 0;
        let main = row;
        let hmm = 0;
        let qu = 0;
        let qu1 = 0;
        const z = new Array<number>();
        while (true) {
            if (hmm === d.length - 1) { break; }
            hmm = qu1 - main;
            let ing = 0;
            while (ing < main) {
                hmm = hmm + main;
                ans = ans + (d[hmm]);
                ing++;
            }
            if (qu === main - 1) {
                qu = -1;
                qu1 = hmm;
            }
            qu++;
            qu1++;
            z.push(ans);
            ans = 0;
        }
        for (let i = 0; i < main; i++) {
            if (i === row && i === col1) {
                z.splice(i, 1);
            }
        }
        hmm = 0;
        if (ANS) {
            while (rw1 < row && cl1 < col1) {
                if (!ANS[rw1]) {
                    ANS[rw1] = [];
                }
                ANS[rw1][cl1] = (z[hmm]);
                cl1++;
                hmm++;
                if (cl1 === col1) {
                    cl1 = 0;
                    rw1++;
                }
            }
        }
        return ANS;
    }

    static PolarToRectangular = (r: number, theta: number, mode: Mode) => new Complex(r * Maths.Cos(new Complex(theta, 0), mode).realNumber, r * Maths.Sin(new Complex(theta, 0), mode).realNumber);

    static RectangularToPolar = (a: number, b: number, mode: Mode) => ({ r: Math.sqrt((a * a) + (b * b)), theta: Maths.ATan(new Complex(b, 0).divide(new Complex(a, 0)), mode).realNumber });

    static Lcm = (a: number[]) => {
        a.sort((a, b) => a - b);
        a.reverse();
        let temp = 1;
        const list = Maths.ListOfPrime(parseInt(`${a[0]}`));
        for (let count = 0; count < list.length;) {
            const iterator = list[count];
            if (!a.some(content => content !== 1)) {
                break;
            }
            if (a.some(content => !(content / iterator).toString().includes("."))) {
                for (let i = 0; i < a.length; i++) {
                    if (!(a[i] / iterator).toString().includes(".")) {
                        a[i] = a[i] / iterator;
                    }
                }
                temp *= parseInt(`${iterator}`);
            } else {
                count++;
            }
        }
        return temp;
    }

    static Hcf = (a: number[]) => {
        a.sort((a, b) => a - b);
        a.reverse();
        const list = Maths.ListOfPrime(parseInt(`${a[0] / 2}`));
        let temp = 1;
        for (let count = 0; count < list.length;) {
            const iterator = list[count];
            if (a.some(content => content === 1)) {
                break;
            }
            if (a.every(content => !(content / iterator).toString().includes("."))) {
                for (let i = 0; i < a.length; i++) {
                    a[i] = a[i] / iterator;
                }
                temp *= iterator;
            } else {
                count++;
            }
        }
        return temp;
    }

    static Mean = (list: number[]) => (list.reduce((a, b) => a + b) / list.length).toString();

    static Variance = (list: number[]) => {
        let list1 = [...list];
        let meanValue = Maths.Mean(list1);
        for (let i = 0; i < list.length; i++) {
            list1[i] = Math.pow(list1[i] - +(meanValue), 2);
        }
        if (meanValue.includes(".")) {
            meanValue = (list1.reduce((a, b) => a + b) / (list1.length - 1)).toString();
        }
        else {
            meanValue = (list1.reduce((a, b) => a + b) / list1.length).toString();
        }
        return meanValue;
    }

    static StandardDeviation = (variance: string) => {
        let outValue = parseFloat(variance);
        if (!isNaN(outValue)) {
            return Math.pow(outValue, 0.5).toString();
        }
        return '0';
    }

    static MeanSquare = (list: number[]) => ([...list].reduce((a, b) => a + Math.pow(b, 2)) / list.length).toString();

    static SquareSum = (list: number[]) => ([...list].reduce((a, b) => a + Math.pow(b, 2))).toString();

    static Sum = (list: number[]) => [...list].reduce((a, b) => a + b).toString();

    static Angle = (a: number) => ((a - 2) * 180 / a).toString();

    static AngleToAngle = (a: Angle, b: Angle, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Angle.Degree:
                {
                    switch (b) {
                        case Angle.Degree:
                            {
                                return input;
                            }
                        case Angle.Gradian:
                            {
                                return Maths.GradToDeg(new Complex(input, 0)).realNumber;
                            }
                        case Angle.Radian:
                            {
                                return Maths.RadToDeg(new Complex(input, 0)).realNumber;
                            }
                    }
                    break;
                }
            case Angle.Gradian:
                {
                    switch (b) {
                        case Angle.Degree:
                            {
                                return Maths.DegToGrad(new Complex(input, 0)).realNumber;
                            }
                        case Angle.Gradian:
                            {
                                return input;
                            }
                        case Angle.Radian:
                            {
                                return Maths.RadToDeg(Maths.DegToGrad(new Complex(input, 0))).realNumber;
                            }
                    }
                    break;
                }
            case Angle.Radian:
                {
                    switch (b) {
                        case Angle.Degree:
                            {
                                return Maths.DegToRad(new Complex(input, 0)).realNumber;
                            }
                        case Angle.Gradian:
                            {
                                return Maths.DegToRad(Maths.GradToDeg(new Complex(input, 0))).realNumber;
                            }
                        case Angle.Radian:
                            {
                                return input;
                            }
                    }
                    break;
                }
        }
        return 0;
    }

    static BaseToBase = (a: Base, b: Base, input: string) => {
        switch (b) {
            case Base.Binary:
                {
                    return Maths.DecimalToBinary(parseInt(Maths.Decimal(a, input) || ''));
                }
            case Base.Decimal:
                {
                    return Maths.Decimal(a, input);
                }
            case Base.HexaDecimal:
                {
                    return Maths.DecimalToHexa(parseInt(Maths.Decimal(a, input) || ''));
                }
            case Base.Octal:
                {
                    return Maths.DecimalToOctal(parseInt(Maths.Decimal(a, input) || ''));
                }
        }
        return "0";
    }

    static AreaToArea = (a: Area, b: Area, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Area.Acres:
                {
                    return Maths.Acres(b, input);
                }
            case Area.Hectares:
                {
                    return Maths.Acres(b, input) * 2.471053814671653;
                }
            case Area.SquareCentimeter:
                {
                    return Maths.Acres(b, input) / 40468564.224;
                }
            case Area.SquareFeet:
                {
                    return Maths.Acres(b, input) / 43560;
                }
            case Area.SquareInch:
                {
                    return Maths.Acres(b, input) / 6272640;
                }
            case Area.SquareKilometer:
                {
                    return Maths.Acres(b, input) / 0.0040468564224;
                }
            case Area.SquareMeter:
                {
                    return Maths.Acres(b, input) / 4046.8564224;
                }
            case Area.SquareMile:
                {
                    return Maths.Acres(b, input) * (1 / 0.0015625);
                }
            case Area.SquareMillimeter:
                {
                    return Maths.Acres(b, input) * (1 / 4046856422.4);
                }
            case Area.SquareYard:
                {
                    return Maths.Acres(b, input) * (1 / 4840);
                }
        }
        return 0;
    }

    static EnergyToEnergy = (a: Energy, b: Energy, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Energy.BritishThermalUnit:
                {
                    return Maths.BritishThermalUnit(b, input);
                }
            case Energy.Calorie:
                {
                    return Maths.BritishThermalUnit(b, input) / 251.9957963122194;
                }
            case Energy.ElectronVolts:
                {
                    return Maths.BritishThermalUnit(b, input) / 6585142025517001000000;
                }
            case Energy.FootPound:
                {
                    return Maths.BritishThermalUnit(b, input) / 778.1693709678747;
                }
            case Energy.Joule:
                {
                    return Maths.BritishThermalUnit(b, input) / 1055.056;
                }
            case Energy.KiloCalorie:
                {
                    return Maths.BritishThermalUnit(b, input) / 0.2519957963122194;
                }
            case Energy.KiloJoule:
                {
                    return Maths.BritishThermalUnit(b, input) / 1.055056;
                }
        }
        return 0;
    }

    static LengthToLength = (a: Length, b: Length, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Length.Angstorm:
                {
                    return Maths.Fathom(b, input) / 18288000000;
                }
            case Length.Centimeter:
                {
                    return Maths.Fathom(b, input) / 182.88;
                }
            case Length.Chain:
                {
                    return Maths.Fathom(b, input) / 0.0909090909090909;
                }
            case Length.Fathom:
                {
                    return Maths.Fathom(b, input);
                }
            case Length.Feet:
                {
                    return Maths.Fathom(b, input) / 6;
                }
            case Length.Hand:
                {
                    return Maths.Fathom(b, input) / 18;
                }
            case Length.Inch:
                {
                    return Maths.Fathom(b, input) / 72;
                }
            case Length.Kilometer:
                {
                    return Maths.Fathom(b, input) / 0.0018288;
                }
            case Length.Link:
                {
                    return Maths.Fathom(b, input) / 9.090909090909091;
                }
            case Length.Meter:
                {
                    return Maths.Fathom(b, input) / 1.8288;
                }
            case Length.Microns:
                {
                    return Maths.Fathom(b, input) / 1828800;
                }
            case Length.Mile:
                {
                    return Maths.Fathom(b, input) / 0.0011363636363636;
                }
            case Length.Millimeter:
                {
                    return Maths.Fathom(b, input) / 1828.8;
                }
            case Length.Nanometer:
                {
                    return Maths.Fathom(b, input) / 1828800000;
                }
            case Length.NauticalMile:
                {
                    return Maths.Fathom(b, input) / 0.0009874730021598272;
                }
            case Length.PICA:
                {
                    return Maths.Fathom(b, input) / 433.6200043362;
                }
            case Length.Rods:
                {
                    return Maths.Fathom(b, input) / 0.3636363636363636;
                }
            case Length.Span:
                {
                    return Maths.Fathom(b, input) / 8;
                }
            case Length.Yard:
                {
                    return Maths.Fathom(b, input) / 2;
                }
        }
        return 0;
    }

    static PowerToPower = (a: Powers, b: Powers, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Powers.BTUminute:
                {
                    return Maths.BTUPerMinute(b, input);
                }
            case Powers.FootPound:
                {
                    return Maths.BTUPerMinute(b, input) / 778.1693709678747;
                }
            case Powers.Horsepower:
                {
                    return Maths.BTUPerMinute(b, input) / 0.0235808900293295;
                }
            case Powers.Kilowatt:
                {
                    return Maths.BTUPerMinute(b, input) / 0.0175842666666667;
                }
            case Powers.Watt:
                {
                    return Maths.BTUPerMinute(b, input) / 17.58426666666667;
                }
        }
        return 0;
    }

    static PressureToPressure = (a: Pressure, b: Pressure, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Pressure.Atmosphere:
                {
                    return Maths.Atmosphere(b, input);
                }
            case Pressure.Bar:
                {
                    return Maths.Atmosphere(b, input) / 1.01325;
                }
            case Pressure.KiloPascal:
                {
                    return Maths.Atmosphere(b, input) / 101.325;
                }
            case Pressure.MillimeterOfMercury:
                {
                    return Maths.Atmosphere(b, input) / 760.1275318829707;
                }
            case Pressure.Pascal:
                {
                    return Maths.Atmosphere(b, input) / 101325;
                }
            case Pressure.PoundPerSquareInch:
                {
                    return Maths.Atmosphere(b, input) / 14.69594940039221;
                }
        }
        return 0;
    }

    static TemperatureToTemperature = (a: Temperature, b: Temperature, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Temperature.DegreeCelsius:
                {
                    return Maths.Celsius(b, input);
                }
            case Temperature.DegreeFahrenheit:
                {
                    return (Maths.Celsius(b, input) - 32) / 1.8;
                }
            case Temperature.Kelvin:
                {
                    return Maths.Celsius(b, input) - 273.15;
                }
        }
        return 0;
    }

    static TimeToTime = (a: Time, b: Time, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Time.Day:
                {
                    return Maths.Day(b, input);
                }
            case Time.Hour:
                {
                    return Maths.Day(b, input) / 24;
                }
            case Time.MicroSecond:
                {
                    return Maths.Day(b, input) / 86400000000;
                }
            case Time.MilliSecond:
                {
                    return Maths.Day(b, input) / 86400000;
                }
            case Time.Minute:
                {
                    return Maths.Day(b, input) / 1440;
                }
            case Time.Second:
                {
                    return Maths.Day(b, input) / 86400;
                }
            case Time.Week:
                {
                    return Maths.Day(b, input) / 0.1428571428571429;
                }
        }
        return 0;
    }

    static VelocityToVelocity = (a: Velocity, b: Velocity, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Velocity.CentimeterPerSecond:
                {
                    return Maths.Knots(b, input) / 51.44444444444444;
                }
            case Velocity.FeetPerSecond:
                {
                    return Maths.Knots(b, input) / 1.687809857101196;
                }
            case Velocity.KilometerPerHour:
                {
                    return Maths.Knots(b, input) / 1.852;
                }
            case Velocity.Knots:
                {
                    return Maths.Knots(b, input);
                }
            case Velocity.Mach:
                {
                    return Maths.Knots(b, input) / 0.0015117677734015;
                }
            case Velocity.MeterPerSecond:
                {
                    return Maths.Knots(b, input) / 0.5144444444444444;
                }
            case Velocity.MilesPerHour:
                {
                    return Maths.Knots(b, input) / 1.150779448023543;
                }
        }
        return 0;
    }

    static VolumeToVolume = (a: Volume, b: Volume, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Volume.CubicCentimeter:
                {
                    return Maths.CubicFeet(b, input) / 28316.846592;
                }
            case Volume.CubicFeet:
                {
                    return Maths.CubicFeet(b, input);
                }
            case Volume.CubicInch:
                {
                    return Maths.CubicFeet(b, input) / 1728;
                }
            case Volume.CubicMeter:
                {
                    return Maths.CubicFeet(b, input) / 0.028316846592;
                }
            case Volume.CubicYard:
                {
                    return Maths.CubicFeet(b, input) / 0.037037037037037;
                }
            case Volume.FluidOunceUK:
                {
                    return Maths.CubicFeet(b, input) / 996.6136734468521;
                }
            case Volume.FluidounceUS:
                {
                    return Maths.CubicFeet(b, input) / 957.5064935064935;
                }
            case Volume.GallonUK:
                {
                    return Maths.CubicFeet(b, input) / 6.228835459042826;
                }
            case Volume.GallonUS:
                {
                    return Maths.CubicFeet(b, input) / 7.480519480519481;
                }
            case Volume.Liter:
                {
                    return Maths.CubicFeet(b, input) / 28.316846592;
                }
            case Volume.PintUK:
                {
                    return Maths.CubicFeet(b, input) / 49.83068367234261;
                }
            case Volume.PintUS:
                {
                    return Maths.CubicFeet(b, input) / 59.84415584415584;
                }
            case Volume.QuartUK:
                {
                    return Maths.CubicFeet(b, input) / 24.9153418361713;
                }
            case Volume.QuartUS:
                {
                    return Maths.CubicFeet(b, input) / 29.92207792207792;
                }
        }
        return 0;
    }

    static WeightToWeight = (a: Weight, b: Weight, input: number) => {
        Maths.validate(input);
        switch (a) {
            case Weight.Carat:
                {
                    return Maths.KiloGram(b, input) / 5000;
                }
            case Weight.CentiGram:
                {
                    return Maths.KiloGram(b, input) / 100000;
                }
            case Weight.DeciGram:
                {
                    return Maths.KiloGram(b, input) / 10000;
                }
            case Weight.DekaGram:
                {
                    return Maths.KiloGram(b, input) / 100;
                }
            case Weight.Gram:
                {
                    return Maths.KiloGram(b, input) / 1000;
                }
            case Weight.HectoGram:
                {
                    return Maths.KiloGram(b, input) / 10;
                }
            case Weight.KiloGram:
                {
                    return Maths.KiloGram(b, input);
                }
            case Weight.LongTon:
                {
                    return Maths.KiloGram(b, input) / 0.0009842065276110606;
                }
            case Weight.MilliGram:
                {
                    return Maths.KiloGram(b, input) / 1000000;
                }
            case Weight.Ounce:
                {
                    return Maths.KiloGram(b, input) / 35.27396194958041;
                }
            case Weight.Pound:
                {
                    return Maths.KiloGram(b, input) / 2.204622621848776;
                }
            case Weight.ShortTon:
                {
                    return Maths.KiloGram(b, input) / 0.0011023113109244;
                }
            case Weight.Stone:
                {
                    return Maths.KiloGram(b, input) / 0.1574730444177697;
                }
            case Weight.Tonne:
                {
                    return Maths.KiloGram(b, input) / 0.001;
                }
        }
        return 0;
    }

    static APSum = (a: number, b: number, c: number) => {
        let result = 0;
        if (a.toString().includes(",") || b.toString().includes(",") || c.toString().includes(",") || a === 0 || b === 0 || c <= a) {
            throw new Error("Invalid Input");
        }
        for (let i = a; i <= c;) {
            result += i;
            i = i + b;
        }
        return result;
    }

    static APDiff = (a: number, b: number, c: number) => {
        let result = 0;
        let temp = true;
        if (a.toString().includes(",") || b.toString().includes(",") || c.toString().includes(",") || a === 0 || b === 0 || c <= a) {
            throw new Error("Invalid Input");
        }
        for (let i = a; i <= c;) {
            if (temp) {
                result += i;
                temp = false;
            }
            else {
                result -= i;
                temp = true;
            }
            i = i + b;
        }
        return result;
    }

    static GPSum = (a: number, b: number, c: number) => {
        let result = 0;
        if (a.toString().includes(",") || b.toString().includes(",") || c.toString().includes(",") || a === 0 || b <= 1 || c <= a) {
            throw new Error("Invalid Input");
        }
        for (let i = a; i <= c;) {
            result += i;
            i = i * b;
        }
        return result;
    }

    static GPDiff = (a: number, b: number, c: number) => {
        let result = 0;
        let temp = true;
        if (a.toString().includes(",") || b.toString().includes(",") || c.toString().includes(",") || a === 0 || b <= 1 || c <= a) {
            throw new Error("Invalid Input");
        }
        for (let i = a; i <= c;) {
            if (temp) {
                result += i;
                temp = false;
            }
            else {
                result -= i;
                temp = true;
            }
            i = i * b;
        }
        return result;
    }

    static HPSum = (a: number, b: number, c: number) => {
        let result = 0;
        if (a.toString().includes(",") || b.toString().includes(",") || c.toString().includes(",") || a === 0 || b === 0 || c <= a) {
            throw new Error("Invalid Input");
        }
        for (let i = a; i <= c;) {
            result += 1 / i;
            i = i + b;
        }
        return result;
    }

    static HPDiff = (a: number, b: number, c: number) => {
        let result = 0;
        let temp = true;
        if (a.toString().includes(",") || b.toString().includes(",") || c.toString().includes(",") || a === 0 || b === 0 || c <= a) {
            throw new Error("Invalid Input");
        }
        for (let i = a; i <= c;) {
            if (temp) {
                result += 1 / i;
                temp = false;
            }
            else {
                result -= 1 / i;
                temp = true;
            }
            i = i + b;
        }
        return result;
    }

    static getConstantValue = (key: _constType) => `${Object.keys(_constants).includes(key) ? _constants[key] : ''}`

    //#endregion

}

//#endregion

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
