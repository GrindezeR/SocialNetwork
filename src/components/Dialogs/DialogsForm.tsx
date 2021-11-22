import {Field, Form, Formik, FormikHelpers} from "formik";
import s from "./Dialogs.module.css";
import React from "react";

type DialogsFormType = {
    addMessage: (newMessageText: string) => void
}

type MessageFormValues = {
    message: string
}

export const DialogsForm = ({addMessage}: DialogsFormType) => {
    const initialValues: MessageFormValues = {
        message: ''
    }

    const onSubmitHandler = (values: MessageFormValues, actions: FormikHelpers<MessageFormValues>) => {
        // console.log(values.message);
        addMessage(values.message);
        actions.resetForm();
        actions.setSubmitting(false);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
            <Form className={s.messageSendWrapper}>
                <Field className={s.textarea} name={'message'} placeholder={'Type your message'}/>
                <button className={s.submitBtn} type={'submit'}>Send</button>
            </Form>
        </Formik>
    );
}