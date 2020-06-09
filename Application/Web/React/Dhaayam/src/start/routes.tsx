import * as React from 'react';
import { Switch } from 'react-router-dom';
import * as Imports from './imports';
import { setRouting } from '../constants/default';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
          {setRouting('/', Imports.Home)}
      </Switch>
    );
  }
}
