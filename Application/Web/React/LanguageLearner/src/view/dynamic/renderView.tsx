import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import uuid from 'uuid';
import { formdata } from '../../appData/formdata';
import Steps from './steps';
import LeftBar from '../shared/layout/leftBar';
import Header from '../shared/layout/header';
import RightBar from '../shared/layout/rightBar';
import Footer from '../shared/layout/footer';
import ScrollDialog from '../shared/materialUI/modal';

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
                <LeftBar isDraggable={true} id={state.baseId}>
                    <Header id={state.baseId} />
                    <div id="content">
                        <Steps
                            steps={state.formdata.steps}
                            isDropDisabled={state.isDropDisabled}
                        />
                    </div>
                    <RightBar />
                    <Footer />
                </LeftBar>
                <ScrollDialog
                    title={state.modalTitle}
                    content={state.modalContent}
                    id={dialogId}
                    open={state.modalOpen}
                    showCancelButton={state.showCancelButton}
                    modalCloseCallback={state.modalCloseCallback}
                />
            </div>
        );
    }
}