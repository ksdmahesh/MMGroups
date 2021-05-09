//#region imports

import Maths, { Mode } from "./Math";
import TypeCheck from "./TypeChecker";

//#endregion

//#region enums

export enum Planets {
    Mercury = 'Mercury',
    Venus = 'Venus',
    Earth = 'Earth',
    Mars = 'Mars',
    Jupiter = 'Jupiter',
    Saturn = 'Saturn',
    Uranus = 'Uranus',
    Neptune = 'Neptune',
    Pluto = 'Pluto'
}

//#endregion

//#region types

type AstroProps = {
    latitude?: number,
    longitude?: number,
    date?: Date
};

type PlanetProps = {
    rise?: Date,
    set?: Date,
    elevationOfObserver?: number,
    distance?: number,
    declination?: {
        degree: string,
        decimal: number
    },
    rightAscension?: {
        degree: string,
        decimal: number
    },
    azimuth?: number,
    height?: number,
    transit?: number,
    elongation?: { e1: number, e2: number }
};

type Properties = {
    planet?: PlanetProps,
    lunar?: PlanetProps
};

type Coordinates = { x: number, y: number, z: number };

//#endregion

//#region Constants

const sin = (a?: number) => Maths.Sin(a || 0, Mode.Degree);

const cos = (a?: number) => Maths.Cos(a || 0, Mode.Degree);

const tan = (a?: number) => Maths.Tan(a || 0, Mode.Degree);

const sinh = (a?: number) => Maths.Sinh(a || 0, Mode.Degree);

const cosh = (a?: number) => Maths.Cosh(a || 0, Mode.Degree);

const tanh = (a?: number) => Maths.Tanh(a || 0, Mode.Degree);

const asin = (a?: number) => Maths.ASin(a || 0, Mode.Degree);

const acos = (a?: number) => Maths.ACos(a || 0, Mode.Degree);

const atan = (a?: number) => Maths.ATan(a || 0, Mode.Degree);

const atan2 = Math.atan2;

const degToHour = (a?: number) => Maths.DegToHour(a || 0);

const decimalToDeg = (a?: number) => Maths.DecimalToDeg(a || 0) as { degree: string, decimal: number };

const degToRad = (a?: number) => Maths.DegToRad(a || 0);

const radToDeg = (a?: number) => Maths.RadToDeg(a || 0);

const minuteToDeg = (a?: number) => Maths.MinuteToDeg(a || 0);

const sq = (a: number) => a * a;

const cb = (a: number) => a * a * a;

const sqrt = Math.sqrt;

const cbrt = Math.cbrt;

const floor = Math.floor;

const PI = Math.PI;

const abs = Math.abs;

const julianDay = Maths.JulianDay;

const gregorianDay = Maths.GregorianDay;

const AUToKM = (a: number) => (149597870.7 * a);

//#endregion

export default class Astro {

    //#region properties

    properties: AstroProps & Properties = {};

    //#region Sun

    MA: { [key in Planets]: { M0: number, M1: number } } = {
        Mercury: { M0: 174.7948, M1: 4.09233445 },
        Venus: { M0: 50.4161, M1: 1.60213034 },
        Earth: { M0: 357.5291, M1: 0.98560028 },
        Mars: { M0: 19.3730, M1: 0.52402068 },
        Jupiter: { M0: 20.0202, M1: 0.08308529 },
        Saturn: { M0: 317.0207, M1: 0.03344414 },
        Uranus: { M0: 141.0498, M1: 0.01172834 },
        Neptune: { M0: 256.2250, M1: 0.00598103 },
        Pluto: { M0: 14.882, M1: 0.00396 }
    }

    EC: { [key in Planets]: { C1: number, C2: number, C3?: number, C4?: number, C5?: number, C6?: number, EC: number } } = {
        Mercury: { C1: 23.4400, C2: 2.9818, C3: 0.5255, C4: 0.1058, C5: 0.0241, C6: 0.0055, EC: 0.0026 },
        Venus: { C1: 0.7758, C2: 0.0033, EC: 0.0000 },
        Earth: { C1: 1.9148, C2: 0.0200, C3: 0.0003, EC: 0.0000 },
        Mars: { C1: 10.6912, C2: 0.6228, C3: 0.0503, C4: 0.0046, C5: 0.0005, EC: 0.0001 },
        Jupiter: { C1: 5.5549, C2: 0.1683, C3: 0.0071, C4: 0.0003, EC: 0.0001 },
        Saturn: { C1: 6.3585, C2: 0.2204, C3: 0.0106, C4: 0.0006, EC: 0.0001 },
        Uranus: { C1: 5.3042, C2: 0.1534, C3: 0.0062, C4: 0.0003, EC: 0.0001 },
        Neptune: { C1: 1.0302, C2: 0.0058, EC: 0.0001 },
        Pluto: { C1: 28.3150, C2: 4.3408, C3: 0.9214, C4: 0.2235, C5: 0.0627, C6: 0.0174, EC: 0.0096 }
    }

