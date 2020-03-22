import {
    ExtendedCheckboxProps,
    ExtendedSelectProps,
    HtmlProps,
    ExtendedInputProps,
    ExtendedTextAreaProps,
    ExtendedDateProps,
    ExtendedTimeProps,
    ExtendedFileUploadProps,
    ExtendedProps,
    ExtendedListProps,
    ExtendedLinkProps
} from '../../dynamic/renderViewConstants';

//#region Button

export interface ButtonProps extends HtmlProps, ExtendedProps {
    variant?: variant;
    color?: buttonColor;
    size?: size;
    orientation?: orientation;
}

export enum buttonColor {
    inherit = 'inherit',
    default = 'default',
    primary = 'primary',
    secondary = 'secondary'
}

export enum size {
    small = 'small',
    medium = 'medium',
    large = 'large'
}

export enum variant {
    contained = 'contained',
    outlined = 'outlined',
    text = ''
}

export enum orientation {
    vertical = 'vertical',
    horizontal = 'horizontal'
}

//#endregion

//#region Checkbox

export interface CheckBoxProps extends ExtendedCheckboxProps, ExtendedProps {
    color?: color;
    size?: size;
}

export enum color {
    default = 'default',
    primary = 'primary',
    secondary = 'secondary'
}

//#endregion

//#region Select

export interface SelectProps extends ExtendedSelectProps, ExtendedProps {
    color?: datePickerColor;
}

//#endregion

//#region  DateTimePicker

export enum datePickerColor {
    primary = 'primary',
    secondary = 'secondary'
}

export enum margin {
    none = 'none',
    dense = 'dense',
    normal = 'normal'
}

export enum datePickerVariant {
    dialog = 'dialog',
    inline = 'inline',
    static = 'static'
}

export interface DatePickerProps extends ExtendedDateProps, ExtendedProps {
    variant?: datePickerVariant;
    margin?: margin;
    color?: datePickerColor;
}

export interface TimePickerProps extends ExtendedTimeProps, ExtendedProps {
    variant?: datePickerVariant;
    margin?: margin;
    color?: datePickerColor;
}

//#endregion

//#region  Radio

export interface RadioProps extends ExtendedCheckboxProps, ExtendedProps {
    color?: color;
    size?: size;
    orientation?: orientation;
}

//#endregion

//#region TextArea

export interface TextAreaProps extends ExtendedTextAreaProps, ExtendedProps {
    variant?: textVariant;
    color?: textColor;
    size?: textSize;
}

export enum textColor {
    inherit = 'inherit',
    default = 'default',
    primary = 'primary',
    secondary = 'secondary'
}

export enum textSize {
    small = 'small',
    medium = 'medium'
}

export enum textVariant {
    filled = 'filled',
    outlined = 'outlined',
    standard = 'standard'
}

//#endregion

//#region Text

export interface InputTextProps extends ExtendedInputProps, ExtendedProps {
    color?: txtColor;
    size?: txtSize;
}

export interface StandardVarient extends InputTextProps {
    variant: 'standard';
}

export interface FilledTextFieldProps extends InputTextProps {
    variant?: 'filled';
}

export interface OutlinedTextFieldProps extends InputTextProps {
    variant?: 'outlined';
}

export enum txtColor {
    inherit = 'inherit',
    default = 'default',
    primary = 'primary',
    secondary = 'secondary'
}

export enum txtSize {
    small = 'small',
    medium = 'medium'
}

//#endregion

//#region Toggler

export interface TogglerProps extends HtmlProps, ExtendedProps {
    color?: color;
    size?: size;
}

//#endregion

//#region FileUpload

export interface FileUploadProps extends ExtendedFileUploadProps, ButtonProps {
    onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

//#endregion

//#region List

export interface ListProps extends ExtendedListProps {
    
}

//#endregion

//#region List

export interface LinkProps extends ExtendedLinkProps {
    onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

//#endregion