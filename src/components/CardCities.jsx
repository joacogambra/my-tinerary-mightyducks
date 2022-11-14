import React from 'react'
import { useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../Api/url'


export default function CardCities() {
    let [citis,setCitis] = useState([])
    useEffect(()=>{
        axios.get(`${BASE_URL}/cities/`)
        .then(res => setCitis(res.data.response))
        .catch(error=> console.log(error))
    }, [])

    let continents = []
    citis.forEach(e => { if (!continents.includes(e.continent)) {continents.push(e.continent)}})

    let [inputSearch, setInputSearch] = useState('')
    function search(e){
        setInputSearch(e.target.value)
        let query= `${BASE_URL}/cities?name=${e.target.value}&continent=${checkbox}`
        axios.get(query)
        .then(res=> setCitis(res.data.response))
        .catch(error=> console.log(error))
     } 

    let [checkbox, setCheckbox] = useState ('') 
    function checkboxSelected(status){
        setCheckbox(status.target.value)
        let query= `${BASE_URL}/cities?name=${inputSearch}&continent=${status.target.value}`
        axios.get(query)
        .then(res=> setCitis(res.data.response))
    }

    function renderCards(array){
        return array.map((i)=>(
            <Cards name={i.name} image={i.photo} continente={i.continent} category="Continent" page="city" id={i.id}/>))
    }         

    return (
        <div className='flex-column '>
            <div className='input-nav' role="search">
                <input  type="text" placeholder="Search" onChange={search} />
            <div className='checks wrap'>
                <input  type="checkbox" id={continents[0]} value={continents[0]} onChange={checkboxSelected}/> <label for={continents[0]}>{continents[0]}</label>
                <input  type="checkbox" id={continents[1]} value={continents[1]} onChange={checkboxSelected}/> <label for={continents[1]}>{continents[1]}</label>
                <input  type="checkbox" id={continents[2]} value={continents[2]} onChange={checkboxSelected}/> <label for={continents[2]}>{continents[2]}</label>
            </div>
            </div>
            <div className='background flex-row wrap gap' >
            { citis.length > 0 ?(renderCards(citis))
            :( <div className="card" >
                    <img src="/img/404.png" alt="NotFound"/>
                    <div className="card__details">
                    <div className="name">
                         <h4>"{inputSearch}"</h4>
                    <div className='card-button' onClick={()=> { window.location.reload() }}>Go Back</div>
                    </div>
                    </div>
                </div>)}
            </div>    
        </div>
    )
}