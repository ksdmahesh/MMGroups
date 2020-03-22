import React from 'react';
import { Snackbar } from '@material-ui/core';
// import { TransitionProps } from '@material-ui/core/transitions/transition';
import { SnackbarProvider } from 'notistack';
import BaseComponent from '../helper/baseComponent';

export default class BackDrop extends BaseComponent {

    constructor(props: {}) {
        super(props);
        this.state = {
            open: false,
            transition: undefined
        };
    }
    render() {
        // const TransitionLeft = (props: TransitionProps) => {
        //     return <Slide {...props} direction="left" />;
        // }

        // const TransitionUp = (props: TransitionProps) => {
        //     return <Slide {...props} direction="up" />;
        // }

        // const TransitionRight = (props: TransitionProps) => {
        //     return <Slide {...props} direction="right" />;
        // }

        // const TransitionDown = (props: TransitionProps) => {
        //     return <Slide {...props} direction="down" />;
        // }
        // const SlideTransition = (props: TransitionProps) => {
        //     return <Slide {...props} direction="up" />;
        // }
        // const GrowTransition = (props: TransitionProps) => {
        //     return <Grow {...props} />;
        // }
        // const handleClick = (Transition: React.ComponentType<TransitionProps>) => () => {
        //     this.setState({ transition: () => Transition });
        //     this.setState({ open: true });
        // };

        const handleClose = () => {
            this.setState({ open: false });
        };
        return (
            <SnackbarProvider maxSnack={3}>
                <Snackbar
                    open={this.state.open}
                    onClose={handleClose}
                    TransitionComponent={this.state.transition}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">I love snacks</span>}
                />
            </SnackbarProvider>
        );
    }
}