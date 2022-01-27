import React from "react";
import { NavLink } from "react-router-dom";
import s from './ErrorPage.module.css';
import error from '../../common/images/404.png';

export const ErrorPage = () => {
    return (
        <div className={s.wrapper}>
                <div className={s.error}>
                    <span>4</span>
                    <img className={s.image} src={error} alt="404" width={'200px'}/>
                    <span>4</span>
                </div>
                <p className={s.text}>
                    The page you are looking <span>NOT FOUND!</span> So sad...
                </p>
                <NavLink to={'/'} className={s.home}>Return Home</NavLink>
        </div>
    );
}