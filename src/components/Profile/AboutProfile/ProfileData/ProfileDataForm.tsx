import React, {ChangeEvent} from "react";
import s from "./ProfileData.module.css";
import {ProfileType, setProfileError, ProfileFormDataType} from "../../../../Redux/Profile-reducer";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";

type ProfileDataProps = {
    profile: ProfileType
    setEditMode: (value: boolean) => void
    updateProfileData: (profileData: ProfileFormDataType) => Promise<{}>
}

export const ProfileDataForm = ({profile, updateProfileData, setEditMode}: ProfileDataProps) => {
    const dispatch = useDispatch();
    const selectAll = (e: ChangeEvent<HTMLInputElement>) => e.currentTarget.select()
    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: profile.contacts
        },
        onSubmit: (values) => {
            updateProfileData(values)
                .then(() => {
                    formik.resetForm();
                    dispatch(setProfileError(''));
                    setEditMode(false);
                });

        }
    })

    const contactList = Object.keys(profile.contacts).map(key => {
        return <li className={s.title}>
            <span className={s.value}>{key}:</span>
            <input onFocus={selectAll} className={s.inputData} type="text"
                   placeholder={`${key} link`}
                   {...formik.getFieldProps(`contacts.${key}`)}/>
        </li>
    })

    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <div>
                <span className={s.value}>Name:</span>
                <input onFocus={selectAll} type="text"
                       placeholder={'Name'} {...formik.getFieldProps('fullName')}/>
            </div>
            <ul>
                <li className={s.title}>
                    <span className={s.value}>About me:</span>
                    <input onFocus={selectAll} type="text" placeholder={'About me'}
                           {...formik.getFieldProps('aboutMe')}/>
                </li>
                <li className={s.title}>
                    <label>
                        <span className={s.value}>Looking for job</span>
                        <input type="checkbox" placeholder={'Looking for a job'}
                               checked={formik.values.lookingForAJob}
                               {...formik.getFieldProps('lookingForAJob')}/>
                    </label>
                </li>
                {
                    formik.values.lookingForAJob &&
                    <li className={s.title}>
                        <span className={s.value}>Job description:</span>
                        <input onFocus={selectAll} type="text" placeholder={'Job description'}
                               {...formik.getFieldProps('lookingForAJobDescription')}
                        />
                    </li>
                }
                <li className={s.value}>Contacts:</li>
                <ul>{contactList}</ul>
            </ul>
            <button className={s.saveBtn} type={'submit'}>Save</button>
        </form>
    );
}