    POE: { [key in Planets]: { Perihelion: number, Obliquity: number } } = {
        Mercury: { Perihelion: 230.3265, Obliquity: 0.0351 },
        Venus: { Perihelion: 73.7576, Obliquity: 2.6376 },
        Earth: { Perihelion: 102.9373, Obliquity: 23.4393 },
        Mars: { Perihelion: 71.0041, Obliquity: 25.1918 },
        Jupiter: { Perihelion: 237.1015, Obliquity: 3.1189 },
        Saturn: { Perihelion: 99.4587, Obliquity: 26.7285 },
        Uranus: { Perihelion: 5.4634, Obliquity: 82.2298 },
        Neptune: { Perihelion: 182.2100, Obliquity: 27.8477 },
        Pluto: { Perihelion: 184.5484, Obliquity: 119.6075 }
    }

    Obs: { [key in Planets]: { theta0: number, theta1: number } } = {
        Mercury: { theta0: 132.3282, theta1: 6.1385025 },
        Venus: { theta0: 104.9067, theta1: -1.4813688 },
        Earth: { theta0: 280.1470, theta1: 360.9856235 },
        Mars: { theta0: 313.3827, theta1: 350.89198226 },
        Jupiter: { theta0: 145.9722, theta1: 870.5360000 },
        Saturn: { theta0: 174.3508, theta1: 810.7939024 },
        Uranus: { theta0: 29.6474, theta1: -501.1600928 },
        Neptune: { theta0: 52.4160, theta1: 536.3128662 },
        Pluto: { theta0: 122.2370, theta1: 56.3625225 }
    }

    ECAD: { [key in Planets]: { D1: number, A2: number, D3?: number, A4?: number, D5?: number, A6?: number, EA: number, ED: number } } = {
        Mercury: { A2: -0.0000, EA: 0.0000, D1: 0.0351, ED: 0.0000 },
        Venus: { A2: -0.0304, EA: 0.0001, D1: 2.6367, D3: 0.0009, ED: 0.0036 },
        Earth: { A2: -2.4657, A4: 0.0529, A6: -0.0014, EA: 0.0003, D1: 22.7908, D3: 0.5991, D5: 0.0492, ED: 0.0003 },
        Mars: { A2: -2.8608, A4: 0.0713, A6: -0.0022, EA: 0.0004, D1: 24.3880, D3: 0.7332, D5: 0.0706, ED: 0.0011 },
        Jupiter: { A2: -0.0425, EA: 0.0001, D1: 3.1173, D3: 0.0015, ED: 0.0034 },
        Saturn: { A2: -3.2338, A4: 0.0909, A6: -0.0031, EA: 0.0009, D1: 25.7696, D3: 0.8640, D5: 0.0949, ED: 0.0010 },
        Uranus: { A2: -42.5874, A4: 12.8117, A6: -2.6077, EA: 17.6902, D1: 56.9083, D3: -0.8433, D5: 26.1648, ED: 3.34 },
        Neptune: { A2: -3.5214, A4: 0.1078, A6: -0.0039, EA: 0.0163, D1: 26.7643, D3: 0.9669, D5: 0.1166, ED: 0.060 },
        Pluto: { A2: -19.3248, A4: 3.0286, A6: -0.4092, EA: 0.5052, D1: 49.8309, D3: 4.9707, D5: 5.5910, ED: 0.19 }
    }

    /**
     * J1 = (EC.C1/(Obs.theta1-MA.M1))
     * J2 = (ECAD.A2/(Obs.theta1-MA.M1))
     * J3 = (360/(Obs.theta1-MA.M1))
     */
    JT: { [key in Planets]: { J1: number, J2: number, J3: number } } = (() => {
        const transit: any = {};
        Object.keys(Planets).forEach(planet => {
            transit[planet] = {};
            const de = this.Obs[planet as keyof typeof Planets].theta1 - this.MA[planet as keyof typeof Planets].M1;
            transit[planet].J1 = this.EC[planet as keyof typeof Planets].C1 / de;
            transit[planet].J2 = this.ECAD[planet as keyof typeof Planets].A2 / de;
            transit[planet].J3 = 360 / de;
        });
        return transit;
    })();

