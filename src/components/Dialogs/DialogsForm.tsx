import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import s from "./DialogsForm.module.css";
import React from "react";
import {CustomInput} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../Utils/validators/validators";

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
        addMessage(values.message);
        actions.resetForm();
        actions.setSubmitting(false);
    }

    const customField = (props: FieldProps) => {
        return <CustomInput ClassName={s.customInput}
                            placeholder={`Type you message`}
                            {...props}/>
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
            {
                ({errors}) => (
                    <Form className={s.messageSendWrapper}>
                        <Field name={'message'}
                               validate={maxLengthCreator(10)}>
                            {customField}
                        </Field>
                        <div>
                            <button className={s.submitBtn} type={'submit'}>Send</button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    );
}