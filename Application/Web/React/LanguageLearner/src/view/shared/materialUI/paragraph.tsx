import React from 'react';
import BaseComponent from '../helper/baseComponent';
import { Button } from '@material-ui/core';
import { ParagraphProps } from './materialConstants';
import RichTextbox from '../joditrte/richTextbox';

export default class Paragraph extends BaseComponent<ParagraphProps> {

    openRTEModal = (props: ParagraphProps) => {
        this.dispatchStore({
            modalTitle: `Set ${props.label}`,
            modalContent: this.getEditor(props.name),
            modalOpen: true,
            showCancelButton: true,
            fullWidth: true,
            cancelButtonText: 'Close',
            okButtonText: 'Save',
            modalCloseCallback: (event: React.MouseEvent<
                HTMLAnchorElement,
                MouseEvent
            >) => this.saveValue(props.name)
        });
    }

    getEditor = (name: string) => {
        return (
            <RichTextbox
                name={name}
            />
        );
    }

    saveValue = (name: string) => {
        var rteValue = this.getState(name);
        var rightWindow = this.getState('rightWindow') || {};
        rightWindow.label = rteValue;
        this.dispatchStore({
            modalOpen: false,
            fullWidth: false,
            modalContent: '',
            rightWindow: rightWindow
        });
    }

    render() {
        return (
            this.props.disabled
                ?
                <div style={{padding: '10px', color: 'rgba(0, 0, 0, 0.38)'}} dangerouslySetInnerHTML={{ __html: this.props.label }} />
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