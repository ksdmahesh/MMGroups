import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import uuid from 'uuid';
import { formdata } from '../../appData/formdata';
import Steps from './steps';
import LeftBar from '../shared/layout/leftBar';
import Header from '../shared/layout/header';
import RightBar from '../shared/layout/rightBar';
import TopBar from '../shared/layout/topBar';
import Footer from '../shared/layout/footer';
import ScrollDialog from '../shared/materialUI/modal';
import BottomBar from '../shared/layout/bottomBar';
import AddingThings from '../shared/dnd/beautifulDnd';

var dialogId = '';

export default class RenderView extends BaseComponent {

    constructor(props: {}) {
        super(props);

        dialogId = uuid();
        this.setInitializeValues(formdata);
    }
    render() {
        var state = this.getState() || {};
        return (
            <div className="wrapper">
                <AddingThings />
                {/* <LeftBar isDraggable={true} id={state.baseId}>
                    <Header id={state.baseId} />
                    <div id="content">
                        <Steps
                            steps={state.formdata.steps}
                            isDropDisabled={state.isDropDisabled}
                        />
                    </div>
                    <RightBar />
                    <BottomBar />
                    <Footer />
                </LeftBar>
                <ScrollDialog
                    title={state.modalTitle}
                    content={state.modalContent}
                    id={dialogId}
                    open={state.modalOpen}
                    fullWidth={state.fullWidth}
                    showCancelButton={state.showCancelButton}
                    okButtonText={state.okButtonText}
                    cancelButtonText={state.cancelButtonText}
                    modalCloseCallback={state.modalCloseCallback}
                /> */}
            </div>
        );
    }
}