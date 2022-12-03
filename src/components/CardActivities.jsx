import React from 'react'
import ReactionsLike from './ReactionsLike'
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import actionForReaction from "../redux/actions/actionForReaction"
import axios from 'axios'
import { BASE_URL } from '../Api/url'

export default function CardActivities(props) {
    let { name, image, image1, continente, price, itinerary } = props
    let { token } = useSelector(state => state.userReducer)
    let {reactions, getReactions} = actionForReaction
    let dispatch = useDispatch()
    let {allReactions} = useSelector(state =>state.reactionReducer)
    
    const onClick = (name, id) => {
        dispatch(reactions({name, id, token}))
    } 

    useEffect(() => {
        let headers = { headers: { Authorization: `Bearer ${token}`}}
        dispatch(getReactions({key: itinerary._id, headers}))
        // eslint-disable-next-line
    }, [])         
     

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
            <div className='reaction-reaction reaction'>
            {allReactions?.filter((reaction)=>(reaction.itineraryId===itinerary._id)).map((i)=>(<ReactionsLike key={i._id} name={i.name} icon={i.icon} iconBack={i.iconBack} 
            booleanReaction={i.booleanReaction} count={i.userId} onClick={() => onClick(i.name, itinerary._id)}/>)) }
            </div>
            
        </div>
    )
}