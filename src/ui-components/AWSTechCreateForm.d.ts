/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AWSTechCreateFormInputValues = {
    fname?: string;
    lname?: number;
    rollnumber?: string;
};
export declare type AWSTechCreateFormValidationValues = {
    fname?: ValidationFunction<string>;
    lname?: ValidationFunction<number>;
    rollnumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AWSTechCreateFormOverridesProps = {
    AWSTechCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fname?: PrimitiveOverrideProps<TextFieldProps>;
    lname?: PrimitiveOverrideProps<TextFieldProps>;
    rollnumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AWSTechCreateFormProps = React.PropsWithChildren<{
    overrides?: AWSTechCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AWSTechCreateFormInputValues) => AWSTechCreateFormInputValues;
    onSuccess?: (fields: AWSTechCreateFormInputValues) => void;
    onError?: (fields: AWSTechCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AWSTechCreateFormInputValues) => AWSTechCreateFormInputValues;
    onValidate?: AWSTechCreateFormValidationValues;
} & React.CSSProperties>;
export default function AWSTechCreateForm(props: AWSTechCreateFormProps): React.ReactElement;
