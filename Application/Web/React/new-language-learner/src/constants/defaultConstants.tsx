import * as React from 'react';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../store/reducers';
import { connect } from 'react-redux';
import { Backdrop, CircularProgress } from '@material-ui/core';

//#region Connect

export type Dispatch = (action: { type: string, data: {} }) => void;

export const mapStateToPros = (state: any) => {
    return {
        formdata: state,
        isDarkTheme: true,// this.getState('themeInfo') === 'Dark';
        isDrag: state.topSideBar
    };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        dispatch: (action: { type: string, data: {} }) => {
            dispatch(action);
        }
    };
};

export const ConnectComponent = connect(mapStateToPros, mapDispatchToProps);

//#endregion

//#region Route

// export const Loading = () => <div style={{ color: '#474747', fontWeight: 'bold', padding: '5px' }}>Loading...</div>;
export const Loading = <Backdrop open={true} ><CircularProgress color="inherit" /></Backdrop>;

export const PageStart = React.lazy(() => import('../routes/pageStart'))

export const setRouting = (path: string, component: React.ComponentType) => {
    return (
        <Route
            path={path}
            exact={true}
            render={(props) => <React.Suspense fallback={Loading}><PageStart component={component} {...props} /></React.Suspense>}
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