import {ADD_DECK, REMOVE_DECK, ADD_CARD_TO_DECK, GET_DECK_FROM_ID, GET_DECKS} from '../actions/deck'
import { deleteDeck } from '../util/api'

export const deck = (state={decks:{}, deck:null}, action)  => {
    switch(action.type) {
        case GET_DECKS:
            return {
            ...state,
            decks: action.payload
        }
        case ADD_DECK: 
            return {
                ...state,
                decks: {
                    ...state.decks,
                    ...action.payload
                }
            }
        case GET_DECK_FROM_ID: 
        console.log('payload:',action.payload)
            return {
                ...state,
                deck:action.payload
            }
        case ADD_CARD_TO_DECK: 
           return {
               ...state,
               decks:action.payload
           }
       case REMOVE_DECK:
           return {
              ...state,
              decks:deleteDeck(action.payload, state.decks)
           }
        default:
           return state;
    }
}




