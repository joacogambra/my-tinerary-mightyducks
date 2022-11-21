import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/mainReducer";
import rootReducer from './reducers/rootReducer'

export const store = configureStore({
    reducer:{ mainReducer, rootReducer}
})