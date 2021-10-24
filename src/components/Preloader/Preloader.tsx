import React from "react";
import s from './Preloader.module.css';

type PreloaderPropsType = {
    isFetching: boolean
}

export const Preloader = ({isFetching}: PreloaderPropsType) => {
    return (
        <>
            {isFetching && <div className={s.preloader}/>}
        </>
    );
}