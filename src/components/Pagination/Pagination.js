import React from 'react'
import classes from './Pagination.module.scss';
import { Link } from 'react-router-dom'

function Pagination() {
    return (
        <div className={classes.pagination}>
            <Link to='/' className={[classes.pagination__link,classes.pagination__active].join(' ')} >Prev</Link>
            <Link to='/' className={classes.pagination__link} >1</Link>
            <Link to='/' className={classes.pagination__link} >2</Link>
            <Link to='/' className={classes.pagination__link} >3</Link>
            <Link to='/' className={classes.pagination__link} >Next</Link>

        </div>
    )
}

export default Pagination
