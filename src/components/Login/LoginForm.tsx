import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {login} from "../../Redux/Auth-reducer";
import s from "./Login.module.css";
import React from "react";
import {AppStateType} from "../../Redux/Redux-store";
import {validateFormik} from "../../Utils/validators/validators";

export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const LoginForm = () => {
    const dispatch = useDispatch();
    const errorLogin = useSelector<AppStateType, string>(state => state.auth.error);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
        onSubmit: values => {
            // console.log({values});
            let {email, password, remember} = values
            dispatch(login(email, password, remember));
            formik.resetForm();
        },
        validate: values => {
            const errors: FormikErrorType = {};
            validateFormik(values, errors, 3);
        }
    });

    return (
        <form className={s.formWrapper} onSubmit={formik.handleSubmit}>
            <div>
                <div>Email</div>
                <input className={s.inputs}
                       placeholder="Type email"
                       {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email &&
                    <span className={s.error}>{formik.errors.email}</span>}
            </div>

            <div>
                <div>Password</div>
                <input className={s.inputs}
                       type="password"
                       placeholder="Type password"
                       {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password &&
                    <span className={s.error}>{formik.errors.password}</span>}
            </div>
            <div>
                <input type={"checkbox"} {...formik.getFieldProps('remember')}/>
                <span>Remember me</span>
            </div>
            {errorLogin && <div className={s.error}>{errorLogin}</div>}
            <button className={s.loginBtn} type="submit">LogIn</button>
        </form>
    );
}