import Skeleton from 'react-loading-skeleton'
import classes from './Skeleton.module.scss';
export const BlogSkeleton = (props) => {
    let skeletonStyle = {
        width: '100%',
        minHeight: '450px',
        display: 'block',
        
    }
    return(
            <div className={classes.skeleton}>
                <Skeleton  style={skeletonStyle} />
                <Skeleton width='75%' height='35px'  />
                <div>
                    <Skeleton circle={true} width='75px' height='75px' />
                    <div>
                        <Skeleton width='150px' height='25px' />
                        <Skeleton width='150px' height='25px' />

                    </div>
                </div>
                
            </div>
            
        
    )
}


export const LatestPostSkeleton = () => {
    return (
        <div className={classes.latestPost}>
            <Skeleton width='60px' height='60px' />

            <div>
                <Skeleton width='100%' height='10px' />
                <Skeleton width='100%' height='10px' />
                <Skeleton width='100%' height='10px' />
            
            </div>
        </div>
    )
}