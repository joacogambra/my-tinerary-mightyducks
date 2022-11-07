import React from 'react'
import cities from '../data/cities'
import CityCard from './CityCard'
import { useState } from 'react'
import NewCityCard from './NewCityCard'

export default function CardCities() {
    let continents = []
    cities.forEach(e => {
        if (!continents.includes(e.continent)) {
            continents.push(e.continent)
        }
    })
    console.log(continents)
    let status = {
        Asia: false,
        Europe : false,
        America: false,
    }

    let [inputSearch, setInputSearch] = useState('')
    let [checkbox, setCheckbox] = useState (status)
    console.log(inputSearch);

    let search = (e) => {setInputSearch(e.target.value) 
        console.log(e.target.value);
    }
    let checkboxSelected = (e) => {setCheckbox ((checkbox) => ({...checkbox,[e.target.value] : e.target.checked}))}
        console.log(checkbox);

    // let cruzados = checkboxSelected(search.value)
    // console.log(cruzados);

    return (
        <div className='cardcities'>
            <div class="search" role="search">
                <input id="searchinput" type="text" placeholder="Search" onChange={search} />
            </div>
            <div id='contain-checks'>
                <input className='cpa' type="checkbox" id={continents[0]} value={continents[0]} onChange={checkboxSelected}/> <label for={continents[0]}>{continents[0]}</label>
                <input className='cpa' type="checkbox" id={continents[1]} value={continents[1]} onChange={checkboxSelected}/> <label for={continents[1]}>{continents[1]}</label>
                <input className='cpa' type="checkbox" id={continents[2]} value={continents[2]} onChange={checkboxSelected}/> <label for={continents[2]}>{continents[2]}</label>
            </div>
            <div className='contain-citycards'>
                {cities.map(cities=><CityCard key={cities.name} cities={cities} />)}
                {/* despues de agregar una ciudad en el formulario descomentar NewCityCard para verla renderizada */}
                {/* <NewCityCard/> */}
            </div>    
        </div>
    )
}
