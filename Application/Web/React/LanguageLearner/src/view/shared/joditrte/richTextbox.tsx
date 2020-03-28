import React from 'react';
import JoditEditor from 'jodit-react';
import BaseComponent from '../helper/baseComponent';

export default class RichTextbox extends BaseComponent<{ id: string }> {
  render() {
    const config = {
      readonly: false // all options from https://xdsoft.net/jodit/doc/
    };
    return (
      <JoditEditor
        value={this.getState(this.props.id) || ''}
        config={config}
        // tabIndex={1} // tabIndex of textarea
        onBlur={newContent => this.dispatchStore({ [this.props.id]: newContent })}
        // preferred to use only this option to update the content for performance reasons
        onChange={newContent => { /** */ }}
      />
    );
  }
}
