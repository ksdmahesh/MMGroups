import * as React from 'react';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../store/appStore';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Backdrop } from '@material-ui/core';

//#region Connect

export type Dispatch = (action: { type: string, data: {} }) => void;

export const mapStateToPros = (state: object) => {
    return {
        data: state
    };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        dispatch: (action: { type: string, data: {} }) => {
            dispatch(action);
        },
        getState: () => store.getState()
    };
};

export const ConnectComponent = connect(mapStateToPros, mapDispatchToProps);

//#endregion

//#region Route

export const Loading = () => (
    <Backdrop open={true}>
        <CircularProgress
            variant="indeterminate"
            disableShrink
            size={40}
            thickness={4}
            color={'secondary'}
        />
    </Backdrop>
);

export const StartUp =
    React.lazy(() => import('../start/startup'));

export const setRouting = (path: string, component: React.ComponentType) => {
    return (
        <Route
            path={path}
            exact={true}
            render={(props) => (
                <div>
                    <React.Suspense fallback={Loading()}>
                        <StartUp component={component} {...props} />
                    </React.Suspense>
                </div>
            )}
        />
    );
};

//#endregion

//#region Store

// tslint:disable-next-line: no-any
export const store: Store<any, { type: string, data: {} }> = createStore(Reducers, applyMiddleware(thunk));

//#endregion

//#region Api

export const baseURL = 'http://localhost:54045/api';

//#endregion