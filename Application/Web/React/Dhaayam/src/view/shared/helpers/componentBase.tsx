import * as React from 'react';
import { Dispatch } from '../../../constants/default';
import TypeCheck, { HelperClass } from './typeCheck';

type BoardGames = 'Dhayam' | 'Pachika' | 'Sarpa' | 'AstaChemma' | 'AstaPada' | 'Pallanguzhi' | 'AduPuli';

export default class ComponentBase<T = any, U = any> extends React.Component<T, U> {

    dispatch!: Dispatch;

    store: any;

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
        return `${[0, 1, 2, 3][this.generateRandomNumbers(4)]}, ${[0, 1, 2, 3][this.generateRandomNumbers(4)]}`;
    }

    generateTable = (type: BoardGames) => {
        switch (type) {
            case 'Dhayam':
                return this.createBigGame();
            case 'Pachika':
                return this.createSmallGame();
            case 'Sarpa':
                return this.createSarpaGame();
            case 'AstaChemma':
                return this.createAstaChemmaGame();
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

    createBigGame = () => {

    }

    createSmallGame = () => {

    }

    createSarpaGame = () => {

    }

    createAstaChemmaGame = () => {

    }

    createAstaPadaGame = () => {

    }

    createPallanguzhiGame = () => {

    }

    createAduPuliGame = () => {

    }

}