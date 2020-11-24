import React from 'react';
import sprites from '../../../assets/svg/sprites.svg';

function DisplaySvg(props) {
    return (
        <svg onClick={props.clicked} style={{display:'block',width:'2rem',height: '2rem',...props.style}}>
            <use href={`${sprites}#${props.icon}`} />
        </svg>
    )
}

export default DisplaySvg
