import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import SwipeableViews from 'react-swipeable-views';
import BaseComponent from '../helper/baseComponent';

interface TabPanelProps {
    children?: React.ReactNode;
    // tslint:disable-next-line: no-any
    index: any;
    // tslint:disable-next-line: no-any
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

// tslint:disable-next-line: no-any
function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

interface TabProps {
    tabHeaders: Array<{ id: string, content: string }>;
    orientation: 'horizontal' | 'vertical';
}

// tslint:disable-next-line: no-any
export default class ScrollableTab extends BaseComponent<TabProps> {
    // tslint:disable-next-line: no-any
    constructor(props: any) {
        super(props);
        this.state = {
            value: 0
        };
    }

    render() {
        const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
            this.setState({ value: newValue });
        };

        // const handleChangeIndex = (index: number) => {
        //     this.setState({ value: index });
        // };

        return (
            <div
                style={{
                    backgroundColor: 'rgba(240,248,255,0.3)'
                }}
            >
                <AppBar position="static" color="default">
                    <Tabs
                        orientation={this.props.orientation}
                        value={this.state.value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="on"
                        aria-label="scrollable auto tabs example"
                    >
                        {
                            this.props.tabHeaders.map((tabHeader, index) => {
                                return (
                                    <Tab
                                        key={`${tabHeader.content}-${index}`}
                                        label={tabHeader.content}
                                        {...a11yProps(0)}
                                    />
                                );
                            })
                        }
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.value} index={0}>
                    {this.props.children}
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    {'Item Two'}
                </TabPanel>
                <TabPanel value={this.state.value} index={2}>
                    {'Item Three'}
                </TabPanel>
                <TabPanel value={this.state.value} index={3}>
                    {'Item Four'}
                </TabPanel>
                <TabPanel value={this.state.value} index={4}>
                    {'Item Five'}
                </TabPanel>
                <TabPanel value={this.state.value} index={5}>
                    {'Item Six'}
                </TabPanel>
                <TabPanel value={this.state.value} index={6}>
                    {'Item Seven'}
                </TabPanel>
                <TabPanel value={this.state.value} index={7}>
                    {'Item Eight'}
                </TabPanel>
            </div>
        );
    }
}