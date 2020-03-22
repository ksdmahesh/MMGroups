import * as React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../appStore/reducers';
import { connect } from 'react-redux';

//#region Connect

export type Dispatch = (action: { type: string, data: {} }) => void;

export const mapStateToPros = (state: object) => {
    return {
        formdata: state
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

export const Loading = () => <div style={{ color: '#474747', fontWeight: 'bold', padding: '5px' }}>Loading...</div>;

export const PageStart =
    Loadable({
        loader: () =>
            import('../appStart/pageStart'), loading: Loading
    });

export const setRouting = (path: string, component: React.ComponentType) => {
    return (
        <Route
            path={path}
            exact={true}
            render={(props) => <PageStart component={component} {...props} />}
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