import React from "react";
import s from "./Paginator.module.css";


type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    getItems: (n: number) => void
}
export const Paginator = React.memo(({totalCount, pageSize, currentPage, getItems}: PropsType) => {
    let pageCounts = Math.ceil(totalCount / pageSize);
    const pages = [];

    // Google Pagination
    let pageLimit = 10;
    let startPage = currentPage - pageLimit / 2;
    let endPage = currentPage + pageLimit / 2;

    if (startPage < 1) {
        startPage = 1;
        endPage = pageLimit;
    }

    if (endPage > pageCounts) {
        endPage = pageCounts;
        startPage = pageCounts - pageLimit;
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    // for (let i = 1; i <= pageCounts; i++) {
    //     pages.push(i);
    // }

    const pageList = pages.map(n => {
        const onClickGetUsersByPage = () => {
            document.documentElement.scrollTop = 0;
            getItems(n);
        }

        return (
            <span key={n} className={currentPage === n ? s.currentPage : s.page}
                  onClick={onClickGetUsersByPage}>{n}
            </span>
        );
    })

    //Functions Buttons
    const firstPageHandler = () => {
        document.documentElement.scrollTop = 0;
        getItems(1);
    }
    const lastPageHandler = () => {
        document.documentElement.scrollTop = 0;
        getItems(pageCounts);
    }
    // const nextPageHandler = () => {
    //     document.documentElement.scrollTop = 0;
    //     getItems(currentPage + 1);
    // }
    // const previousPageHandler = () => {
    //     document.documentElement.scrollTop = 0;
    //     getItems(currentPage - 1);
    // }

    //COMPLETE JSX
    return (
        <div className={s.pagesWrapper}>
            <span className={s.page} onClick={firstPageHandler}>{'<<'}</span>
            {/*<span className={s.page} onClick={previousPageHandler}>{'<'}</span>*/}
            <div className={s.pageList}>
                {pageList}
            </div>
            {/*<span className={s.page} onClick={nextPageHandler}>{'>'}</span>*/}
            <span className={s.page} onClick={lastPageHandler}>{'>>'}</span>
        </div>
    );
})