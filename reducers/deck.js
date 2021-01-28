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
        console.log({...action.payload})
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [action.payload.id]: action.payload
                }
            }
        case GET_DECK_FROM_ID: 
            return {
                ...state,
                deck:action.payload
            }
        case ADD_CARD_TO_DECK: 
           return {
               ...state,
               deck:action.payload,
               decks: {
                   ...state.decks,
                   [action.payload.id]: action.payload
               }
           }
       case REMOVE_DECK:
           return {
              ...state,
              deck:null,
              decks:deleteDeck(action.payload, state.decks)
           }
        default:
           return state;
    }
}




