import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import BaseComponent from '../helper/baseComponent';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { Droppable, DragDropContext, DropResult, DraggableLocation, BeforeCapture } from 'react-beautiful-dnd';
import RenderLeftBarItems from './renderLeftBarItems';
import uuid from 'uuid';
import { Content, controlItems, leftControlItems } from '../dnd/dndConstants';
import { ControlsProps, LeftBarProps, DataProps, SectionProps } from '../../dynamic/renderViewConstants';
import $ from 'jquery';
import { getLeftBarControlsJSON } from '../../../constants/constants';
import TopBar from './topBar';

var baseId = '';
var dropId = '';
var listId = '';
var contentId = '';
var rawItems = getLeftBarControlsJSON();
var isDragging = false;

export default class LeftBar extends BaseComponent<LeftBarProps> {

    constructor(props: LeftBarProps) {
        super(props);
        baseId = props.id;
        dropId = uuid();
        listId = uuid();
        contentId = uuid();

        leftControlItems[baseId] = rawItems;
    }

    componentDidMount() {
        $(`#${listId}`).css({ 'top': (($('#leftbar-button-holder').outerHeight() || 0) + 1) + 'px' });
        $('#leftbar-button-holder').css({ 'width': '200px' });
    }

    handleDrawerClose = () => {
        $(`#${listId}`).animate(
            {
                'width': '56px'
            },
            {
                'duration': 'fast',
                step: (now, tween) => {
                    $(`#${contentId}`).css({ 'margin-left': now + 'px' });
                    $('#leftbar-button-holder').css({ 'width': now + 'px' });
                },
                complete: () => {
                    $(`#${listId}`).find('.MuiListItemIcon-root').css({ 'min-width': '0' });
                    $('.leftbar-container-item-animate').hide();
                    this.dispatchStore({ showMenuIcon: true });
                }
            });

    }

    handleDrawerOpen = () => {
        $(`#${listId}`).animate(
            {
                'width': '200px'
            },
            {
                'duration': 'fast',
                step: (now, tween) => {
                    $(`#${contentId}`).css({ 'margin-left': now + 'px' });
                    $('#leftbar-button-holder').css({ 'width': now + 'px' });
                },
                start: () => {
                    $('.leftbar-container-item-animate').show();
                    $(`#${listId}`).find('.MuiListItemIcon-root').css({ 'min-width': '56px' });
                },
                complete: () => {
                    this.dispatchStore({ showMenuIcon: false });
                }
            });

    }

