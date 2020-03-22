import React from 'react';
import TextImage from '../assets/content/images/type.svg';
import SelectImage from '../assets/content/images/drop-down-list.svg';
import AddressImage from '../assets/content/images/address.svg';
import ParagraphImage from '../assets/content/images/paragraph.svg';
import DateTimePickerImage from '../assets/content/images/calendar.svg';
import CheckImage from '../assets/content/images/checkbox.svg';
import RadioImage from '../assets/content/images/radio-button.svg';
import TextAreaImage from '../assets/content/images/text.svg';
import FileUploadImage from '../assets/content/images/file.svg';
import { Typography, ListItem } from '@material-ui/core';
import InputText from '../view/shared/materialUI/textField';
import Dropdown from '../view/shared/materialUI/dropdown';
import DatePicker from '../view/shared/materialUI/datePicker';
import CheckBox from '../view/shared/materialUI/checkbox';
import Address from '../view/shared/helper/address';
import RadioButtonsGroup from '../view/shared/materialUI/radio';
import uuid from 'uuid';
import {
    ControlsProps,
    AllControlProps,
    types,
    controlTypes,
    TypesProps
} from '../view/dynamic/renderViewConstants';
import Textarea from '../view/shared/materialUI/textarea';
import TimePicker from '../view/shared/materialUI/timePicker';
import FileUpload from '../view/shared/materialUI/fileUpload';

var propertyWindowId = uuid();

export default function getIconByName(name: string): JSX.Element {
    var absoluteName = (name || '').replace(' ', '').toLowerCase();
    switch (absoluteName) {
        case 'textfield': {
            return <img src={TextImage} alt={'Text Field'} />;
        }
        case 'select': {
            return <img src={SelectImage} alt={'Select'} />;
        }
        case 'address': {
            return <img src={AddressImage} alt={'Address'} />;
        }
        case 'paragraph': {
            return <img src={ParagraphImage} alt={'Paragraph'} />;
        }
        case 'datepicker': {
            return <img src={DateTimePickerImage} alt={'Date Picker'} />;
        }
        case 'checkbox': {
            return <img src={CheckImage} alt={'Check Box'} />;
        }
        case 'radiobutton': {
            return <img src={RadioImage} alt={'Radio Button'} />;
        }
        case 'textarea': {
            return <img src={TextAreaImage} alt={'Text Area'} />;
        }
        case 'fileupload': {
            return <img src={FileUploadImage} alt={'File Upload'} />;
        }
        default: {
            return <></>;
        }
    }
}

export function getControlByName(
    control: AllControlProps,
    disabled: boolean = true,
    callback?: ((event: React.ChangeEvent<HTMLInputElement>) => void)
) {
    var absoluteName = (control.type || '').replace(' ', '').toLowerCase() as controlTypes;
    switch (absoluteName) {
        case controlTypes.textbox:
            return <InputText {...control} disabled={disabled} />;
        case controlTypes.dropdown: {
            return <Dropdown {...control} disabled={disabled} />;
        }
        case controlTypes.multiselect: {
            return <Dropdown {...control} isMultiSelect={true} disabled={disabled} />;
        }
        case controlTypes.address: {
            return <Address {...control} disabled={disabled} />;
        }
        case controlTypes.paragraph: {
            return <Typography align={'justify'} id={control.id} >{control.label}</Typography>;
        }
        case controlTypes.datepicker: {
            return <DatePicker {...control} disabled={disabled} />;
        }
        case controlTypes.timepicker: {
            return <TimePicker {...control} disabled={disabled} />;
        }
        case controlTypes.checkbox: {
            return <CheckBox {...control} disabled={disabled} />;
        }
        case controlTypes.radiobutton: {
            return <RadioButtonsGroup {...control} disabled={disabled} />;
        }
        case controlTypes.textarea: {
            return <Textarea {...control} disabled={disabled} />;
        }
        case controlTypes.fileupload: {
            return <FileUpload onChange={callback} {...control} disabled={disabled} />;
        }
        default:
            return '';
    }
}