    HA: { [key in Planets]: { H1: number, H3?: number, H5?: number } } = {
        Mercury: { H1: 0.035 },
        Venus: { H1: 2.636, H3: 0.001 },
        Earth: { H1: 22.137, H3: 0.599, H5: 0.016 },
        Mars: { H1: 23.576, H3: 0.733, H5: 0.024 },
        Jupiter: { H1: 3.116, H3: 0.002 },
        Saturn: { H1: 24.800, H3: 0.864, H5: 0.032 },
        Uranus: { H1: 28.680, H3: -0.843, H5: 8.722 },
        Neptune: { H1: 26.668, H3: 0.967, H5: 0.039 },
        Pluto: { H1: 38.648, H3: 4.971, H5: 1.864 }
    }

    RHA: { [key in Planets]: { h0: number, dSun: number, sinH0: number } } = {
        Mercury: { h0: -0.69, dSun: 1.38, sinH0: -0.0120 },
        Venus: { h0: -0.37, dSun: 0.74, sinH0: -0.0064 },
        Earth: { h0: -0.83, dSun: 0.53, sinH0: -0.0146 },
        Mars: { h0: -0.17, dSun: 0.35, sinH0: -0.0031 },
        Jupiter: { h0: -0.05, dSun: 0.10, sinH0: -0.0009 },
        Saturn: { h0: -0.03, dSun: 0.06, sinH0: -0.0005 },
        Uranus: { h0: -0.01, dSun: 0.03, sinH0: -0.0002 },
        Neptune: { h0: -0.01, dSun: 0.02, sinH0: -0.0002 },
        Pluto: { h0: -0.01, dSun: 0.01, sinH0: -0.0001 }
    }

    CS: { [key in Planets]: { C: number, S: number } } = {
        Mercury: { C: 94.5, S: 0 },
        Venus: { C: 3.1, S: 0.1 },
        Earth: { C: 7.7, S: 9.9 },
        Mars: { C: 42.8, S: 11.4 },
        Jupiter: { C: 22.2, S: 0.2 },
        Saturn: { C: 25.4, S: 13.0 },
        Uranus: { C: 21.2, S: 178.1 },
        Neptune: { C: 4.1, S: 14.1 },
        Pluto: { C: 114.6, S: 69.3 }
    }

    DER: { [key in Planets]: { ra: number, d: number, omg: number, i: number, w: number, w1: number, w2: number } } = {
        Mercury: { ra: 281.0097, d: 61.4143, omg: 48.330893, i: 7.004986, w: 29.125226, w1: 329.5469, w2: 6.1385025 },
        Venus: { ra: 272.76, d: 67.16, omg: 76.679920, i: 3.394662, w: 54.883787, w1: 160.20, w2: -1.4813688 },
        Earth: { ra: 0, d: 90, omg: 174.873174, i: 0, w: 288.064174, w1: 190.147, w2: 360.9856235 },
        Mars: { ra: 317.68143, d: 52.88650, omg: 49.558093, i: 1.849726, w: 286.502141, w1: 176.630, w2: 350.89198226 },
        Jupiter: { ra: 268.056595, d: 64.495303, omg: 100.464441, i: 1.303270, w: 273.866868, w1: 284.95, w2: 870.5360000 },
        Saturn: { ra: 40.589, d: 83.537, omg: 113.665524, i: 2.488878, w: 339.391263, w1: 38.90, w2: 810.7939024 },
        Uranus: { ra: 257.311, d: -15.175, omg: 74.005947, i: 0.773196, w: 98.999212, w1: 203.81, w2: -501.1600928 },
        Neptune: { ra: 299.36, d: 43.46, omg: 131.784057, i: 1.769952, w: 276.339634, w1: 253.18, w2: 536.3128492 },
        Pluto: { ra: 132.993, d: -6.163, omg: 110.307, i: 17.140, w: 113.768, w1: 302.695, w2: 56.3625225 }
    }

    GVT = {
        Sun: { g: 27.964, weight: 1398 },
        Mercury: { g: 0.376, weight: 19 },
        Venus: { g: 0.905, weight: 45 },
        Earth: { g: 1.000, weight: 50 },
        Mars: { g: 0.379, weight: 19 },
        Jupiter: { g: 2.530, weight: 127 },
        Saturn: { g: 1.064, weight: 53 },
        Uranus: { g: 0.905, weight: 45 },
        Neptune: { g: 1.137, weight: 57 },
        Pluto: { g: 0.067, weight: 3 },
        Io: { g: 0.185, weight: 9 },
        Moon: { g: 0.164, weight: 8 },
        Ganymede: { g: 0.146, weight: 7 },
        Titan: { g: 0.139, weight: 7 },
        Europa: { g: 0.133, weight: 7 },
        Callisto: { g: 0.128, weight: 6 },
        Triton: { g: 0.080, weight: 4 }
    }

    //#endregion

    //#region Moon

