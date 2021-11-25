import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {login} from "../../Redux/Auth-reducer";
import s from "./Login.module.css";
import React from "react";
import {required} from "../../Utils/validators/validators";
import {AppStateType} from "../../Redux/Redux-store";

type LoginFormType = {
    email: string
    password: string
    remember: boolean
}
export const LoginForm = () => {
    const dispatch = useDispatch();
    const errorLogin = useSelector<AppStateType, string>(state => state.auth.error);

    const initialValues: LoginFormType = {
        email: '',
        password: '',
        remember: false,
    };

    const onSubmitHandler = (values: LoginFormType, actions: FormikHelpers<LoginFormType>) => {
        console.log({values, actions});

        let {email, password, remember} = values
        dispatch(login(email, password, remember));
        actions.resetForm();
        actions.setSubmitting(false);
    }

    return (
        <Formik initialValues={initialValues}
                onSubmit={onSubmitHandler}>
            {
                ({errors}) => {
                    return (
                        <Form className={s.formWrapper}>
                            <div>
                                <div>Email</div>
                                <Field className={s.inputs}
                                       validate={required}
                                       name="email"
                                       placeholder="Type email"/>
                                {errors.email && <span className={s.error}>{errors.email}</span>}
                            </div>

                            <div>
                                <div>Password</div>
                                <Field className={s.inputs}
                                       validate={required}
                                       type="password"
                                       name="password"
                                       placeholder="Type password"/>
                                {errors.password && <span className={s.error}>{errors.password}</span>}
                            </div>
                            <div>
                                <Field type={"checkbox"} name={"remember"}/>
                                <span>Remember me</span>
                            </div>
                            {errorLogin && <div className={s.error}>{errorLogin}</div>}
                            <button className={s.loginBtn} type="submit">LogIn</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}