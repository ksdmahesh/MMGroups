import * as React from 'react';
import BaseComponent from '../shared/helper/baseComponent';
import TabDnd from '../shared/dnd/tabDnd';
import Sections from './sections';
import { StepProps } from './renderViewConstants';

export default class Steps extends BaseComponent<StepProps> {

    render() {
        var currentStep = this.getState('currentStep');

        return (
            <TabDnd tabHeaders={this.props.steps || []} >
                {
                    this.props.steps.map((step, index) => {
                        return (
                            currentStep === index
                                ?
                                <Sections
                                    key={`${step.name}-${index}`}
                                    sections={step.sections}
                                    isDropDisabled={this.props.isDropDisabled || false}
                                    index={index}
                                    currentStep={currentStep}
                                />
                                :
                                ''
                        );
                    })
                }
            </TabDnd>
        );
    }
}