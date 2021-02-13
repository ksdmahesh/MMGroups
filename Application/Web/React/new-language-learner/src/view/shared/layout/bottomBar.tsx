import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import BaseComponent from '../helper/baseComponent';
import { IconButton, Typography, Fab, Grid } from '@material-ui/core';
import RenderBottomBar from './renderBottomBar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { v4 as uuid } from 'uuid';
import { HelperClass } from '../helper/typeCheck';
import { Notice } from '../dnd/dndConstants';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MoreVertIcon from '@material-ui/icons/MoreVert';

var isDisabled = false;
var isVisible = false;

export default class BottomBar extends BaseComponent {

    handleDrawerClose = () => {
        this.dispatchStore({ bottomSideBar: false, bottomWindow: {} });
    }

    updatePropertyToControl = () => {
        var currentState = this.getState();
        var result: any = currentState.propertyWindow;

        var stepIndex: number = result.stepIndex;

        var currentStep: number = currentState.currentStep;

        result.control = { ...result.control, ...currentState.bottomWindow };

        result.control.id = uuid();
        var raised: string = currentState.raised;
        var isChildCalled: boolean = currentState.isChildCalled;

        var obj = currentState.formdata;
        for (let index = 0; index < this.DataHeader.length; index++) {
            const element = this.DataHeader[index];
            const currentElementIndex: number = result[this.DataIndex[index]];
            const nextElementIndex: number = result[this.DataIndex[index + 1]];
            if (index === this.DataHeader.length - 1) {
                obj[element][currentElementIndex] = {
                    ...obj[element][currentElementIndex],
                    ...result.control
                };
                raised = this.DataHeader[index] + result.control.id + result[this.DataIndex[index]];
            }
            if (currentElementIndex === -1) {
                currentStep = obj[element].length - 1;
                raised = '';
                isChildCalled = false;
                obj[element].splice(currentStep, 0, { ...{ [this.DataHeader[index + 1]]: [] }, ...result.control });
                stepIndex = currentStep;
                raised = this.DataHeader[index] + result.control.id + (stepIndex);
                break;
            }
            if (nextElementIndex === -1) {
                obj = obj[element];
                obj[currentElementIndex][this.DataHeader[index + 1]].push({ ...{ [this.DataHeader[index + 2]]: [] }, ...result.control });

                result[this.DataIndex[index + 1]] = result[this.DataIndex[index + 1]] + 1;
                result[this.DataIndex[index + 2]] = -2;
                raised = this.DataHeader[index + 1] + result.control.id + result[this.DataIndex[index + 1]];
                break;
            } else if (nextElementIndex === -2) {
                obj[element][currentElementIndex] = {
                    ...{ [this.DataHeader[index + 1]]: [] },
                    ...obj[element][currentElementIndex],
                    ...result.control
                };
                raised = this.DataHeader[index] + result.control.id + result[this.DataIndex[index]];
                break;
            } else if (nextElementIndex >= 0) {
                obj = obj[element][currentElementIndex];
            }
        }

        result.stepIndex = stepIndex;

        currentState.bottomSideBar = false;
        currentState.bottomWindow = {};
        currentState.propertyWindow = result;
        currentState.isChildCalled = isChildCalled;
        currentState.raised = raised;
        currentState.currentStep = currentStep;
        currentState.showFab = false;

        this.dispatchStore(currentState);
    }

    removeItem = () => {
        var currentState = this.getState();
        var result: any = currentState.propertyWindow;

        var obj = currentState.formdata; debugger
        for (let index = 0; index < this.DataHeader.length; index++) {
            const element = this.DataHeader[index];
            const currentElementIndex: number = result[this.DataIndex[index]];
            const nextElementIndex: number = result[this.DataIndex[index + 1]];
            if (nextElementIndex >= 0) {
                obj = obj[element][currentElementIndex];
            } else {
                obj[element].splice(currentElementIndex, 1);
                if (element === this.DataHeader[0]) {
                    if ((currentState.currentStep - 1) >= 0) {
                        currentState.currentStep = (currentState.currentStep - 1);
                    } else {
                        currentState.currentStep = 0;
                    }

                }
                break;
            }
        }

        currentState.bottomSideBar = false;
        currentState.bottomWindow = {};
        currentState.propertyWindow = {};
        currentState.isChildCalled = false;
        currentState.raised = '';
        currentState.showFab = false;

        this.dispatchStore(currentState);
    }

    editItem = () => {
        this.dispatchStore({ bottomSideBar: true, showFab: false });
    };