    MEC: { [key in Planets]?: { a: number, e: number, i: number, w: number, omg: number, M0: number } } = {
        Mercury: { a: 0.38710, e: 0.20563, i: 7.005, w: 29.125, omg: 48.331, M0: 174.795 },
        Venus: { a: 0.72333, e: 0.00677, i: 3.395, w: 54.884, omg: 76.680, M0: 50.416 },
        Earth: { a: 1.00000, e: 0.01671, i: 0.000, w: 288.064, omg: 174.873, M0: 357.529 },
        Mars: { a: 1.52368, e: 0.09340, i: 1.850, w: 286.502, omg: 49.558, M0: 19.373 },
        Jupiter: { a: 5.20260, e: 0.04849, i: 1.303, w: 273.867, omg: 100.464, M0: 20.020 },
        Saturn: { a: 9.55491, e: 0.05551, i: 2.489, w: 339.391, omg: 113.666, M0: 317.021 },
        Uranus: { a: 19.21845, e: 0.04630, i: 0.773, w: 98.999, omg: 74.006, M0: 141.050 },
        Neptune: { a: 30.11039, e: 0.00899, i: 1.770, w: 276.340, omg: 131.784, M0: 256.225 },
        Pluto: { a: 39.543, e: 0.2490, i: 17.140, w: 113.768, omg: 110.307, M0: 14.882 }
    }

    NAP: { [key in Planets]?: { n: number, a1e2: number, p: number } } = {
        Mercury: { n: 4.092317, a1e2: 0.37073, p: 77.456 },
        Venus: { n: 1.602136, a1e2: 0.72330, p: 131.564 },
        Earth: { n: 0.985608, a1e2: 0.99972, p: 102.937 },
        Mars: { n: 0.524039, a1e2: 1.51039, p: 336.060 },
        Jupiter: { n: 0.083056, a1e2: 5.19037, p: 14.331 },
        Saturn: { n: 0.033371, a1e2: 9.52547, p: 93.057 },
        Uranus: { n: 0.011698, a1e2: 19.17725, p: 173.005 },
        Neptune: { n: 0.005965, a1e2: 30.10796, p: 48.124 },
        Pluto: { n: 0.003964, a1e2: 37.09129, p: 224.075 }
    }

    RAD: { [key in Planets | 'Sun']?: { ra: { decimal: number, degree: string }, d: { decimal: number, AU: number } } } = {
        Sun: { ra: { decimal: 280.710, degree: '18h42m50s' }, d: { decimal: -23.074, AU: 0.98331 } },
        Mercury: { ra: { decimal: 268.693, degree: '17h54m46s' }, d: { decimal: -20.296, AU: 0.70403 } },
        Venus: { ra: { decimal: 316.189, degree: '21h04m45s' }, d: { decimal: -18.614, AU: 1.3061 } },
        Mars: { ra: { decimal: 8.335, degree: '0h33m20s' }, d: { decimal: +3.660, AU: 1.1115 } },
        Jupiter: { ra: { decimal: 170.120, degree: '11h20m29s' }, d: { decimal: +5.567, AU: 4.9716 } },
        Saturn: { ra: { decimal: 100.256, degree: '6h41m01s' }, d: { decimal: +22.420, AU: 8.0443 } },
        Uranus: { ra: { decimal: 333.148, degree: '22h12m36s' }, d: { decimal: -11.868, AU: 20.654 } },
        Neptune: { ra: { decimal: 313.525, degree: '20h54m06s' }, d: { decimal: -17.459, AU: 30.973 } },
        Pluto: { ra: { decimal: 260.277, degree: '17h21m07s' }, d: { decimal: -14.497, AU: 31.700 } }
    }

    ACU: { [key in Planets | 'Sun']?: { ra: number, d: number, er: number } } = {
        Sun: { ra: 0.03, d: 0.01, er: 0.0000 },
        Mercury: { ra: 0.09, d: 0.04, er: 0.0013 },
        Venus: { ra: 0.17, d: 0.05, er: 0.0008 },
        Mars: { ra: 0.26, d: 0.07, er: 0.0018 },
        Jupiter: { ra: 0.32, d: 0.12, er: 0.0093 },
        Saturn: { ra: 1.08, d: 0.43, er: 0.049 },
        Uranus: { ra: 1.00, d: 0.35, er: 0.047 },
        Neptune: { ra: 0.68, d: 0.2, er: 0.072 }
    }

