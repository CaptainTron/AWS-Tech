/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { AWSTech } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AWSTechCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fname: "",
    lname: "",
    rollnumber: "",
  };
  const [fname, setFname] = React.useState(initialValues.fname);
  const [lname, setLname] = React.useState(initialValues.lname);
  const [rollnumber, setRollnumber] = React.useState(initialValues.rollnumber);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFname(initialValues.fname);
    setLname(initialValues.lname);
    setRollnumber(initialValues.rollnumber);
    setErrors({});
  };
  const validations = {
    fname: [{ type: "Required" }],
    lname: [{ type: "Required" }],
    rollnumber: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fname,
          lname,
          rollnumber,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new AWSTech(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AWSTechCreateForm")}
      {...rest}
    >
      <TextField
        label="Fname"
        isRequired={true}
        isReadOnly={false}
        value={fname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fname: value,
              lname,
              rollnumber,
            };
            const result = onChange(modelFields);
            value = result?.fname ?? value;
          }
          if (errors.fname?.hasError) {
            runValidationTasks("fname", value);
          }
          setFname(value);
        }}
        onBlur={() => runValidationTasks("fname", fname)}
        errorMessage={errors.fname?.errorMessage}
        hasError={errors.fname?.hasError}
        {...getOverrideProps(overrides, "fname")}
      ></TextField>
      <TextField
        label="Lname"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={lname}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fname,
              lname: value,
              rollnumber,
            };
            const result = onChange(modelFields);
            value = result?.lname ?? value;
          }
          if (errors.lname?.hasError) {
            runValidationTasks("lname", value);
          }
          setLname(value);
        }}
        onBlur={() => runValidationTasks("lname", lname)}
        errorMessage={errors.lname?.errorMessage}
        hasError={errors.lname?.hasError}
        {...getOverrideProps(overrides, "lname")}
      ></TextField>
      <TextField
        label="Rollnumber"
        isRequired={true}
        isReadOnly={false}
        value={rollnumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fname,
              lname,
              rollnumber: value,
            };
            const result = onChange(modelFields);
            value = result?.rollnumber ?? value;
          }
          if (errors.rollnumber?.hasError) {
            runValidationTasks("rollnumber", value);
          }
          setRollnumber(value);
        }}
        onBlur={() => runValidationTasks("rollnumber", rollnumber)}
        errorMessage={errors.rollnumber?.errorMessage}
        hasError={errors.rollnumber?.hasError}
        {...getOverrideProps(overrides, "rollnumber")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
