import React from "react";
import {FieldProps} from "formik";
import s from './FormsControls.module.css';

type CustomInputPropsType = FieldProps & {
    ClassName: string
    placeholder: string
}

export const CustomInput = ({form: {touched, errors}, field,
                                ClassName, placeholder, ...props}: CustomInputPropsType) => {

    const customClass = (touched && errors[field.name]) ? `${ClassName} ${s.error}` : ClassName

    return (
        <>
            <input
                placeholder={placeholder}
                className={customClass} {...field} {...props}/>
            <div className={s.errorText}>
                {touched && errors[field.name]}
            </div>
        </>
    );
}