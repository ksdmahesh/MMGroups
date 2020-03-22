import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import BaseComponent from '../helper/baseComponent';

function not(a: number[], b: number[]) {
    return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a: number[], b: number[]) {
    return a.filter(value => b.indexOf(value) !== -1);
}

function union(a: number[], b: number[]) {
    return [...a, ...not(b, a)];
}

// tslint:disable-next-line: no-any
export default class TransferList extends BaseComponent {
    // tslint:disable-next-line: no-any
    constructor(props: any) {
        super(props);
        this.state = {
            checked: [],
            left: [0, 1, 2],
            right: [0, 1, 2]
        };
    }
    //   const [checked, setChecked] = React.useState<number[]>([]);
    //   const [left, setLeft] = React.useState<number[]>([0, 1, 2, 3]);
    //   const [right, setRight] = React.useState<number[]>([4, 5, 6, 7]);
    render() {
        const leftChecked = intersection(this.state.checked, this.state.left);
        const rightChecked = intersection(this.state.checked, this.state.right);

        const handleToggle = (value: number) => () => {
            const currentIndex = this.state.checked.indexOf(value);
            const newChecked = [...this.state.checked];

            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            this.setState({ checked: newChecked });
        };

        const numberOfChecked = (items: number[]) => intersection(this.state.checked, items).length;

        const handleToggleAll = (items: number[]) => () => {
            if (numberOfChecked(items) === items.length) {
                this.setState({ checked: (not(this.state.checked, items)) });
            } else {
                this.setState({ checked: union(this.state.checked, items) });
            }
        };

        const handleCheckedRight = () => {
            this.setState({
                left: not(this.state.left, leftChecked),
                right: this.state.right.concat(leftChecked),
                checked: not(this.state.checked, leftChecked)
            });
        };

        const handleCheckedLeft = () => {
            this.setState({
                left: this.state.left.concat(rightChecked),
                right: not(this.state.right, rightChecked),
                checked: not(this.state.checked, rightChecked)
            });
        };

        const customList = (title: React.ReactNode, items: number[]) => (
            <Card>
                <CardHeader
                    avatar={
                        <Checkbox
                            onClick={handleToggleAll(items)}
                            checked={numberOfChecked(items) === items.length && items.length !== 0}
                            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
                            disabled={items.length === 0}
                            inputProps={{ 'aria-label': 'all items selected' }}
                        />
                    }
                    title={title}
                    subheader={`${numberOfChecked(items)}/${items.length} selected`}
                />
                <Divider />
                <List dense={true} role="list">
                    {items.map((value: number) => {
                        const labelId = `transfer-list-all-item-${value}-label`;

                        return (
                            <ListItem key={value} role="listitem" button={true} onClick={handleToggle(value)}>
                                <ListItemIcon>
                                    <Checkbox
                                        checked={this.state.checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple={true}
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                            </ListItem>
                        );
                    })}
                    <ListItem />
                </List>
            </Card>
        );

        return (
            <Grid container={true} justify="center" alignItems="center" >
                <Grid item={true}>{customList('Choices', this.state.left)}</Grid>
                <Grid item={true}>
                    <Grid container={true} direction="column" alignItems="center">
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                        >
                            {`&gt;`}
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                        >
                            {`&lt;`}
                        </Button>
                    </Grid>
                </Grid>
                <Grid item={true}>{customList('Chosen', this.state.right)}</Grid>
            </Grid>
        );
    }
}