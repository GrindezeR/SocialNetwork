import {useDispatch} from "react-redux";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {login} from "../../Redux/Auth-reducer";
import s from "./Login.module.css";
import React from "react";
import {required} from "../../Utils/validators/validators";

type LoginFormType = {
    email: string
    password: string
    remember: boolean
}
export const LoginForm = () => {
    const dispatch = useDispatch();
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
                onSubmit={onSubmitHandler}
                validateOnChange={false}>
            {
                ({errors}) => (
                    <Form className={s.formWrapper}>
                        <div>
                            <div>Email</div>
                            <Field
                                validate={required}
                                name="email"
                                placeholder="Type email"/>
                            {errors.email && <div className={s.error}>{errors.email}</div>}
                        </div>

                        <div>
                            <div>Password</div>
                            <Field
                                validate={required}
                                type="password"
                                name="password"
                                placeholder="Type password"/>

                            {errors.password && <div className={s.error}>{errors.password}</div>}
                        </div>

                        <div>
                            <Field type={"checkbox"} name={"remember"}/>
                            <span>Remember me</span>
                        </div>
                        <button className={s.loginBtn} type="submit">LogIn</button>
                    </Form>
                )
            }
        </Formik>
    );
}