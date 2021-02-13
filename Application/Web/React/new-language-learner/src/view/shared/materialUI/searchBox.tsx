import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import BaseComponent from '../helper/baseComponent';

export default class SearchBox extends BaseComponent {
    render() {
        return (
            <Paper>
                <IconButton aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider />
                <IconButton color="primary" aria-label="directions">
                    <DirectionsIcon />
                </IconButton>
            </Paper>
        );
    }
}