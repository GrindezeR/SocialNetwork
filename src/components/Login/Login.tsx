import React from "react";
import s from './Login.module.css';
import {Field, Form, Formik, FormikHelpers, FormikValues} from "formik";
import {authUser} from "../../Redux/Auth-reducer";
import {useDispatch} from "react-redux";

type LoginPropsType = {}

type MyFormValues = {
    email: string
    password: string
    remember: boolean
}

export const Login = (props: LoginPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Login to Social Network</div>
            <LoginForm/>
        </div>
    );
}

const LoginForm = () => {
    const dispatch = useDispatch();
    const initialValues: MyFormValues = {
        email: '',
        password: '',
        remember: false,
    };

    const onSubmitHandler = (values: FormikValues, actions: FormikHelpers<MyFormValues>) => {
        console.log({values, actions});
        let {email, password, remember} = values
        dispatch(authUser(email, password, remember));
        actions.resetForm();
        actions.setSubmitting(false);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
            <Form className={s.formWrapper}>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Type email"/>

                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" placeholder="Type password"/>
                <div>
                    <Field type={"checkbox"} name={"remember"}/>
                    <label>Remember me</label>
                </div>
                <button className={s.loginBtn} type="submit">LogIn</button>
            </Form>
        </Formik>
    );
}

