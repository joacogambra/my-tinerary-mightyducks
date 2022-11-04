import React from 'react'

export default function ArrowRight(props) {
    let {estilo} = props
    let {direction} = props
    return (  
            <img src='./img/arrowright.png' alt='arrow right' className={`${estilo}`} onClick={direction}></img>
    )
}
