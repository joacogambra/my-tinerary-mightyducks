import React from 'react'
import hotels from '../data/hotels'
import {useState} from 'react'
import InputSearch from './InputSearch'
import Select from './Select'
import Cards from './Cards'


export default function Hotels() {
let [change, setChange]= useState('')
let [sortOrder, setSortOrder]= useState("all")

let hotelsB = [...hotels]

    function search(){

        if (change !== ""){
         let inputsearch= hotels.filter(hotels=>hotels.name.toLowerCase().includes((change).toLowerCase()))
        return inputsearch}
        else return hotels
        
        }

     function sortBy(array, sortOrder){
        if (sortOrder === "asc"){
           let asc= [...array].sort((a, b) => (a.name > b.name) ? 1 : -1)
           return asc
        } else if (sortOrder === "desc"){
           let desc= [...array].sort((a, b) => (a.name < b.name) ? 1 : -1)
           return desc
        } else{
         return array
        }
     }

     function cruzados(){
       let text= search()
       let sort= (sortBy(text, sortOrder))
       return sort
     }
     let print = cruzados()
     console.log(print);
console.log("---------Search Results---------")
console.log(search())
console.log("---------SortBy Results---------")
console.log(sortBy(hotelsB, sortOrder))
console.log("-----cruzados------")
console.log(print);
  function printCards(array){
   return array.map((items)=>(
      <Cards key={items.id} name={items.name} image={items.photo[0]} continente={items.capacity} category="Capacity" id={items.id}></Cards>
   ))
  }

  return (
   <>
   <div className='hotels'>
    <div className='input-nav'>
    <InputSearch setchange={setChange}/>
    <Select value1="asc" value2="desc" onchange={setSortOrder}></Select>
      </div>
      <div className='containerHotels'>
      {printCards(print)}
      </div>
      </div>
      </>
  )
}
