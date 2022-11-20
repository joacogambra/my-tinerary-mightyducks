import React from 'react'
import Cards from './Cards'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import citiesAction from '../redux/actions/citiesAction'
import citiesFiltered from '../redux/actions/citiesFiltered'
import { BASE_URL } from '../Api/url'


export default function CardCities() {  
    const {getCities, getFiltering} = citiesAction  
    // useEffect(()=>{
    //     dispatch(citiesAction.getCities())
    //     // eslint-disable-next-line
    // },[])
    const filter = useSelector(state => state.citiesFilterReducer)
    let search = useRef()
    let [checkBox, setCheckBox] = useState([])
    const {checkboxs, inputSearch} = citiesFiltered
    let cities = useSelector(store => store.citiesReducer.cities)
    const dispatch = useDispatch()
    
    useEffect(() => {
        axios.get(`${BASE_URL}/cities`)
            .then(res => setCheckBox(res.data.response))
            .catch(error => console.log(error.message))
    }, [])
    useEffect(() => {
        if(cities.length < 1 && filter.name === '' 
        && filter.continent.length < 1){
            dispatch(getCities())
        } else{
            dispatch(getFiltering(filter))
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        dispatch(getFiltering(filter))
        // eslint-disable-next-line
    }, [filter])
    
    let continents = []
    cities.forEach(e => { if (!continents.includes(e.continent)) {continents.push(e.continent)}})

    let citiesChecks = (e) => {
        let selected = [...filter.continent]
        if(e.target.checked){
            selected.push(e.target.value)
        }else{
            selected = selected.filter(event => event !== e.target.value)
        }
        let defaultCheck = selected
        dispatch(checkboxs(defaultCheck))
    }

    let citiesFound = () => {
        let text = search.current.value.trim()
        dispatch(inputSearch(text))
    } 

    return (
        <>
            <div className='input-nav' role="search">
                <input  type="text" placeholder="Search" ref={search} onChange={citiesFound} value={filter.name} />
            {Array.from(new Set(checkBox?.map(i => i.continent))).map(i => {
            return(
            <div className='checks p-5'>
                <input  type="checkbox" checked={filter.continent.includes(i) ? true : false} value={i} onClick={citiesChecks}/> 
                <label key={i}>{i}</label>
            </div> )})}
            </div>
            <div className='background flex-row wrap gap' >
            { cities.length > 0 ? cities.map((i)=>(
                    <Cards key={i.name} name={i.name} image={i.photo} continente={i.continent} category="Continent" page="city" id={i._id}/>))
                    : ( <div className="card" >
                    <img src="/img/404.png" alt="NotFound" className='cities404'/>
                    <div className="card__details">                  
                    <div className='button' onClick={()=> { window.location.reload() }}>Go Back</div>
                    </div>
                </div>)}
            </div>    
        </>
    )
}