    APR: { [key in Planets | 'Sun']?: { ra: { 3: number, 2: number, 1: number, 0: number }, d: { 3: number, 2: number, 1: number, 0: number }, er: { 3: number, 2: number, 1: number, 0: number } } } = {
        Sun: { ra: { 3: 0.14, 2: 0.032, 1: 0.032, 0: 0.032 }, d: { 3: 0.26, 2: 0.011, 1: 0.011, 0: 0.011 }, er: { 3: 0.0001, 2: 0.0001, 1: 0.0001, 0: 0.0001 } },
        Mercury: { ra: { 3: 2.3, 2: 2.3, 1: 0.45, 0: 0.088 }, d: { 3: 5.0, 2: 4.9, 1: 0.23, 0: 0.045 }, er: { 3: 0.0084, 2: 0.0084, 1: 0.0056, 0: 0.0013 } },
        Venus: { ra: { 3: 3.4, 2: 3.4, 1: 0.17, 0: 0.17 }, d: { 3: 8.2, 2: 7.9, 1: 0.05, 0: 0.05 }, er: { 3: 0.0045, 2: 0.0045, 1: 0.00078, 0: 0.00077 } },
        Mars: { ra: { 3: 2.6, 2: 2.6, 1: 0.41, 0: 0.26 }, d: { 3: 6.3, 2: 6.5, 1: 0.14, 0: 0.074 }, er: { 3: 0.0028, 2: 0.0028, 1: 0.0026, 0: 0.0017 } },
        Jupiter: { ra: { 3: 0.87, 2: 0.86, 1: 0.32, 0: 0.32 }, d: { 3: 1.8, 2: 1.6, 1: 0.12, 0: 0.12 }, er: { 3: 0.0095, 2: 0.0095, 1: 0.0094, 0: 0.0093 } },
        Saturn: { ra: { 3: 1.2, 2: 1.2, 1: 1.1, 0: 1.1 }, d: { 3: 3.2, 2: 3.0, 1: 0.44, 0: 0.43 }, er: { 3: 0.049, 2: 0.049, 1: 0.049, 0: 0.049 } },
        Uranus: { ra: { 3: 1.1, 2: 0.99, 1: 1.0, 0: 1.0 }, d: { 3: 1.1, 2: 1.1, 1: 0.35, 0: 0.35 }, er: { 3: 0.047, 2: 0.047, 1: 0.047, 0: 0.047 } },
        Neptune: { ra: { 3: 1.1, 2: 1.1, 1: 0.68, 0: 0.68 }, d: { 3: 1.4, 2: 1.4, 1: 0.27, 0: 0.27 }, er: { 3: 0.072, 2: 0.072, 1: 0.072, 0: 0.072 } }
    }

    LMF: { [key in 'L' | 'M' | 'F']: { C0: number, C1: number } } = {
        L: { C0: 218.316, C1: 13.176396 },
        M: { C0: 134.963, C1: 13.064993 },
        F: { C0: 93.272, C1: 13.229350 }
    }

    //#endregion

    //#endregion

    //#region constructor

    constructor(props: AstroProps) {
        navigator.geolocation.getCurrentPosition((position) => this.getProperties({ position, props }), () => this.getProperties({ props }));
    }

    //#endregion

    //#region private functions

    //#region Sun

    private getElevationOfObserver = (declination: number) => ((this.RHA.Earth.h0) / ((cos((declination) - (this.properties.latitude || 0))) * (cos((declination) + (this.properties.latitude || 0)))));

    private getSolarTransit = (meanSolarTime: number, solarMeanAnomaly: number, eclipticLongitude: number) => (2451545.0 + meanSolarTime + (this.JT.Earth.J1 * sin(solarMeanAnomaly)) + (this.JT.Earth.J2 * sin(2 * eclipticLongitude)));

    private getMeanSolarDay = (date: Date) => (julianDay(date) - 2451545 + (69.184 / 86400) - (((this.properties.longitude || 0) * this.JT.Earth.J3) / 360));

    private getSunRightAscensionDeclinationAndTransit = (date: Date) => {
        const meanSolarTime = this.getMeanSolarDay(date);
        const solarMeanAnomaly = (this.MA.Earth.M0 + this.MA.Earth.M1 * meanSolarTime) % 360;
        const equationOfCenter = (this.EC.Earth.C1 * sin(solarMeanAnomaly)) + (this.EC.Earth.C2 * sin(2 * solarMeanAnomaly)) + ((this.EC.Earth.C3 || 0) * sin(3 * solarMeanAnomaly));
        const eclipticLongitude = (solarMeanAnomaly + equationOfCenter + 180 + this.POE.Earth.Perihelion) % 360;
        const solarTransit = this.getSolarTransit(meanSolarTime, solarMeanAnomaly, eclipticLongitude);
        const AU = 1.00014 - (0.01671 * cos(solarMeanAnomaly)) - (0.00014 * cos(2 * solarMeanAnomaly));
        const obliquityOfEcliptic = this.POE.Earth.Obliquity - (0.0000004 * meanSolarTime);
        return { rightAscension: degToHour(atan((cos(obliquityOfEcliptic)) * tan(eclipticLongitude))), declination: asin(sin(eclipticLongitude) * sin(obliquityOfEcliptic)), solarTransit, AU };
    }

