import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BaseComponent from '../helper/baseComponent';
import { ModalProps } from '../../dynamic/renderViewConstants';

// tslint:disable-next-line: no-any
export default class ScrollDialog extends BaseComponent<ModalProps> {

    render() {

        const handleClose = () => {
            this.dispatchStore({ modalOpen: false });
        };

        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={handleClose}
                    scroll={'paper'}
                    aria-labelledby={this.props.id}
                    aria-describedby={`${this.props.id}-description`}
                >
                    <DialogTitle id={this.props.id}>{this.props.title}</DialogTitle>
                    <DialogContent
                    // dividers={this.state.scroll === 'paper'}
                    >
                        <DialogContentText
                            id={`${this.props.id}-description`}
                            // ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {this.props.content}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.modalCloseCallback || handleClose} color="primary">
                            {this.props.okButtonText || 'Ok'}
                        </Button>
                        {
                            this.props.showCancelButton
                                ?
                                <Button onClick={handleClose} color="primary">
                                    {this.props.cancelButtonText || 'Cancel'}
                                </Button>
                                :
                                ''
                        }
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}