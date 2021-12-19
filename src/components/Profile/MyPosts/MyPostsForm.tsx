import {Field, Form, Formik, FormikHelpers} from "formik";
import s from "./MyPosts.module.css";
import React from "react";
import {maxLengthCreator} from "../../../Utils/validators/validators";
import {CustomInput} from "../../../common/FormsControls/FormsControls";
import {FieldProps} from "formik/dist/Field";

type NewPostType = {
    newPostText: string
}
type MyPostsFormPropsType = {
    addPost: (newPostText: string) => void
}
export const MyPostsForm = ({addPost}: MyPostsFormPropsType) => {

    const initialValues: NewPostType = {
        newPostText: ''
    }

    const onSubmitHandler = (values: NewPostType, actions: FormikHelpers<NewPostType>) => {
        addPost(values.newPostText);
        actions.resetForm();
        actions.setSubmitting(false);
    }

    const customField = (props: FieldProps) => {
        return <CustomInput ClassName={s.customInput}
                            placeholder={`Type your post`}
                            {...props}/>
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitHandler}
            validateOnBlur={false}>
                    <Form className={s.newPost}>
                        <Field name={'newPostText'}
                               validate={maxLengthCreator(5)}
                               placeholder={'Type your post'}>
                            {customField}
                        </Field>
                        <button className={s.submitButton} type={'submit'}>Send</button>
                    </Form>
        </Formik>
    );
}