import React from 'react'

export default function CardActivities(props) {
    let { name, image, image1, continente, price } = props
    return (
        <div className="card">
            <img src={image} alt={name} className="img-card"/>
            <img src={image1} alt={name} className="img-card"/>
            <div className="card__details">
                <div className="name">
                    <h4> {name}</h4>
                    <p>{`${continente}`}</p>
                    <p>Price: ${`${price}`}</p>
                </div>

            </div>
        </div>
    )
}