    private getSolarMeanHourAndTransit = (date: Date) => {
        const { declination, rightAscension, solarTransit, AU } = this.getSunRightAscensionDeclinationAndTransit(date);
        const elevationOfObserver = this.getElevationOfObserver(declination);
        return { meanHour: acos((sin(this.RHA.Earth.h0) - (sin(this.properties.latitude || 0) * sin(declination))) / ((cos(this.properties.latitude || 0) * cos(declination)))), solarTransit, elevationOfObserver, AU, declination: decimalToDeg(declination), rightAscension: decimalToDeg(rightAscension) };
    }

    private getSunRiseAndSet = (date: Date, utc: number) => {
        const { meanHour, solarTransit, elevationOfObserver, AU, declination, rightAscension } = this.getSolarMeanHourAndTransit(date);
        const transit = new Date(solarTransit);
        transit.setMinutes(utc);
        return {
            rise: gregorianDay((solarTransit - ((meanHour / 360) * this.JT.Earth.J3))),
            set: gregorianDay((solarTransit + ((meanHour / 360) * this.JT.Earth.J3))), elevationOfObserver, distance: AUToKM(AU), declination, rightAscension, transit: (transit.getHours() + (transit.getMinutes() / 60) + (transit.getSeconds() / 3600) + (transit.getMinutes() / 3600000))
        };
    }

    //#endregion

    //#region Moon

    private getHelioCentricCoordinatesFromSun = (distance: number, trueAnomaly: number, planet: Planets) => ({
        x: (distance * cos(this.MEC[planet]?.omg) * cos((this.MEC[planet]?.w || 0) + trueAnomaly)) - (cos(this.MEC[planet]?.i) * sin(this.MEC[planet]?.omg) * sin((this.MEC[planet]?.w || 0) + trueAnomaly)),
        y: (distance * sin(this.MEC[planet]?.omg) * cos((this.MEC[planet]?.w || 0) + trueAnomaly)) + (cos(this.MEC[planet]?.i) * cos(this.MEC[planet]?.omg) * sin((this.MEC[planet]?.w || 0) + trueAnomaly)),
        z: (distance * sin(this.MEC[planet]?.i) * sin((this.MEC[planet]?.w || 0) + trueAnomaly))
    });

    private getHelioCentricCoordinatesFromEarth = (helioCentricCoordinatesFromPlanet: Coordinates, distance: number, trueAnomaly: number) => {
        const helioCentricCoordinatesFromEarth = this.getHelioCentricCoordinatesFromSun(distance, trueAnomaly, Planets.Earth);
        return {
            x: helioCentricCoordinatesFromPlanet.x - helioCentricCoordinatesFromEarth.x,
            y: helioCentricCoordinatesFromPlanet.y - helioCentricCoordinatesFromEarth.y,
            z: helioCentricCoordinatesFromPlanet.z - helioCentricCoordinatesFromEarth.z
        };
    };

    private getDistanceAndCoordinates = (eccentricity: number, semiMajorAxis: number, trueAnomaly: number) => {
        const r = (semiMajorAxis * (1 - sq(eccentricity))) / (1 + (eccentricity * cos(trueAnomaly)));
        return ({
            r,
            x: r * cos(trueAnomaly),
            y: r * sin(trueAnomaly)
        });
    }

    private getLatitudeAndLongitude = (helioCentricCoordinatesFromEarth: Coordinates) => {
        const { x, y, z } = helioCentricCoordinatesFromEarth;
        return {
            latitude: degToRad(atan2(y, x)),
            longitude: asin(z / (sqrt(sq(x) + sq(y) + sq(z))))
        };
    }

    private getTrueAnomalyByMeanAnamoly = (eccentricity: number, meanAnomaly: number) => (
        meanAnomaly +
        (((2 * eccentricity) - (cb(eccentricity) / 4)) * sin(meanAnomaly)) +
        (((5 * sq(eccentricity)) / 4) * sin(2 * meanAnomaly)) +
        (((13 * cb(eccentricity)) / 12) * sin(3 * meanAnomaly))
    );

