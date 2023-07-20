/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AWSTech } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AWSTechUpdateFormInputValues = {
    fname?: string;
    lname?: number;
    rollnumber?: string;
};
export declare type AWSTechUpdateFormValidationValues = {
    fname?: ValidationFunction<string>;
    lname?: ValidationFunction<number>;
    rollnumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AWSTechUpdateFormOverridesProps = {
    AWSTechUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fname?: PrimitiveOverrideProps<TextFieldProps>;
    lname?: PrimitiveOverrideProps<TextFieldProps>;
    rollnumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AWSTechUpdateFormProps = React.PropsWithChildren<{
    overrides?: AWSTechUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aWSTech?: AWSTech;
    onSubmit?: (fields: AWSTechUpdateFormInputValues) => AWSTechUpdateFormInputValues;
    onSuccess?: (fields: AWSTechUpdateFormInputValues) => void;
    onError?: (fields: AWSTechUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AWSTechUpdateFormInputValues) => AWSTechUpdateFormInputValues;
    onValidate?: AWSTechUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AWSTechUpdateForm(props: AWSTechUpdateFormProps): React.ReactElement;