    saveItem = () => {
        this.dispatchStore({ showFab: false });
    };

    expandFab = () => {
        this.dispatchStore({ showFab: !isVisible });
    };

    render() {
        isVisible = this.getState('showFab');
        var propertyWindow = this.getState('propertyWindow');
        if (HelperClass.isObjectEmpty(propertyWindow)) {
            isDisabled = true;
        } else {
            isDisabled = false;
        }

        var isDarkTheme = this.props.isDarkTheme;

        return (
            <React.Fragment>
                <div
                    style={{ width: '100%' }}
                >
                    <CssBaseline />
                    <Drawer
                        style={{ ...{ width: '100%' }, ...BaseComponent.getTheme(isDarkTheme, 'drawer') }}
                        anchor="bottom"
                        open={this.getState('bottomSideBar')}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0',
                                justifyContent: 'flex-end',
                                width: '100%',
                                ...BaseComponent.getTheme(isDarkTheme, 'header')
                            }}
                        >
                            <Typography
                                style={{
                                    width: '95%',
                                    fontWeight: 'bold',
                                    margin: 5,
                                    padding: 5
                                }}
                                noWrap={true}
                            >
                                {'Properties'}
                            </Typography>
                            {/* <IconButton title={'Save this Item as template for later use'} color={'primary'} onClick={this.removeItem} disabled={isDisabled}>
                                <SaveAltIcon style={{ fill: isDisabled ? 'gray' : '#0069d9' }} />
                            </IconButton>
                            <IconButton title={'Delete this Item'} color={'primary'} onClick={this.removeItem} disabled={isDisabled}>
                                <DeleteForeverIcon style={{ fill: isDisabled ? 'gray' : 'red' }} />
                            </IconButton> */}
                            <IconButton title={'Save Changes'} color={'primary'} onClick={this.updatePropertyToControl} disabled={isDisabled}>
                                <CheckIcon style={{ fill: isDisabled ? 'gray' : 'lightgreen' }} />
                            </IconButton>
                            <IconButton title={'Close'} onClick={this.handleDrawerClose} color={'default'}>
                                <CloseIcon style={{ fill: 'red' }} />
                            </IconButton>
                        </div>
                        <Divider style={BaseComponent.getTheme(isDarkTheme, 'divider')} />
                        {
                            isDisabled ?
                                <Notice style={{ userSelect: 'none', fontSize: 'medium' }} >
                                    {'No Items Selected'}
                                </Notice>
                                :
                                <RenderBottomBar isDarkTheme={isDarkTheme} propertyWindow={propertyWindow} />
                        }
                    </Drawer>
                </div>
                <Grid
                    container={true}
                    direction={'column-reverse'}
                    alignItems={'center'}
                    alignContent={'center'}
                    style={{
                        width: 'auto',
                        position: 'fixed',
                        right: '2%',
                        bottom: '10px',
                        zIndex: 10
                    }}
                >
                    <Grid item={true} >
                        <br />
                        <Fab
                            color={'default'}
                            size={'medium'}
                            aria-label="edit"
                            disabled={isDisabled}
                            onClick={this.expandFab}
                            title={'Selected Item Properties'}
                        >
                            <MoreVertIcon />
                        </Fab>
                    </Grid>
                    {
                        isVisible
                            ?
                            <>
                                <Grid item={true} >
                                    <br />
                                    <Fab
                                        color={'primary'}
                                        size={'medium'}
                                        aria-label="edit"
                                        disabled={isDisabled}
                                        onClick={this.editItem}
                                        title={'Edit Selected Item'}
                                    >
                                        <EditIcon />
                                    </Fab>
                                </Grid>
                                <Grid item={true} >
                                    <br />
                                    <Fab
                                        color={'secondary'}
                                        size={'medium'}
                                        aria-label="delete"
                                        disabled={isDisabled}
                                        onClick={this.removeItem}
                                        title={'Remove Selected Item'}
                                    >
                                        <DeleteForeverIcon />
                                    </Fab>
                                </Grid>
                                <Grid item={true} >
                                    <Fab
                                        color={'default'}
                                        size={'medium'}
                                        aria-label="save"
                                        disabled={isDisabled}
                                        onClick={this.saveItem}
                                        title={'Save Selected Item as Template for later use'}
                                    >
                                        <SaveAltIcon />
                                    </Fab>
                                </Grid>
                            </>
                            :
                            ''
                    }
                </Grid>
            </React.Fragment>
        );
    }
}