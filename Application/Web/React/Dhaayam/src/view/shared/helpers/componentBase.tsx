import * as React from 'react';
import { Dispatch } from '../../../constants/default';
import TypeCheck, { HelperClass } from './typeCheck';
import bg from '../../../content/images/Chess_l45.svg';
import cbg from '../../../content/images/Chess_xxl45.svg';

type BoardGames = 'Dhayam' | 'Pachika' | 'Sarpa' | 'AstaChemmaSmall' | 'AstaChemmaBig' | 'AstaPada' | 'Pallanguzhi' | 'AduPuli';

export default class ComponentBase<T = any, U = any> extends React.Component<T, U> {

    dispatch!: Dispatch;

    store: any;

    history: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    constructor(props: any) {
        super(props);
        if (!this.dispatch) {
            this.dispatch = props.dispatch;
            this.store = { getState: props.getState };
        }
    }

    clone(data: any) {
        return JSON.parse(JSON.stringify(data));
    }

    dispatchStore = (data: {}, location: string = '', type: string = 'dispatch') => {
        if (location) {
            this.dispatch({ type: type, data: this.setObjectBasedOnPath(location, data) });
        } else {
            this.dispatch({ type: type, data: data });
        }
    }

    getState = (name?: string, location?: string) => {
        if (location) {
            return this.getValueFromObjectPath(location);
        } else if (name) {
            return this.store.getState()[name];
        } else {
            return this.store.getState();
        }
    }

    getValueFromObjectPath = (key: string) => {
        // return  getValueFromPath;
        // let segments = key.split('.');
        let segments = key.split(/\.|\[|\]/igm).filter((innerKey) => innerKey);

        // tslint:disable-next-line:no-any
        var value: any = this.store.getState();
        for (const segment of segments) {
            if (segment === '') {
                continue;
            }
            if (!value) {
                value = undefined;
                break;
            }

            value = value[segment];
        }
        return value;
    }

    // tslint:disable-next-line:no-any
    setObjectBasedOnPath = (key: string, data: any): object => {
        let root = this.store.getState();
        // let segments = key.split('.');
        let segments = key.split(/\.|\[|\]/igm).filter((innerKey) => innerKey);

        var value = root;
        var segment;
        for (let index = 0; index < segments.length - 1; index++) {
            segment = segments[index];
            if (segment === '') {
                continue;
            }
            if (!value[segment]) {
                if (/^\d+$/igm.test(segments[index + 1])) {
                    value[segment] = [];
                } else {
                    value[segment] = {};
                }
            }

            value = value[segment];
        }

        segment = segments[segments.length - 1];

        if (segment) {
            if (/^\d+$/igm.test(segment)) {
                value[segment] = { ...value[segment], ...data };
            } else {
                value[segment] = (HelperClass.containsKey(data, segment))
                    ?
                    data[segment]
                    :
                    { ...value[segment], ...data };
                // HelperClass.containsKey(data, segment) ? data[segment] : data;
            }
            value = value[segment];
        } else if (TypeCheck.isObject(data)) {
            if (!value) {
                value = {};
            }
            for (const keys in data) {
                if (data.hasOwnProperty(keys)) {
                    value[keys] = data[keys];
                }
            }
        }

        return root;
    }

    getDataFromEvent = (e: any, isCheckbox: boolean = false) => {
        if (isCheckbox) {
            return e.currentTarget.checked;
        }
        return e.currentTarget.value;
    }

    // tslint:disable-next-line: no-any
    setAttributes = (control: any, callback?: any, isCheckbox?: boolean, isArray?: boolean) => {
        if (callback) {
            return callback;
        }

        var name = control.name;
        if (control.location) {
            name = control.location.substr(control.location.lastIndexOf('.') + 1);
        }

        if (isCheckbox) {
            return {
                checked: this.getState(name, control.location) || control.checked || false,
                // tslint:disable-next-line: no-any
                onChange: (e: any) => this.dispatchStore(
                    {
                        [name || '']: this.getDataFromEvent(e, isCheckbox)
                    },
                    control.location
                ),
                name: name
            };
        }
        return {
            value: this.getState(name, control.location) || control.value || (isArray ? [] : ''),
            onChange: (control.disabled
                ?
                // tslint:disable-next-line: no-any
                (e: any) => { /** */ }
                :
                // tslint:disable-next-line: no-any
                (e: any) => this.dispatchStore(
                    {
                        [name || '']: this.getDataFromEvent(e)
                    },
                    control.location
                )
            ),
            name: name
        };
    }

    generateRandomNumbers = (count: number) => {
        return (
            Math.floor((Math.random() * count))
        );
    }

