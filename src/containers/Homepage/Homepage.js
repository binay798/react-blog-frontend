import React from 'react'
import Blog from '../../components/Blog/Blog';
import classes from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import LatestPosts from './../../components/LatestPosts/LatestPosts';
import Pagination from './../../components/Pagination/Pagination'

function Homepage() {
    return (
        <div className={classes.homepage}>
            <div className={classes.homepage__left}>
                <div className={classes.homepage__blog}>
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
                <div className={classes.homepage__pagination}>
                    <Pagination />
                </div>

            </div>
            <div className={classes.homepage__right}>
                {/* Categories */}
                <div className={classes.categories}>
                    <h3>Categories</h3>
                    <ul className={classes.categories__list}>
                        <li>
                            <Link to='/'>Fashion(<span>5</span>)</Link>
                        </li>
                        <li>
                            <Link to='/'>Technology(<span>15</span>)</Link>
                        </li>
                        <li>
                            <Link to='/'>Travel(<span>50</span>)</Link>
                        </li>
                        <li>
                            <Link to='/'>Food(<span>6</span>)</Link>
                        </li>
                        <li>
                            <Link to='/'>Photography(<span>99</span>)</Link>
                        </li>
                    </ul>
                </div>
                {/* Latest Posts */}

                <LatestPosts />
            </div>
        </div>
    )
}

export default Homepage
