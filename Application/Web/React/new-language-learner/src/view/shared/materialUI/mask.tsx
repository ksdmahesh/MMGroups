import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import BaseComponent from '../helper/baseComponent';

interface TextMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            // tslint:disable-next-line: no-any
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask={true}
        />
    );
}

interface NumberFormatCustomProps {
    inputRef: (instance: NumberFormat | null) => void;
    onChange: (event: { target: { value: string } }) => void;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            // tslint:disable-next-line: no-any
            onValueChange={(values: any) => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator={true}
            isNumericString={true}
            prefix="$"
        />
    );
}

interface State {
    textmask: string;
    numberformat: string;
}

// tslint:disable-next-line: no-any
export default class InputMask extends BaseComponent {
    // tslint:disable-next-line: no-any
    constructor(props: any) {
        super(props);
        this.state = {
            values: {
                textmask: '(1  )    -    ',
                numberformat: '1320'
            }
        };
    }

    render() {
        const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({
                ...this.state.values,
                [name]: event.target.value,
            });
        };

        return (
            <div>
                <FormControl>
                    <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
                    <Input
                        value={this.state.values.textmask}
                        onChange={handleChange('textmask')}
                        id="formatted-text-mask-input"
                        // tslint:disable-next-line: no-any
                        inputComponent={TextMaskCustom as any}
                    />
                </FormControl>
                <TextField
                    label="react-number-format"
                    value={this.state.values.numberformat}
                    onChange={handleChange('numberformat')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        // tslint:disable-next-line: no-any
                        inputComponent: NumberFormatCustom as any,
                    }}
                />
            </div>
        );
    }
}