    getNumbers = () => {
        return [[0, 1, 2, 3][this.generateRandomNumbers(4)], [0, 1, 2, 3][this.generateRandomNumbers(4)]];
    }

    generateTable = (type: BoardGames) => {
        switch (type) {
            case 'Dhayam':
                return this.createBigGame();
            case 'Pachika':
                return this.createSmallGame();
            case 'Sarpa':
                return this.createSarpaGame();
            case 'AstaChemmaSmall':
                return this.createAstaChemmaSmallGame();
            case 'AstaChemmaBig':
                return this.createAstaChemmaBigGame();
            case 'AstaPada':
                return this.createAstaPadaGame();
            case 'Pallanguzhi':
                return this.createPallanguzhiGame();
            case 'AduPuli':
                return this.createAduPuliGame();
            default:
                return '';
        }
    }

    setStarBig = (trIndex: number, td: number) => {
        return (
            (
                ((trIndex === 0 || trIndex === 6 || trIndex === 12 || trIndex === 18)
                    && (td === 7 || td === 1)
                )
                ||
                (
                    (trIndex === 7 && td === 6)
                    ||
                    (trIndex === 14 && td === 3)
                    ||
                    (trIndex === 15 && td === 6)
                )
            )
        );
    }

    setStarSmall = (trIndex: number, td: number) => {
        return (
            (
                ((trIndex === 0 || trIndex === 12) && td === 7)
                ||
                ((trIndex === 4 || trIndex === 8) && (td === 5 || td === 7))
                ||
                (trIndex === 6 && (td === 1 || td === 5))
            )
        );
    }

    setStarSmallAsta = (trIndex: number, td: number) => {
        return (
            (
                ((trIndex === 0 || trIndex === 4) && td === 2)
                ||
                (trIndex === 2 && (td === 0 || td === 2 || td === 4))
            )
        );
    }

    visibleBig = (tr: number, td: number) => {
        return ((
            (tr === 0 && td === 7)
            || tr === 1
            || (tr === 2 && (td === 1 || td === 6 || td === 7))
            || (tr === 3 && (td === 1 || td === 7))
            || (tr === 4 && td !== 2)
            || (tr === 5 && (td === 1 || td === 3))
            || (tr === 6 && (td === 1 || td === 3 || td === 6))
            || (tr === 7 && (td !== 2 && td !== 7))
            || (tr === 8 && td === 1)
        ));
    }

    visibleSmall = (tr: number, td: number) => {
        return ((
            (tr === 0 && (td === 6 || td === 7))
            || (tr === 1 && (td === 5 || td === 6 || td === 7))
            || (tr === 2 && (td !== 6 && td !== 7))
        ));
    }

    countHistory = () => {
        return (
            <span style={{
                // justifyContent: 'space-between',
                // display: 'flex',
                // alignItems: 'stretch',
                // position: 'absolute',
                width: 87
            }}>
                {this.history.map(item => (
                    <b
                        style={{
                            backgroundColor: 'red',
                            padding: 5,
                            margin: 5
                        }}
                    >{item}</b>
                ))}
            </span>
        );
    }

