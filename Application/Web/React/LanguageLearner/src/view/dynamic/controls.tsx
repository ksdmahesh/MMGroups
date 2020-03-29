import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import { ControlProps } from './renderViewConstants';
import { controlItems } from '../shared/dnd/dndConstants';
import { getControlByName } from '../../constants/constants';

export default class Controls extends BaseComponent<ControlProps> {

    onLoad = () => {
        var currentState = this.getState();
        var currentStep = currentState.currentStep || 0;
        var sectionIndex = this.props.sectionIndex || 0;
        var cellIndex = this.props.cellIndex || 0;
        var rowIndex = this.props.rowIndex || 0;
        var columnIndex = this.props.columnIndex || 0;
        const props = (index: number) => (
            {
                stepIndex: currentStep,
                sectionIndex: sectionIndex,
                cellIndex: cellIndex,
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                controlIndex: index,
                index: index,
                itemRaised: currentState.raised,
                isDropDisabled: currentState.dropId !== 'controls',
                isVertical: true
            }
        )

        const item = (item: any) => (
            {
                item: {
                    aria: 'controls',
                    id: item.id,
                    label: item.label,
                    name: item.name,
                    type: item.type
                }
            }
        )

        controlItems.controlItems[this.props.columnId] = {
            sectionIndex: this.props.sectionIndex,
            cellIndex: this.props.cellIndex,
            rowIndex: this.props.rowIndex,
            columnIndex: this.props.columnIndex,
            controls: this.props.controls
        };

        return { props, item };
    }

    render() {
        const controls = this.props.controls;
        const { props, item } = this.onLoad();

        return (
            <>
                {
                    controls.map((control, index) => {
                        var itemProp = props(index);
                        return (
                            <this.GetDragDropItems
                                {...itemProp}
                                {...item(control)}
                                key={control.id + index}
                                content={(dragProvider, dropProvider) => (
                                    <>
                                        {getControlByName(control)}
                                        {dropProvider.placeholder}
                                    </>
                                )}
                            />
                        );
                    })
                }
            </>
        );
    }
}