    private getTrueAnomaly = (eccentricity: number, time: number) => {
        const e = 2.2e-16;
        if (eccentricity >= 0 && eccentricity < 1) {
            const excess = abs(eccentricity - 1);
            const a = 1 / excess;
            let meanAnomaly = time * sqrt(this.GVT.Earth.g / cb(a));
            const sign = Math.sign(meanAnomaly);
            meanAnomaly = abs(meanAnomaly);
            while (meanAnomaly > 180) {
                meanAnomaly = meanAnomaly - (180 * floor(meanAnomaly / 180));
            }
            meanAnomaly *= sign;
            const perifocalAnomaly = meanAnomaly / sqrt(cb(excess));
            const w = sqrt((9 / 8) * (perifocalAnomaly / eccentricity));
            const u = cbrt(w + sqrt(sq(w) + (1 / cb(eccentricity))));
            const T = u - (1 / (u * eccentricity));
            const Es = T * sqrt(2 * excess);
            const s0 = eccentricity * sin(Es);
            const c0 = 1 - (eccentricity * cos(Es));
            const d0 = meanAnomaly - Es - s0;
            const de0 = d0 / c0;
            const E0 = Es + de0;
            const B0 = (2 * e * E0 * c0) / s0;
            let s1 = s0, c1 = c0, d1 = d0, de1 = de0, E1 = E0, B1 = B0;
            while (sq(de1) > abs(B1)) {
                s1 = eccentricity * sin(E1);
                c1 = 1 - (eccentricity * cos(E1));
                d1 = meanAnomaly - E1 - s1;
                de1 = d1 / c1;
                E1 = E1 + de1;
                B1 = (2 * e * E1 * c1) / s1;
            }
            const te = tan(E1 / 2);
            const tv = te * sqrt((1 + eccentricity) / (1 - eccentricity));
            return 2 * atan(tv);
        }

        return 0;
    }

    private getMeanLunarDay = (date: Date, planet: Planets = Planets.Earth) => (julianDay(date) - 2451545 + (69.184 / 86400) - (((this.properties.longitude || 0) * (this.JT[planet]?.J3 || 0)) / 360));

    private getMoonRightAscensionDeclinationAndTransit = (latitude: number, longitude: number, planet: Planets) => ({
        declination: asin((sin(latitude) * cos(this.POE[planet].Obliquity)) + (cos(latitude) * sin(this.POE[planet].Obliquity) * sin(longitude))),
        rightAscension: degToRad(atan2(((sin(longitude) * cos(this.POE[planet].Obliquity)) - (tan(latitude) * sin(this.POE[planet].Obliquity))), (cos(longitude))))
    });

    private getSiderealTime = (date: Date, meanTime: number) => ((this.Obs.Earth.theta0 + this.Obs.Earth.theta1 * meanTime - ((this.properties.longitude || 0) * this.JT.Earth.J3)) % 360);

    private getHeightAndAzimuth = (hourAngle: number, declination: number) => ({
        azimuth: degToRad(atan2(sin(hourAngle), ((cos(hourAngle) * sin(this.properties.latitude)) - (tan(declination) * cos(this.properties.latitude))))),
        height: asin((sin(declination) * sin(this.properties.latitude)) + (cos(declination) * cos(this.properties.latitude) * cos(hourAngle)))
    });

    private getElongation = (latitude: number, longitude: number, sunLongitude: number) => {
        return {
            e1: acos(cos(latitude) * cos(longitude - sunLongitude)),
            e2: longitude - sunLongitude
        };
    }

    private getLunarTransit = (rightAscension: number, meanAnomaly: number) => (((rightAscension + (this.properties.longitude || 0) - meanAnomaly) / 15) + (this.MEC.Earth?.omg || 0));

