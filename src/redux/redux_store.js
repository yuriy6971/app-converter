import {combineReducers, createStore,applyMiddleware} from 'redux'
import convertor_reducer from './convertor_reducer'
import thunkMiddleware from 'redux-thunk'
import content_reducer from './content_reducer'


let reducers = combineReducers({
    convertorPage : convertor_reducer,
    contentPage : content_reducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store

export default store