import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './modules'

const rootReducer = combineReducers(reducers)

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
)