export function getPropertiesByControl(control: AllControlProps) {
    var json = setJSON(control);
    return (
        json.map((item, index) => {
            return (
                <ListItem
                    key={item.id + '-' + index}
                >
                    {getControlByName(item, item.disabled)}
                </ListItem>
            );
        })
    );
}

export function getLeftBarControlsJSON() {
    return [
        { label: 'Text Field', type: 'textbox', id: uuid(), name: 'test1' },
        { label: 'Select', type: 'dropdown', id: uuid(), name: 'test1' },
        { label: 'Address', type: 'Address', id: uuid(), name: 'test1' },
        { label: 'Paragraph', type: 'Paragraph', id: uuid(), name: 'test1' },
        { label: 'Date Picker', type: 'DatePicker', id: uuid(), name: 'test1' },
        { label: 'Check Box', type: 'CheckBox', id: uuid(), name: 'test1' },
        { label: 'Radio Button', type: 'RadioButton', id: uuid(), name: 'test1' },
        { label: 'Text Area', type: 'TextArea', id: uuid(), name: 'test1' },
        { label: 'File Upload', type: 'textbox', id: uuid(), name: 'test1' }
    ];
}

function setJSON(control: AllControlProps): ControlsProps {
    var absoluteName = (control.type || '').replace(' ', '').toLowerCase() as controlTypes;
    switch (absoluteName) {
        case controlTypes.textbox:
            return setJSONBasedOnType(control, types.ExtendedInputProps);
        case controlTypes.dropdown: {
            return setJSONBasedOnType(control, types.ExtendedSelectProps);
        }
        case controlTypes.address: {
            return setJSONBasedOnType(control, types.ExtendedAddressProps);
        }
        case controlTypes.paragraph: {
            return setJSONBasedOnType(control, types.ExtendedParagraphProps);
        }
        case controlTypes.datepicker: {
            return setJSONBasedOnType(control, types.ExtendedDateProps);
        }
        case controlTypes.timepicker: {
            return setJSONBasedOnType(control, types.ExtendedTimeProps);
        }
        case controlTypes.checkbox: {
            return setJSONBasedOnType(control, types.ExtendedCheckboxProps);
        }
        case controlTypes.radiobutton: {
            return setJSONBasedOnType(control, types.ExtendedCheckboxProps);
        }
        case controlTypes.textarea: {
            return setJSONBasedOnType(control, types.ExtendedTextAreaProps);
        }
        case controlTypes.fileupload: {
            return setJSONBasedOnType(control, types.ExtendedFileUploadProps);
        }
        case controlTypes.multiselect: {
            return setJSONBasedOnType(control, types.ExtendedSelectProps);
        }
        case controlTypes.step: {
            return setJSONBasedOnType(control, types.ExtendedStepProps);
        }
        case controlTypes.section: {
            return setJSONBasedOnType(control, types.ExtendedSectionProps);
        }
        default:
            return [];
    }
}

// need to loop T and get props return as json T may be any of AllControlProps
function setJSONBasedOnType(control: AllControlProps, dataType: string) {
    var currentObject: { [x: string]: controlTypes } = {};
    if (dataType === types.ExtendedStepProps || dataType === types.ExtendedSectionProps) {
        currentObject = TypesProps[dataType];
    } else {
        currentObject = { ...TypesProps[dataType], ...TypesProps.HtmlProps };
    }

    return Object.entries(currentObject).map((keyValuePair, index) => (
        control.type !== controlTypes.textbox && `${keyValuePair[0]}` === 'type'
            ?
            {} as AllControlProps
            :
            {
                'name': propertyWindowId + index,
                'id': propertyWindowId + index,
                'type': `${keyValuePair[1]}`,
                'label': `${keyValuePair[0]}`,
                ...(
                    `${keyValuePair[1]}` === controlTypes.checkbox
                        ?
                        // tslint:disable-next-line: no-any
                        { 'checked': (control as any)[keyValuePair[0]] }
                        :
                        // tslint:disable-next-line: no-any
                        { 'value': (control as any)[keyValuePair[0]] }
                ),
                'location': `rightWindow.${keyValuePair[0]}`,
                disabled: false
            }
    ));
}