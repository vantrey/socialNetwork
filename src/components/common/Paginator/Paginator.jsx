import React from "react"
import styles from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pagesNumbersEls = Array.from({
        length: Math.ceil(totalUsersCount / pageSize)
    }).map((el, i) => {
        let pageNumber = i + 1
        return <span
            onClick={() => {
                onPageChanged(pageNumber)
            }}
            key={i}
            className={`${styles.pagesNumbers} ${(currentPage === pageNumber && styles.selected)
            || styles.usual}`}>
     {pageNumber} -
    </span>
    })

    return (
        <div>
            {pagesNumbersEls}
        </div>
    )
}

export default Paginator