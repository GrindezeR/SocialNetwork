import {Field, Form, Formik, FormikHelpers} from "formik";
import s from "./MyPosts.module.css";
import React from "react";

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
        // console.log(values.post);

        addPost(values.newPostText);
        actions.resetForm();
        actions.setSubmitting(false);
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
            <Form className={s.newPost}>
                <Field className={s.textArea} name={'newPostText'} placeholder={'Type your post'}/>
                <button className={s.submitButton} type={'submit'}>Send</button>
            </Form>
        </Formik>
    );
}