import React from "react";
import {FieldProps} from "formik";
import s from './FormsControls.module.css';

export const CustomInput = ({form: {touched, errors}, field, ...props}: FieldProps) => {
    let err = Object.values(errors);
    return (
        <div className={s.wrapper}>
            <input className={err.length > 0 ? s.error : s.input} {...field} {...props}/>
            <div className={s.errorText}>
                {touched && errors && err[0]}
            </div>
        </div>
    );
}