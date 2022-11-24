import React from 'react'

export default function Select(props) {

    let {value1, value2, onchange}= props
  return (
    <select defaultValue={'desc'} onChange={onchange}>
        <option value="DEFAULT" disabled>SortBy:</option>
        <option value={value1} >Ascending</option>
        <option value={value2}>Descending</option>
      </select>
  )
}
