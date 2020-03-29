import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BaseComponent from '../helper/baseComponent';
import { IconButton, Typography } from '@material-ui/core';
import RenderRightBarItems from './renderRightBarItems';
import CheckIcon from '@material-ui/icons/Check';
import { PropertyWindowProps } from '../../dynamic/renderViewConstants';
import uuid from 'uuid';
import { HelperClass } from '../helper/typeCheck';
import { Notice } from '../dnd/dndConstants';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

var isDisabled = false;

export default class RightBar extends BaseComponent {

    handleDrawerClose = () => {
        this.dispatchStore({ rightSideBar: false, rightWindow: {} });
    }

    updatePropertyToControl = () => {
        var currentState = this.getState();
        var result: any = currentState.propertyWindow;

        var stepIndex: number = result.stepIndex;

        var currentStep: number = currentState.currentStep;

        result.control = { ...result.control, ...currentState.rightWindow };

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

        currentState.rightSideBar = false;
        currentState.rightWindow = {};
        currentState.propertyWindow = result;
        currentState.isChildCalled = isChildCalled;
        currentState.raised = raised;
        currentState.currentStep = currentStep;

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

        currentState.rightSideBar = false;
        currentState.rightWindow = {};
        currentState.propertyWindow = {};
        currentState.isChildCalled = false;
        currentState.raised = '';

        this.dispatchStore(currentState);
    }

    render() {
        var propertyWindow = this.getState('propertyWindow');
        if (HelperClass.isObjectEmpty(propertyWindow)) {
            isDisabled = true;
        } else {
            isDisabled = false;
        }

        return (
            <React.Fragment>
                <div
                    style={{ width: '300px' }}
                >
                    <CssBaseline />
                    <Drawer
                        style={{ width: '300px' }}
                        anchor="right"
                        open={this.getState('rightSideBar')}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0',
                                justifyContent: 'flex-end',
                                width: '300px'
                            }}
                            id="rightbar-button-holder"
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
                            <IconButton color={'primary'} onClick={this.removeItem} disabled={isDisabled}>
                                <DeleteForeverIcon style={{ fill: isDisabled ? 'gray' : 'red' }} />
                            </IconButton>
                            <IconButton color={'primary'} onClick={this.updatePropertyToControl} disabled={isDisabled}>
                                <CheckIcon style={{ fill: isDisabled ? 'gray' : 'green' }} />
                            </IconButton>
                            <IconButton onClick={this.handleDrawerClose} color={'default'}>
                                <ArrowForwardIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        {
                            isDisabled ?
                                <Notice style={{ userSelect: 'none', fontSize: 'medium' }} >
                                    {'No Items Selected'}
                                </Notice>
                                :
                                <RenderRightBarItems propertyWindow={propertyWindow} />
                        }
                    </Drawer>
                </div>
            </React.Fragment>
        );
    }
}