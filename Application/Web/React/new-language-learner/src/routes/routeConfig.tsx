import * as React from 'react';
import { Switch } from 'react-router-dom';
import * as Imports from './imports';
import { setRouting } from '../constants/defaultConstants';
import BaseComponent from '../view/shared/helper/baseComponent';

export default class RouteConfig extends BaseComponent {
  render() {
    return (
      <Switch>
        {setRouting('/dynamic', Imports.RenderView )}
        {setRouting('/test', Imports.TestRenderView)}
      </Switch>
    );
  }
}
