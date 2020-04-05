import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import BaseComponent from '../helper/baseComponent';
import { SelectProps } from './materialConstants';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names: Array<{ [x: string]: string }> = [
    { '': '---Select---' },
    { 'textbox': 'Text Box' },
    { 'Oliver Hansen': 'Oliver Hansen' },
    { 'Van Henry': 'Van Henry' },
    { 'April Tucker': 'April Tucker' },
    { 'Ralph Hubbard': 'Ralph Hubbard' },
    { 'Omar Alexander': 'Omar Alexander' },
    { 'Carlos Abbott': 'Carlos Abbott' },
    { 'Miriam Wagner': 'Miriam Wagner' },
    { 'Bradley Wilkerson': 'Bradley Wilkerson' },
    { 'Virginia Andrews': 'Virginia Andrews' },
    { 'Kelly Snyder': 'Kelly Snyder' }
];

export default class Dropdown extends BaseComponent<SelectProps> {

    render() {
        // const handleChange = (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
        //     this.dispatchStore({ [event.target.name || '']: event.target.value });
        // };
        var options = this.props.options || names || [] as Array<{ [x: string]: string }>;

        return (
            <div style={{ width: '100%', ...BaseComponent.getTheme(this.props.isDarkTheme, 'control') }}>
                <FormControl variant="standard" style={{ width: '100%', ...BaseComponent.getTheme(this.props.isDarkTheme, 'control') }}>
                    <InputLabel htmlFor={this.props.id} id={`${this.props.id}-label`}>{this.props.label}</InputLabel>
                    <Select
                        color={this.props.color}
                        disabled={this.props.disabled}
                        id={`${this.props.id}`}
                        multiple={this.props.isMultiSelect}
                        {...this.setAttributes(this.props, undefined, undefined, this.props.isMultiSelect)}
                        {
                        ...this.props.isMultiSelect
                            ?
                            {
                                'renderValue': (selected) => (
                                    <div>
                                        {
                                            (selected as string[]).map(value => (
                                                <Chip key={value} label={value} />
                                            ))
                                        }
                                    </div>
                                )
                            }
                            :
                            ''
                        }
                        MenuProps={MenuProps}
                    >
                        {
                            options.map(name => {
                                var currentName = Object.entries(name)[0];
                                return (
                                    <MenuItem
                                        key={currentName[0]}
                                        value={currentName[0]}
                                    >
                                        {
                                            this.props.isMultiSelect
                                                ?
                                                <Checkbox
                                                    checked={
                                                        this.getState(this.props.id)?.indexOf(currentName[0])
                                                        >
                                                        -1
                                                    }
                                                />
                                                :
                                                ''
                                        }
                                        <ListItemText primary={currentName[1]} />
                                    </MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>
            </div>
        );
    }
}