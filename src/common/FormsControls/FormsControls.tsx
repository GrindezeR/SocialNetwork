import React from "react";
import {FieldProps} from "formik";
import s from './FormsControls.module.css';

type CustomInputPropsType = FieldProps & {
    ClassName: string
    placeholder: string
}

export const CustomInput = ({form: {touched, errors}, field, ClassName, placeholder, ...props}: CustomInputPropsType) => {

    return (
        <>
            <input placeholder={placeholder} className={(touched && errors[field.name]) ? `${ClassName} ${s.error}` : ClassName} {...field} {...props}/>
            <div className={s.errorText}>
                {touched && errors[field.name]}
            </div>
        </>
    );
}