    private getLunarMeanHourAndTransit = (date: Date, planet: Planets) => {
        const meanSolarTime = this.getMeanSolarDay(date);
        const solarMeanAnomaly = (this.MA.Earth.M0 + this.MA.Earth.M1 * meanSolarTime) % 360;
        const equationOfCenter = (this.EC.Earth.C1 * sin(solarMeanAnomaly)) + (this.EC.Earth.C2 * sin(2 * solarMeanAnomaly)) + ((this.EC.Earth.C3 || 0) * sin(3 * solarMeanAnomaly));
        const eclipticLongitude = (solarMeanAnomaly + equationOfCenter + 180 + this.POE.Earth.Perihelion) % 360;

        const eccentricity = this.MEC.Earth?.e || 0;
        const semiMajorAxis = this.MEC.Earth?.a || 0;
        const meanTime = this.getMeanLunarDay(date);
        const meanAnomaly = (this.MA.Earth.M0 + this.MA.Earth.M1 * meanTime) % 360;
        // const trueAnomaly = this.getTrueAnomaly(eccentricity, date.getTime());
        const trueAnomaly = this.getTrueAnomalyByMeanAnamoly(eccentricity, meanAnomaly);
        const distance = this.getDistanceAndCoordinates(eccentricity, semiMajorAxis, trueAnomaly);
        let helioCentricCoordinatesFromPlanet = { x: 0, y: 0, z: 0 };
        if (planet !== 'Earth') {
            const eccentricityFromPlanet = this.MEC[planet]?.e || 0;
            const semiMajorAxisFromPlanet = this.MEC[planet]?.a || 0;
            const meanTimeFromPlanet = this.getMeanLunarDay(date, planet);
            const meanAnomalyFromPlanet = (this.MA[planet].M0 + this.MA[planet].M1 * meanTimeFromPlanet) % 360;
            // const trueAnomalyFromPlanet = this.getTrueAnomaly(eccentricityFromPlanet, date.getTime());
            const trueAnomalyFromPlanet = this.getTrueAnomalyByMeanAnamoly(eccentricityFromPlanet, meanAnomalyFromPlanet);
            const distanceFromPlanet = this.getDistanceAndCoordinates(eccentricityFromPlanet, semiMajorAxisFromPlanet, trueAnomalyFromPlanet);
            helioCentricCoordinatesFromPlanet = this.getHelioCentricCoordinatesFromSun(distanceFromPlanet.r, trueAnomalyFromPlanet, planet);
        }

        const helioCentricCoordinatesFromEarth = this.getHelioCentricCoordinatesFromEarth(helioCentricCoordinatesFromPlanet, distance.r, trueAnomaly);

        const { latitude, longitude } = this.getLatitudeAndLongitude(helioCentricCoordinatesFromEarth);
        const { declination, rightAscension } = this.getMoonRightAscensionDeclinationAndTransit(latitude, longitude, Planets.Earth);
        const elevationOfObserver = this.getElevationOfObserver(declination);
        const siderealTime = this.getSiderealTime(date, meanTime);
        const hourAngle = siderealTime - rightAscension;
        const { azimuth, height } = this.getHeightAndAzimuth(hourAngle, declination);
        const lunarTransit = this.getLunarTransit(rightAscension, meanAnomaly);
        const elongation = this.getElongation(latitude, longitude, eclipticLongitude);
        return { meanHour: acos((sin(this.RHA.Earth.h0) - (sin(this.properties.latitude || 0) * sin(declination))) / ((cos(this.properties.latitude || 0) * cos(declination)))), declination: decimalToDeg(declination), rightAscension: decimalToDeg(rightAscension), lunarTransit, elevationOfObserver, AU: distance.r, azimuth, height, elongation };
    }

    private getMoonRiseAndSet = (date: Date) => {
        const { meanHour, declination, rightAscension, lunarTransit, elevationOfObserver, AU, azimuth, height, elongation } = this.getLunarMeanHourAndTransit(date, Planets.Earth);
        const rise = new Date();
        rise.setHours((lunarTransit - meanHour) / 15);
        const set = new Date();
        set.setHours((lunarTransit + meanHour) / 15);
        return {
            rise,
            set,
            elevationOfObserver, distance: AUToKM(AU), declination, rightAscension, azimuth, height, transit: lunarTransit / 15, elongation
        };
    }

    //#endregion

    //#region common

    private callback = (date: Date) => {
        const dateAtStart = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        dateAtStart.setMinutes(-dateAtStart.getTimezoneOffset());

        const planetLocation = this.getSunRightAscensionDeclinationAndTransit(date);
        this.properties.planet = this.getSunRiseAndSet(dateAtStart, -dateAtStart.getTimezoneOffset());
        this.properties.planet.declination = decimalToDeg(planetLocation.declination);
        this.properties.planet.rightAscension = decimalToDeg(planetLocation.rightAscension);
        this.properties.planet.distance = AUToKM(planetLocation.AU);

        const lunarLocation = this.getMoonRiseAndSet(date);
        this.properties.lunar = this.getMoonRiseAndSet(dateAtStart);
        this.properties.lunar.declination = decimalToDeg(lunarLocation.declination.decimal);
        this.properties.lunar.rightAscension = decimalToDeg(lunarLocation.rightAscension.decimal);
        this.properties.lunar.distance = lunarLocation.distance;
    }

    private setProperties = () => {
        if (this.properties.date) {
            this.callback(this.properties.date);
        } else {
            this.callback(new Date(Date.now()));
        }
    }

    private getProperties = (props: { position?: any, props: AstroProps }) => {
        this.properties.latitude = TypeCheck.takeNextIfNull([props.props.latitude, props.position?.coords.latitude, 0]);
        this.properties.longitude = TypeCheck.takeNextIfNull([props.props.longitude, props.position?.coords.longitude, 0]);
        this.properties.date = TypeCheck.takeNextIfNull([props.props.date, new Date(Date.now())]);
        this.setProperties();
    }

    //#endregion

    //#endregion

}
