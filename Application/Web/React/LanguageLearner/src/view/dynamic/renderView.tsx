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
import { Content } from '../shared/dnd/dndConstants';

var dialogId = '';
var contentStyle: any = (isDrag: boolean) => ({
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: isDrag ? 'hidden' : 'auto',
    zIndex: 500
});
export default class RenderView extends BaseComponent {

    constructor(props: {}) {
        super(props);

        dialogId = uuid();
        this.setInitializeValues(formdata);
    }
    render() {
        var isDarkTheme = true;// this.getState('themeInfo') === 'Dark';
        var state = this.getState() || {};
        var isDrag = state.rightSideBar;
        return (
            <div style={BaseComponent.getTheme(isDarkTheme, 'drawer')}>
                <LeftBar
                    isDraggable={true}
                    id={state.baseId}
                    isDarkTheme={isDarkTheme}
                    content={(contentId, dropProvider) => (
                        <div className="wrapper" style={{...contentStyle(isDrag), ...BaseComponent.getTheme(isDarkTheme, 'drawer') }}>
                            <Content id={contentId} >
                                <Header id={state.baseId} isDarkTheme={isDarkTheme} />
                                <div id="content" style={BaseComponent.getTheme(isDarkTheme, 'drawer')}>
                                    <Steps
                                        isDarkTheme={isDarkTheme}
                                        steps={state.formdata.steps}
                                        isDropDisabled={false}
                                        dropProvider={dropProvider}
                                    />
                                </div>
                                {/* <TopBar /> */}
                                <BottomBar isDarkTheme={isDarkTheme} />
                                <Footer isDarkTheme={isDarkTheme} />
                            </Content>
                        </div>
                    )}
                />
                <ScrollDialog
                    isDarkTheme={isDarkTheme}
                    title={state.modalTitle}
                    content={state.modalContent}
                    id={dialogId}
                    open={state.modalOpen}
                    fullWidth={state.fullWidth}
                    showCancelButton={state.showCancelButton}
                    okButtonText={state.okButtonText}
                    cancelButtonText={state.cancelButtonText}
                    modalCloseCallback={state.modalCloseCallback}
                />
            </div>
        );
    }
}