    innerTable = (position: 'left' | 'right') => {
        let top = position === 'left'
            ?
            ((-17 * 6) + 17)
            :
            17;
        return (
            <td colSpan={4} rowSpan={5}>
                <table
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        top: 0,
                        left: 0
                    }}
                >
                    <tbody>
                        <tr>
                            {new Array(6).fill('').map((a, b) => (
                                position === 'left'
                                    ?
                                    <td
                                        className={(b === 0) ? 'malai' : 'block'}
                                        style={{
                                            border: '1px solid black',
                                            position: 'relative',
                                            ...(
                                                b === 0
                                                    ?
                                                    {
                                                        top: top + 9,
                                                        // backgroundColor: 'red'
                                                    }
                                                    :
                                                    {
                                                        transform: 'skewY(10deg)',
                                                        top: top += 17
                                                    }
                                            )
                                        }}></td>
                                    :
                                    <td
                                        className={(b === 5) ? 'malai' : 'block'}
                                        style={{
                                            border: '1px solid black',
                                            position: 'relative',
                                            ...(
                                                b === 5
                                                    ?
                                                    {
                                                        top: top - 9,
                                                        // backgroundColor: 'red'
                                                    }
                                                    :
                                                    {
                                                        transform: 'skewY(-10deg)',
                                                        top: top -= 17
                                                    }
                                            )
                                        }}
                                    ></td>
                            ))}
                        </tr>
                        {new Array(6).fill('').map((a, b) => (
                            <tr>
                                {
                                    position === 'left'
                                        ?
                                        <>
                                            <td
                                                className={(b === 5) ? 'malai' : 'block'}
                                                style={{
                                                    border: '1px solid black',
                                                    position: 'relative',
                                                    top: -76,
                                                    ...(
                                                        b === 5
                                                            ?
                                                            {
                                                                // backgroundColor: 'red'
                                                            }
                                                            :
                                                            {}
                                                    )
                                                }} ></td>
                                            <td colSpan={5} ></td>
                                        </>
                                        :
                                        <>
                                            <td colSpan={5} ></td>
                                            <td
                                                className={b === 5 ? 'malai' : 'block'}
                                                style={{
                                                    border: '1px solid black',
                                                    position: 'relative',
                                                    top: -76,
                                                    ...(
                                                        b === 5
                                                            ?
                                                            {
                                                                // backgroundColor: 'red'
                                                            }
                                                            :
                                                            {}
                                                    )
                                                }}></td>
                                        </>
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </td>
        );
    }

    createBigGame = () => {
        let isPlayer1 = this.getState('isPlayer1');
        return (
            <table
                className={'board'}
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    height: '100%',
                    width: '100%',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    // backgroundImage: 'url(/static/media/vimanam.b60e787f.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '1400px 660px'
                }}
            >
                <tbody>
                    <tr>
                        {new Array(13).fill('').map((a, b) => (
                            <td
                                className={(b === 0 || b === 6 || b === 12) ? 'malai' : 'block'}
                                style={{
                                    border: '1px solid black',
                                    ...(
                                        b === 0 || b === 6 || b === 12
                                            ?
                                            {
                                                // backgroundColor: 'red'
                                            }
                                            :
                                            {}
                                    )
                                }}
                            ></td>
                        ))}
                    </tr>
                    {new Array(5).fill('').map((a, b) => (
                        <tr>
                            {
                                b === 0
                                    ?
                                    <>
                                        <td colSpan={6} rowSpan={5}>
                                            <div
                                                className={'player1Circle'}
                                                style={{
                                                    borderRadius: '50%',
                                                    border: '1px solid black',
                                                    width: '40%',
                                                    height: '80%',
                                                    left: '30%',
                                                    position: 'relative',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                            >{''}
                                            </div>
                                        </td>
                                        <td className={'block'} style={{ border: '1px solid black' }}></td>
                                        <td colSpan={6} rowSpan={5}>
                                            <div
                                                className={'player2Circle'}
                                                style={{
                                                    borderRadius: '50%',
                                                    border: '1px solid black',
                                                    width: '40%',
                                                    height: '80%',
                                                    left: '30%',
                                                    position: 'relative'
                                                }}
                                            >
                                                {''}
                                            </div>
                                        </td>
                                    </>
                                    :
                                    <td className={'block'} style={{ border: '1px solid black' }}></td>
                            }
                        </tr>
                    ))}
                    <tr>
                        {new Array(13).fill('').map((a, b) => (
                            <td
                                className={(b === 0 || b === 6 || b === 12) ? 'malai' : 'block'}
                                style={{
                                    border: '1px solid black',
                                    ...(
                                        b === 0 || b === 6 || b === 12
                                            ?
                                            {
                                                // backgroundColor: 'red'
                                            }
                                            :
                                            {}
                                    )
                                }}
                            ></td>
                        ))}
                    </tr>
                    <tr>
                        <td className={'block'} style={{ border: '1px solid black' }}></td>
                        <td rowSpan={6}>{isPlayer1 ? this.countHistory() : ''}</td>
                        <td colSpan={3}></td>
                        <td
                            className={'malai'}
                            style={{
                                border: '1px solid black',
                                // backgroundColor: 'red'
                            }}
                        ></td>
                        <td className={'block'} style={{ border: '1px solid black' }}></td>
                        <td
                            className={'malai'}
                            style={{
                                border: '1px solid black',
                                // backgroundColor: 'red'
                            }}
                        ></td>
                        <td colSpan={3}></td>
                        <td rowSpan={6}>{isPlayer1 ? '' : this.countHistory()}</td>
                        <td className={'block'} style={{ border: '1px solid black' }}></td>
                    </tr>
                    {new Array(4).fill('').map((a, b) => (
                        <tr>
                            <td className={'block'} style={{ border: '1px solid black' }}></td>
                            {/* <td></td> */}
                            <td colSpan={3}></td>
                            <td></td>
                            <td className={'block'} style={{ border: '1px solid black' }}></td>
                            <td></td>
                            <td colSpan={3}></td>
                            {/* <td></td> */}
                            <td className={'block'} style={{ border: '1px solid black' }}></td>
                        </tr>
                    ))}
                    <tr>
                        <td
                            className={'malai'}
                            style={{
                                border: '1px solid black',
                                // backgroundColor: 'red'
                            }}
                        ></td>
                        {/* <td></td> */}
                        {this.innerTable('left')}
                        <td
                            className={'malai'}
                            style={{
                                border: '1px solid black',
                                // backgroundColor: 'red'
                            }}
                        ></td>
                        {this.innerTable('right')}
                        {/* <td></td> */}
                        <td
                            className={'malai'}
                            style={{
                                border: '1px solid black',
                                // backgroundColor: 'red'
                            }}
                        ></td>
                    </tr>
                    {new Array(5).fill('').map((a, b) => (
                        <tr>
                            <td className={'block'} style={{ border: '1px solid black' }}></td>
                            {
                                b === 0
                                    ?
                                    <>
                                        <td rowSpan={5} colSpan={11}>
                                            <div
                                                className={'winnerCircle'}
                                                style={{
                                                    borderRadius: '50%',
                                                    border: '1px solid black',
                                                    width: '20%',
                                                    height: '80%',
                                                    left: '40%',
                                                    position: 'relative'
                                                }}
                                            >
                                                {''}
                                            </div>
                                        </td>
                                    </>
                                    :
                                    <></>
                            }
                            <td className={'block'} style={{ border: '1px solid black' }}></td>
                        </tr>
                    ))}
                    <tr>
                        {new Array(13).fill('').map((a, b) => (
                            <td
                                className={(b === 0 || b === 6 || b === 12) ? 'malai' : 'block'}
                                style={{
                                    border: '1px solid black',
                                    ...(
                                        b === 0 || b === 6 || b === 12
                                            ?
                                            {
                                                // backgroundColor: 'red'
                                            }
                                            :
                                            {}
                                    )
                                }}
                            ></td>
                        ))}
                    </tr>
                </tbody>
            </table>
        );
    }

    createSmallGame = () => {
        return (
            <table style={{ marginLeft: 'auto', marginRight: 'auto', height: '100%', width: '100%', position: 'fixed', top: 0, left: 0 }}>
                <tbody>
                    {
                        [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0].map((tr, trIndex) => (
                            <tr
                                key={`${tr}-${trIndex}`}
                            >
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1].map((td, tdIndex) => (
                                        <td
                                            key={`${tr}-${trIndex}-${td}-${tdIndex}`}
                                            style={{
                                                ...(this.visibleSmall(tr, td)
                                                    ?
                                                    {
                                                        border: '1px solid black'
                                                    }
                                                    :
                                                    {

                                                    }
                                                ),
                                                ...(
                                                    this.setStarSmall(trIndex, td)
                                                        ?
                                                        {
                                                            backgroundColor: 'red'
                                                        }
                                                        :
                                                        {}
                                                )
                                            }}
                                        >{this.visibleSmall(tr, td) ? td : ''}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    createSarpaGame = () => {
        return (
            <table style={{ marginLeft: 'auto', marginRight: 'auto', height: '100%', width: '100%', position: 'fixed', top: 0, left: 0 }}>
                <tbody>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((tr, trIndex) => (
                            <tr
                                key={`${tr}-${trIndex}`}
                            >
                                {
                                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((td, tdIndex) => (
                                        <td
                                            key={`${tr}-${trIndex}-${td}-${tdIndex}`}
                                            style={{ border: '1px solid black', textAlign: 'center' }}
                                        >
                                            {td}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    createAstaChemmaSmallGame = () => {
        return (
            <table style={{ marginLeft: 'auto', marginRight: 'auto', height: '100%', width: '100%', position: 'fixed', top: 0, left: 0 }}>
                <tbody>
                    {
                        [0, 1, 2, 3, 4].map((tr, trIndex) => (
                            <tr
                                key={`${tr}-${trIndex}`}
                            >
                                {
                                    [0, 1, 2, 3, 4].map((td, tdIndex) => (
                                        <td
                                            key={`${tr}-${trIndex}-${td}-${tdIndex}`}
                                            style={{
                                                border: '1px solid black',
                                                textAlign: 'center',
                                                ...(
                                                    this.setStarSmallAsta(trIndex, td)
                                                        ?
                                                        {
                                                            backgroundColor: 'red'
                                                        }
                                                        :
                                                        {}
                                                )
                                            }}
                                        >
                                            {td}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    createAstaChemmaBigGame = () => {
        return (
            <>
                <img src={bg} />
                <img src={cbg} />
            </>
        );
    }

    createAstaPadaGame = () => {

    }

    createPallanguzhiGame = () => {

    }

    createAduPuliGame = () => {

    }

}