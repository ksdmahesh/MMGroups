import React from 'react';
import HtmlTooltip from '@material-ui/core/Tooltip';
import { Typography, Button } from '@material-ui/core';
import BaseComponent from '../helper/baseComponent';

export default class ToolTip extends BaseComponent {
    render() {
        return (
            <HtmlTooltip
                title={
                    <React.Fragment>
                        <Typography color="inherit">Tooltip with HTML</Typography>
                        <em>{'And here\'s'}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                        {'It\'s very engaging. Right?'}
                    </React.Fragment>
                }
            >
                <Button>HTML</Button>
            </HtmlTooltip>
        );
    }
}