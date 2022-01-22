import React from "react";
import s from "./ProfileData.module.css";
import {ProfileType, setProfileError, TMPData} from "../../../../Redux/Profile-reducer";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../Redux/Redux-store";

type ProfileDataProps = {
    profile: ProfileType
    setEditMode: (value: boolean) => void
    updateProfileData: (profileData: TMPData) => void
}

export const ProfileDataForm = ({profile, updateProfileData, setEditMode}: ProfileDataProps) => {
    const error = useSelector<AppStateType, string>(state => state.profilePage.error);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: profile.contacts
        },
        onSubmit: (values) => {
                updateProfileData(values);
                formik.resetForm();
                dispatch(setProfileError(''));
                setEditMode(false);
        }
    })

    const contactList = Object.keys(profile.contacts).map(key => {
        return <li className={s.title}>
            <span className={s.value}>{key}:</span>
            <input onFocus={(e) => e.currentTarget.select()} className={s.inputData} type="text"
                   placeholder={`${key} link`}
                   {...formik.getFieldProps(`contacts.${key}`)}/>
        </li>
    })

    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <div>
                <span className={s.value}>Name:</span>
                <input onFocus={(e) => e.currentTarget.select()} type="text"
                       placeholder={'Name'} {...formik.getFieldProps('fullName')}/>
            </div>
            <ul>
                <li className={s.title}>
                    <span className={s.value}>About me:</span>
                    <input onFocus={(e) => e.currentTarget.select()} type="text" placeholder={'About me'}
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
                        <input onFocus={(e) => e.currentTarget.select()} type="text" placeholder={'Job description'}
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