    getButtonHolder() {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0',
                    justifyContent: 'flex-end',
                }}
                id="leftbar-button-holder"
            >
                {
                    !this.getState('showMenuIcon')
                        ?
                        <IconButton onClick={this.handleDrawerClose} >
                            <ChevronLeftIcon />
                        </IconButton>
                        :
                        <IconButton onClick={this.handleDrawerOpen} >
                            <MenuIcon />
                        </IconButton>
                }
            </div>
        );
    }

    reorder = (list: ControlsProps, startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    copy = (
        source: ControlsProps,
        destination: ControlsProps,
        droppableSource: DraggableLocation,
        droppableDestination: DraggableLocation
    ) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const item = sourceClone[droppableSource.index];
        const currentId = uuid();

        destClone.splice(droppableDestination.index, 0, { ...item, id: currentId, name: currentId });
        return destClone;
    }

    move = (
        source: ControlsProps,
        destination: ControlsProps,
        droppableSource: DraggableLocation,
        droppableDestination: DraggableLocation
    ) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {
            [droppableSource.droppableId]: sourceClone,
            [droppableDestination.droppableId]: destClone
        };

        return result;
    }

    reorderPanel = (
        list: SectionProps,
        startIndex: number,
        endIndex: number
    ): SectionProps => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        var currentState = this.getState();

        switch (currentState.dropId) {
            case 'panelHeaders': {
                break;
            }
        }

        // var formdata: DataProps;
        // var currentStep: number;
        // var sectionIndex: number;
        // var cellIndex: number;
        // var rowIndex: number;
        // var columnIndex: number;
        // var droppedControlData;
        // var control;
        // var controlsDetails;
        // switch (source.droppableId) {
        //     case 'panelHeaders': {
        //         formdata = this.getState('formdata');
        //         currentStep = this.getState('currentStep');
        //         droppedControlData = formdata.steps[currentStep].sections;
        //         droppedControlData = this.reorderPanel(
        //             droppedControlData,
        //             source.index,
        //             destination.index
        //         );
        //         formdata.steps[currentStep].sections = droppedControlData;
        //         control = {
        //             control: this.getPropertyWindowControl({
        //                 name: droppedControlData[destination.index].name,
        //                 type: 'section',
        //                 label: droppedControlData[destination.index].name,
        //                 id: droppedControlData[destination.index].id
        //             }),
        //             stepIndex: currentStep,
        //             sectionIndex: destination.index,
        //             columnIndex: -1,
        //             controlIndex: -1
        //         };

        //         this.dispatchStore({
        //             formdata: formdata,
        //             isDropDisabled: true,
        //             propertyWindow: control,
        //             controlRaised: '',
        //             isChildCalled: false,
        //             raised: 'raised' + destination.index
        //         });

        //         break;
        //     }
        //     case destination.droppableId: {
        //         formdata = this.getState('formdata');
        //         currentStep = this.getState('currentStep');

        //         controlsDetails = controlItems.controlItems[destination.droppableId];
        //         sectionIndex = controlsDetails.sectionIndex;
        //         columnIndex = controlsDetails.columnIndex;

        //         droppedControlData = formdata.steps[currentStep].sections[sectionIndex].columns[columnIndex].controls;
        //         droppedControlData = this.reorder(
        //             droppedControlData,
        //             source.index,
        //             destination.index
        //         );
        //         formdata.steps[currentStep].sections[sectionIndex].columns[columnIndex].controls = droppedControlData;

        //         control = {
        //             control: this.getPropertyWindowControl({
        //                 name: droppedControlData[destination.index].name,
        //                 type: droppedControlData[destination.index].type,
        //                 label: droppedControlData[destination.index].label,
        //                 id: droppedControlData[destination.index].id
        //             }),
        //             stepIndex: currentStep,
        //             sectionIndex: sectionIndex,
        //             columnIndex: columnIndex,
        //             controlIndex: destination.index
        //         };

        //         this.dispatchStore({
        //             formdata: formdata,
        //             isDropDisabled: false,
        //             propertyWindow: control,
        //             controlRaised: 'controlRaised' + control.control.name + destination.index,
        //             isChildCalled: false,
        //             raised: ''
        //         });

        //         break;
        //     }
        //     case baseId: {
        //         formdata = this.getState('formdata');
        //         currentStep = this.getState('currentStep');

        //         controlsDetails = controlItems.controlItems[destination.droppableId];
        //         sectionIndex = controlsDetails.sectionIndex;
        //         columnIndex = controlsDetails.columnIndex;

        //         droppedControlData = formdata.steps[currentStep].sections[sectionIndex].columns[columnIndex].controls;
        //         droppedControlData = this.copy(
        //             leftControlItems[baseId],
        //             droppedControlData,
        //             source,
        //             destination
        //         );
        //         formdata.steps[currentStep].sections[sectionIndex].columns[columnIndex].controls = droppedControlData;

        //         control = {
        //             control: this.getPropertyWindowControl({
        //                 name: droppedControlData[destination.index].name,
        //                 type: droppedControlData[destination.index].type,
        //                 label: droppedControlData[destination.index].label,
        //                 id: droppedControlData[destination.index].id
        //             }),
        //             stepIndex: currentStep,
        //             sectionIndex: sectionIndex,
        //             columnIndex: columnIndex,
        //             controlIndex: destination.index
        //         };

        //         this.dispatchStore({
        //             formdata: formdata,
        //             isDropDisabled: false,
        //             propertyWindow: control,
        //             controlRaised: 'controlRaised' + control.control.name + destination.index,
        //             isChildCalled: false,
        //             raised: ''
        //         });

        //         break;
        //     }
        //     default: {
        //         formdata = this.getState('formdata');
        //         currentStep = this.getState('currentStep');

        //         var controlsDetailsDefaultId = controlItems.controlItems[destination.droppableId];
        //         sectionIndex = controlsDetailsDefaultId.sectionIndex;
        //         columnIndex = controlsDetailsDefaultId.columnIndex;

        //         var controlsDetailsDefaultSourceId = controlItems.controlItems[source.droppableId];
        //         var sectionSourceIndex = controlsDetailsDefaultSourceId.sectionIndex;
        //         var columnSourceIndex = controlsDetailsDefaultSourceId.columnIndex;

        //         droppedControlData = formdata.steps[currentStep].sections[sectionIndex].columns[columnIndex].controls;
        //         controlsDetails = formdata.steps[currentStep].sections[sectionSourceIndex]
        //             .columns[columnSourceIndex].controls;

        //         var dragDropResults = this.move(
        //             controlsDetails,
        //             droppedControlData,
        //             source,
        //             destination
        //         );

        //         formdata.steps[currentStep].sections[sectionIndex]
        //             .columns[columnIndex].controls = dragDropResults[destination.droppableId];

        //         formdata.steps[currentStep].sections[sectionSourceIndex]
        //             .columns[columnSourceIndex].controls = dragDropResults[source.droppableId];

        //         var controlData = dragDropResults[destination.droppableId];

        //         control = {
        //             control: this.getPropertyWindowControl({
        //                 name: controlData[destination.index].name,
        //                 type: controlData[destination.index].type,
        //                 label: controlData[destination.index].label,
        //                 id: controlData[destination.index].id
        //             }),
        //             stepIndex: currentStep,
        //             sectionIndex: sectionIndex,
        //             columnIndex: columnIndex,
        //             controlIndex: destination.index
        //         };

        //         this.dispatchStore({
        //             formdata: formdata,
        //             isDropDisabled: false,
        //             propertyWindow: control,
        //             controlRaised: 'controlRaised' + control.control.name + destination.index,
        //             isChildCalled: false,
        //             raised: ''
        //         });

        //         break;
        //     }
        // }

    }

    onDragStart = (result: DropResult) => {
        isDragging = true;
        // const { source } = result;
        // var currentSourceId = source.droppableId;
        // var currentActiveHeader = this.DataHeader.find(header => (
        //     currentSourceId.startsWith(header)
        // ));
        // console.log(currentActiveHeader)
        // this.dispatchStore({
        //     dropId: currentActiveHeader,
        //     isChildCalled: true,
        //     topSideBar: true
        // });
    }

    onBeforeCapture = (result: BeforeCapture) => {
        console.log('ok')
        this.dispatchStore({
            isChildCalled: true,
            topSideBar: true
        });
        isDragging = true;
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
                onDragStart={this.onDragStart}
                onBeforeCapture={this.onBeforeCapture}
            >
                <Droppable droppableId={baseId} isDropDisabled={true} >
                    {(provided, snapshot) => (
                        <div id={dropId} ref={provided.innerRef} >
                            <CssBaseline />
                            <Drawer
                                ref={provided.innerRef}
                                anchor="left"
                                variant="persistent"
                                open={true}
                            >
                                {this.getButtonHolder()}
                                <Divider />
                                <RenderLeftBarItems isDraggable={this.props.isDraggable} id={listId} items={rawItems} />
                            </Drawer>
                        </div>
                    )}
                </Droppable>
                <Content id={contentId} >
                    {this.props.children}
                </Content>
                {
                    isDragging
                        ?
                        <TopBar />
                        :
                        ''
                }
            </DragDropContext>
        );
    }
}