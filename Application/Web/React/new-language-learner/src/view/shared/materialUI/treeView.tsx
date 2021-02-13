import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import BaseComponent from '../helper/baseComponent';

declare module 'csstype' {
    interface Properties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}

type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon: React.ElementType<SvgIconProps>;
    labelInfo?: string;
    labelText: string;
};

function StyledTreeItem(props: StyledTreeItemProps) {
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

    return (
        <TreeItem
            label={
                <div>
                    <LabelIcon color="inherit" />
                    <Typography variant="body2">
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </div>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            {...other}
        />
    );
}

// tslint:disable-next-line: no-any
export default class GmailTreeView extends BaseComponent {
    render() {
        return (
            <TreeView
                defaultExpanded={['3']}
                defaultCollapseIcon={<ArrowDropDownIcon />}
                defaultExpandIcon={<ArrowRightIcon />}
                defaultEndIcon={<div style={{ width: 24 }} />}
            >
                <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />
                <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
                <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
                    <StyledTreeItem
                        nodeId="5"
                        labelText="Social"
                        labelIcon={SupervisorAccountIcon}
                        labelInfo="90"
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                        nodeId="6"
                        labelText="Updates"
                        labelIcon={InfoIcon}
                        labelInfo="2,294"
                        color="#e3742f"
                        bgColor="#fcefe3"
                    />
                    <StyledTreeItem
                        nodeId="7"
                        labelText="Forums"
                        labelIcon={ForumIcon}
                        labelInfo="3,566"
                        color="#a250f5"
                        bgColor="#f3e8fd"
                    />
                    <StyledTreeItem
                        nodeId="8"
                        labelText="Promotions"
                        labelIcon={LocalOfferIcon}
                        labelInfo="733"
                        color="#3c8039"
                        bgColor="#e6f4ea"
                    />
                </StyledTreeItem>
                <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
            </TreeView>
        );
    }
}