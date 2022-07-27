import { combineReducers, legacy_createStore }from "redux";
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import navbarReducer from './navbarReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer,

}) 


let store = legacy_createStore(reducers)

export default store