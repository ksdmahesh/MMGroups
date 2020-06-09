import * as React from 'react';
import ComponentBase from '../shared/helpers/componentBase';

export default class RenderView extends ComponentBase {
    render() {
        return (
            <div>
                <input
                    type='button'
                    onClick={() => this.dispatchStore({ test: this.getNumbers() })}
                    value={this.getState('test') || 'click'}
                />
                {this.generateTable('AstaChemmaSmall')}
            </div>
        );
    }
}