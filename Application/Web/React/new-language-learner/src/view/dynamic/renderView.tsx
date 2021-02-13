import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { v4 as uuid } from 'uuid';
import { formdata } from '../../constants/formdata';
import Steps from './steps';
import LeftBar from '../shared/layout/leftBar';
import Header from '../shared/layout/header';
import RightBar from '../shared/layout/rightBar';
import TopBar from '../shared/layout/topBar';
import Footer from '../shared/layout/footer';
import ScrollDialog from '../shared/materialUI/modal';
import BottomBar from '../shared/layout/bottomBar';
import { Content } from '../shared/dnd/dndConstants';
import { withStyles } from '@material-ui/core';
import { useStyles } from '../../themes/themes';

var dialogId = '';

class RenderView extends BaseComponent<any> {

    constructor(props: {}) {
        super(props);

        dialogId = uuid();
        this.setInitializeValues(formdata);
    }

    render() {
        const isDarkTheme = this.props.isDarkTheme;
        var state = this.getState() || {};
        const classes = this.props.classes;
        return (
            <div className={classes.drawer}>
                <div className={`wrapper ${classes.contentStyle} ${classes.drawer}`} >
                    <LeftBar
                        isDraggable={true}
                        id={state.baseId}
                        isDarkTheme={isDarkTheme}
                        content={(contentId, dropProvider) => (
                            <Content id={contentId} style={{
                                borderLeft: '1px solid white'
                            }}
                            // style={{ zIndex: 7000, position: 'relative' }}
                            >
                                <Header id={state.baseId} isDarkTheme={isDarkTheme} />
                                <div id="content" className={classes.drawer}>
                                    <Steps
                                        isDarkTheme={isDarkTheme}
                                        steps={state.formdata.steps}
                                        isDropDisabled={false}
                                        dropProvider={dropProvider}
                                    />

                                </div>
                                {/* <TopBar /> */}

                                <RightBar />
                                <BottomBar isDarkTheme={isDarkTheme} />
                                <Footer isDarkTheme={isDarkTheme} />
                            </Content>

                        )}
                    >
                        {/* <div style={{ zIndex: 700, position: 'relative' }}>
                            <TopBar isDarkTheme={isDarkTheme} />
                        </div> */}
                    </LeftBar>
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
            </div>
        );
    }
}

export default withStyles(useStyles)(RenderView);