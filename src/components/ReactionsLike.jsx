import React from "react"
import actionForReaction from "../redux/actions/actionForReaction"

export default function ReactionsLike(props) {
  let {name, icon, iconBack, booleanReaction, count, onClick, itineraryId} = props
  let { getReactions} = actionForReaction


  return (
    <div className="likes">
      <p>{count}</p>
      <img onClick={onClick} src={booleanReaction ? icon : iconBack} alt={name} className="like-dislike"/>
    </div>
  )
}