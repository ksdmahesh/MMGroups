import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { Button } from '@material-ui/core';
import { ParagraphProps } from './materialConstants';
import RichTextbox from '../joditrte/richTextbox';

export default class Paragraph extends BaseComponent<ParagraphProps> {

    openRTEModal = (props: ParagraphProps) => {
        this.dispatchStore({
            modalTitle: `Set ${props.label}`,
            modalContent: this.getEditor(props.id),
            modalOpen: true,
            showCancelButton: true,
            fullWidth: true,
            cancelButtonText: 'Close',
            okButtonText: 'Save',
            modalCloseCallback: (event: React.MouseEvent<
                HTMLAnchorElement,
                MouseEvent
            >) => this.saveValue(props.id)
        });
    }

    getEditor = (id: string) => {
        return (
            <RichTextbox
                id={id}
            />
        );
    }

    saveValue = (id: string) => {
        var rteValue = this.getState(id);
        var bottomWindow = this.getState('bottomWindow') || {};
        bottomWindow.label = rteValue;
        this.dispatchStore({
            modalOpen: false,
            fullWidth: false,
            modalContent: '',
            bottomWindow: bottomWindow
        });
    }

    render() {
        return (
            this.props.disabled
                ?
                <div style={{ padding: '10px', color: 'rgba(0, 0, 0, 0.38)' }} dangerouslySetInnerHTML={{ __html: this.props.label }} />
                :
                <Button
                    fullWidth={true}
                    disabled={this.props.disabled}
                    id={this.props.id}
                    name={this.props.name}
                    onClick={() => this.openRTEModal(this.props)}
                >
                    {`Set ${this.props.label} in RTE`}
                </Button>
        );
    }
}