import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {login} from "../../Redux/Auth-reducer";
import s from "./Login.module.css";
import React from "react";
import {AppStateType} from "../../Redux/Redux-store";
import {validateFormik} from "../../Utils/validators/validators";
import sc from '../../common/styles/commonStyles.module.css';

export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const LoginForm = () => {
    const dispatch = useDispatch();
    const errorLogin = useSelector<AppStateType, string>(state => state.auth.error);
    const captchaUrl = useSelector<AppStateType, string>(state => state.auth.captcha);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false,
            captcha: '',
        },
        onSubmit: values => {
            let {email, password, remember, captcha} = values
            dispatch(login(email, password, remember, captcha));
            formik.resetForm();
        },
        validate: values => {
            const errors: FormikErrorType = {};
            validateFormik(values, errors, 3);
        }
    });

    return (
        <form className={s.formWrapper} autoComplete={'on'}
              onSubmit={formik.handleSubmit}>
            <datalist id="suggestions">
                <option value="valariot@gmail.com"/>
            </datalist>
            <div>
                <div>Email</div>
                <input className={s.inputs}
                       list="suggestions"
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
                <label>
                    <input type={"checkbox"} {...formik.getFieldProps('remember')}/>
                    <span className={s.rememberMe}>Remember me</span>
                </label>
            </div>
            {captchaUrl &&
                <div className={s.captchaWrapper}>
                    <img src={captchaUrl} alt="captcha" width={'140px'}/>
                    <input className={s.captcha}
                           type="text"
                           {...formik.getFieldProps('captcha')}/>
                </div>}
            {errorLogin && <div className={s.error}>{errorLogin}</div>}
            <button className={sc.button} type="submit">LogIn</button>
        </form>
    );
}