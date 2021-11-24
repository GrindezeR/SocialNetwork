import {Field, Form, Formik, FormikHelpers} from "formik";
import s from "./MyPosts.module.css";
import React from "react";
import {maxLengthCreator} from "../../../Utils/validators/validators";
import {CustomInput} from "../../../common/FormsControls/FormsControls";

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
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitHandler}
            validateOnBlur={false}
            validateOnChange={false}>
            {
                ({errors}) => (
                    <Form className={s.newPost}>
                        <Field
                            component={CustomInput}
                            // className={s.textArea}
                            name={'newPostText'}
                            validate={maxLengthCreator(5)}
                            placeholder={'Type your post'}/>
                        {/*{errors.newPostText && <div className={s.error}>{errors.newPostText}</div>}*/}

                        <button className={s.submitButton} type={'submit'}>Send</button>
                    </Form>
                )
            }
        </Formik>
    );
}