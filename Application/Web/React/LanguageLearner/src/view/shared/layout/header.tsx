import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import BaseComponent from '../helper/baseComponent';
import { DataProps, HeaderProps } from '../../dynamic/renderViewConstants';
import FileUpload from '../materialUI/fileUpload';
import { buttonColor } from '../materialUI/materialConstants';

export default class Header extends BaseComponent<HeaderProps> {

    readAllText = (event: ProgressEvent<FileReader>) => {
        var result = event.target?.result;
        if (result) {
            this.setInitializeValues(JSON.parse(result + ''), {
                modalTitle: 'Import JSON',
                modalContent: 'Importing Done',
                modalOpen: true,
                showCancelButton: false,
                modalCloseCallback: undefined
            });
        }
    }

    fileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        var files = event.target.files;
        if (files?.length) {
            var file = files[0];
            var reader = new FileReader();
            reader.onload = this.readAllText;
            reader.readAsText(file);
        }

        event.target.value = '';

    }

    exportFile = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        var state = this.getState();
        var formdata: DataProps = state.formdata;
        var exceptionalStepsId: Array<string> = state.exceptionalStepsId;
        formdata.steps = formdata.steps.filter(item => exceptionalStepsId.indexOf(item.id) === -1);
        // tslint:disable-next-line: no-console
        console.log(formdata);
        return formdata;
    }

    render() {
        const onClick = () => {
            this.dispatchStore({ rightSideBar: true });
        };
        return (
            <div style={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar
                        style={{ minHeight: '48px' }}
                    >
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            {'News'}
                        </Typography>
                        <FileUpload
                            color={buttonColor.inherit}
                            name={'uploadFile'}
                            id={'uploadFile'}
                            onChange={this.fileUpload}
                            label={'Import JSON'}
                        />
                        <Button color="inherit" onClick={this.exportFile}>{'Export JSON'}</Button>
                        <IconButton
                            onClick={onClick}
                            edge={false}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
