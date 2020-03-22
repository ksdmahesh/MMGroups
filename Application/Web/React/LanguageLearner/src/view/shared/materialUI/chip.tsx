import React from 'react';
import { Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import BaseComponent from '../helper/baseComponent';

export default class Chips extends BaseComponent {
    render() {
        const handleDelete = () => {
            // 
        };

        // const handleClick = () => {
        //     console.info('You clicked the Chip.');
        // };
        return (
            <Chip color="secondary" deleteIcon={<DoneIcon />} onDelete={handleDelete} />
        );
    }
}
