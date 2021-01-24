import { combineReducers } from 'redux'
import { deck } from './deck'
import { quiz } from './quiz'

export default combineReducers({
    quiz,
    deck,
})