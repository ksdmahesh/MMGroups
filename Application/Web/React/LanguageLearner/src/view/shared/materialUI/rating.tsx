import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BaseComponent from '../helper/baseComponent';

const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

export default class HoverRating extends BaseComponent {
    constructor(props: {}) {
        super(props);
        this.state = {
            hover: -1
        };
    }
    render() {
        const value = 2;
        return (
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Side</Typography>
                <div>
                    <Rating
                        name="hover-side"
                        value={value}
                        precision={0.5}
                        onChangeActive={(event, newHover) => {
                            this.setState({ hover: newHover });
                        }}
                    />
                    <Box ml={2}>{labels[this.state.hover !== -1 ? this.state.hover : value]}</Box>
                </div>
            </Box>
        );
    }
}
