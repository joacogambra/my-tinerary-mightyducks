import React from 'react'

export default function ArrowLeft(props) {
    let {estilo} = props
    let {direction} = props
    return (
            <img src='./img/arrowleft.png' alt='arrow left' className={`${estilo}`} onClick={direction}></img>
    )
}
