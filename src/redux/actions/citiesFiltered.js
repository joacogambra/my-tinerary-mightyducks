import {createAction} from '@reduxjs/toolkit'

const checkboxs = createAction('checkboxs', (checkbox) => {
    return { payload:{continent: checkbox}}
})
const inputSearch = createAction('inputSearch', (search) => {
    return {payload:{name: search}}
})
const citiesFiltered = {checkboxs, inputSearch}
export default citiesFiltered