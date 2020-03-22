import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import BaseComponent from '../helper/baseComponent';
import { ListProps } from './materialConstants';
import TypeCheck from '../helper/typeCheck';

export default class ULList extends BaseComponent<ListProps> {
    render() {
        return (
            <List subheader={<li />}>
                {/* {this.props.items?.map((item: string | string[], index: number) => (
                    <li key={`section-${item + index}`}>
                        <ul>
                            <ListSubheader>{this.props.subHeading}</ListSubheader>
                            {TypeCheck.isArray(item) ?
                                item.map((innerItem: string) => (
                                    <ListItem key={`item-${item + index}-${innerItem}`}>
                                        <ListItemText primary={`${innerItem}`} />
                                    </ListItem>
                                ))
                                :
                                <ListItem key={`item-${item + index}-${item}`}>
                                    <ListItemText primary={`${item}`} />
                                </ListItem>
                            }
                        </ul>
                    </li>
                ))} */}
                {/* {this.props.items?.map((item: string | string[], index: number) => (
                    <li key={`section-${item + index}`}>
                        <ul>
                            <ListSubheader>{this.props.subHeading}</ListSubheader>
                            {TypeCheck.isArray(item) ?
                                item.map((innerItem: string) => (
                                    <ListItem key={`item-${item + index}-${innerItem}`}>
                                        <ListItemText primary={`${innerItem}`} />
                                    </ListItem>
                                ))
                                :
                                <ListItem key={`item-${item + index}-${item}`}>
                                    <ListItemText primary={`${item}`} />
                                </ListItem>
                            }
                        </ul>
                    </li>
                ))} */}
            </List>
        );
    }
}