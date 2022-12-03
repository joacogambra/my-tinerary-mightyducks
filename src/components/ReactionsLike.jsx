import React from "react"

export default function ReactionsLike(props) {
  let {name, icon, iconBack, booleanReaction, count, onClick, itineraryId} = props


  return (
    <div className="likes">
      <p>{count}</p>
      <img onClick={onClick} src={booleanReaction ? icon : iconBack} alt={name} className="like-dislike"/>
    </div>
  )
}