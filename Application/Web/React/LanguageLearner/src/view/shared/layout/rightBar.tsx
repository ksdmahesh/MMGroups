import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import BaseComponent from '../helper/baseComponent';
import { Typography } from '@material-ui/core';
import RenderRightBarItems from './renderRightBarItems';
import { Bin, ListTitle } from '../dnd/dndConstants';
import { Droppable } from 'react-beautiful-dnd';

export default class RightBar extends BaseComponent {

    render() {

        return (
            <React.Fragment>
                {
                    this.getState('rightSideBar')
                        ?
                        <Bin>
                            <ListTitle>
                                {'Trash'}{' '}
                                <span role="img" aria-label="trash">
                                    {'🗑'}
                                </span>
                            </ListTitle>
                            <Droppable droppableId="bin">
                                {provided => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {/* {renderTasks(trash, { isDragEnabled: false })} */}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </Bin>
                        :
                        ''
                }
            </React.Fragment>
        );
    }
}