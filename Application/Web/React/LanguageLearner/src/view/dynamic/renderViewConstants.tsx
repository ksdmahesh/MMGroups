import { DraggableProvided, DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

export type HtmlProps = {
    name: string,
    type?: string,
    label: string,
    value?: string | Array<string>,
    tooltip?: string,
    validation?: string,
    defaultValue?: string,
    visible?: string,
    autoFocus?: boolean,
    disabled?: boolean
};

export type ExtendedCheckboxProps = {
    checked?: boolean
} & HtmlProps;

export type ExtendedParagraphProps = {
    // textAlign?: string
} & HtmlProps;

export type ExtendedSelectProps = {
    options?: Array<{ [x: string]: string }>,
    isMultiSelect?: boolean
} & HtmlProps;

export type ExtendedInputProps = {
    placeholder?: string,
    rows?: number,
    rowsMax?: number,
    multiline?: boolean
} & HtmlProps;

export type ExtendedTextAreaProps = {
    cols?: number
} & ExtendedInputProps & HtmlProps;

export type ExtendedDateProps = {
    format?: string,
    startDate?: string,
    endDate?: string,
} & HtmlProps;

export type ExtendedTimeProps = {
    format?: string,
} & HtmlProps;

export type ExtendedFileUploadProps = {
    accept?: string,
    multiple?: boolean
} & HtmlProps;

export type ExtendedLinkProps = {
    href?: string,
    target?: '_blank' | '_self' | '_parent' | '_top'
} & HtmlProps;

export type ExtendedListProps = {
    listType?: 'ul'|'ol'|'dl',
    items?: Array<string>|Array<string[]>;
    subHeading?: string;
} & HtmlProps;

export type ExtendedProps = {
    id: string,
    className?: string,
    style?: string,
    location?: string
};

export type PropertyWindowProps = {
    control: AllControlProps,
    stepIndex: number,
    sectionIndex: number,
    columnIndex: number,
    controlIndex: number
};

export type DraggerProps = Array<{ id: string, content: string }>;
export type PanelDraggerProps = { [x: string]: DraggerProps };
export type ColumnsDraggerProps = {
    [x: string]: {
        [x: string]: Array<AllControlProps>
    }[]
};
export type ColumnIdProps = {
    [x: string]: Array<AllControlProps>
}[];
export type StepsProps = DataProps['steps'];
export type SectionProps = StepsProps[0]['sections'];
export type ColumnProps = SectionProps[0]['columns'];
export type ControlsProps = ColumnProps[0]['controls'];

export interface TabProps {
    tabHeaders: StepsProps;
}

export interface ColumnsProps {
    isDropDisabled: boolean;
    section: SectionProps[0];
    sectionIndex: number;
}

export interface ControlProps {
    control: AllControlProps;
    provided: DraggableProvided;
    index: number;
    sectionIndex: number;
    columnIndex: number;
}

export interface DroppableContainerProps {
    isDropDisabled: boolean;
    sectionIndex: number;
    column: ColumnProps[0];
    columnIndex: number;
}

export interface SectionsProps {
    isDropDisabled: boolean;
    sections: SectionProps;
    currentStep: number;
    index: number;
}

export interface TabPanelProps {
    children?: React.ReactNode;
    // tslint:disable-next-line: no-any
    index: any;
    // tslint:disable-next-line: no-any
    value: any;
}

export interface StepProps {
    steps: StepsProps;
    isDropDisabled: boolean;
}

export interface PanelProps {
    isDropDisabled: boolean;
    section: SectionProps[0];
    index: number;
}

export interface PanelState {
    items: Array<{ id: string, content: string }>;
    raised: boolean;
}

export interface AddressProps {
    id?: string;
    isRequired?: boolean;
    disabled?: boolean;
}

export type ExtendedAddressProps = {
    itemsPerColumn?: number,
} & HtmlProps;

export interface LeftBarProps {
    isDraggable: boolean;
    id: string;
}

export interface RenderLeftBarItemsProps {
    id: string;
    items: ControlsProps;
    isDraggable: boolean;
}

export interface ExpanderProps {
    panelHeader: string;
    dragHandleProps: DraggableProvidedDragHandleProps | null;
}

export type ModalProps = {
    open: boolean,
    id: string,
    title: string,
    content: string,
    showCancelButton?: boolean,
    modalCloseCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    okButtonText?: string,
    cancelButtonText?: string
};

export type HeaderProps = { id: string };

export type RightBarItemsProps = { propertyWindow: PropertyWindowProps };

export type AllControlProps = (
    ExtendedCheckboxProps &
    ExtendedSelectProps &
    ExtendedInputProps &
    ExtendedTextAreaProps &
    ExtendedDateProps &
    ExtendedTimeProps &
    ExtendedFileUploadProps &
    ExtendedLinkProps &
    ExtendedListProps &
    ExtendedAddressProps &
    ExtendedParagraphProps &
    ExtendedProps
);

export interface DataProps {
    steps: {
        id: string,
        name: string,
        sections: {
            id: string,
            name: string,
            columns: {
                id: string,
                name: string,
                controls: AllControlProps[]
            }[]
        }[]
    }[];
}

export enum types {
    ExtendedCheckboxProps = 'ExtendedCheckboxProps',
    ExtendedSelectProps = 'ExtendedSelectProps',
    ExtendedInputProps = 'ExtendedInputProps',
    ExtendedTextAreaProps = 'ExtendedTextAreaProps',
    ExtendedDateProps = 'ExtendedDateProps',
    ExtendedTimeProps = 'ExtendedTimeProps',
    ExtendedFileUploadProps = 'ExtendedFileUploadProps',
    ExtendedLinkProps = 'ExtendedLinkProps',
    ExtendedListProps = 'ExtendedListProps',
    ExtendedAddressProps = 'ExtendedAddressProps',
    ExtendedParagraphProps = 'ExtendedParagraphProps',
    ExtendedStepProps = 'ExtendedStepProps',
    ExtendedSectionProps = 'ExtendedSectionProps'
}

export enum controlTypes {
    textbox = 'textbox',
    dropdown = 'dropdown',
    address = 'address',
    paragraph = 'paragraph',
    datepicker = 'datepicker',
    checkbox = 'checkbox',
    radiobutton = 'radiobutton',
    textarea = 'textarea',
    timepicker = 'timepicker',
    fileupload = 'fileupload',
    link = 'link',
    list = 'list',
    multiselect = 'multiselect',
    step = 'step',
    section = 'section'
}

export var TypesProps: { [x: string]: { [x: string]: controlTypes } } = {
    HtmlProps: {
        name: controlTypes.textbox,
        type: controlTypes.dropdown,
        label: controlTypes.textbox,
        value: controlTypes.textbox,
        tooltip: controlTypes.textbox,
        validation: controlTypes.multiselect,
        defaultValue: controlTypes.textbox,
        visible: controlTypes.checkbox,
        autoFocus: controlTypes.checkbox,
        disabled: controlTypes.checkbox,
    }, ExtendedCheckboxProps: {
        checked: controlTypes.checkbox
    }, ExtendedParagraphProps: {
        textAlign: controlTypes.dropdown
    }, ExtendedSelectProps: {
        options: controlTypes.textarea,
        isMultiSelect: controlTypes.checkbox
    }, ExtendedInputProps: {
        placeholder: controlTypes.textbox,
        rows: controlTypes.textbox,
        rowsMax: controlTypes.textbox,
        multiline: controlTypes.checkbox
    }, ExtendedTextAreaProps: {
        cols: controlTypes.textbox
    }, ExtendedDateProps: {
        format: controlTypes.dropdown,
        startDate: controlTypes.textbox,
        endDate: controlTypes.textbox,
    }, ExtendedTimeProps: {
        format: controlTypes.dropdown,
    }, ExtendedFileUploadProps: {
        accept: controlTypes.textbox,
        multiple: controlTypes.checkbox
    }, ExtendedListProps: {
        listType: controlTypes.dropdown
    }, ExtendedLinkProps: {
        href: controlTypes.textbox,
        target: controlTypes.dropdown
    }, ExtendedStepProps: {
        name: controlTypes.textbox,
        label: controlTypes.textbox
    }, ExtendedSectionProps: {
        name: controlTypes.textbox,
        label: controlTypes.textbox
    }
};