import {ADD_DECK, REMOVE_DECK, ADD_CARD, GET_DECK_FROM_ID} from '../actions/deck'


export const deck = (state={decks:{}, deck:null}, action)  => {
    switch(action.type) {
        case ADD_DECK: 
            return {
                ...state,
                decks: {
                    ...state.decks,
                    ...action.payload
                }
            }
        case GET_DECK_FROM_ID: 
        console.log(action.payload)
            return {
                ...state.decks,
                deck:action.payload
            }
        case REMOVE_DECK:
           return state.decks.filter(action.deckId)
        case ADD_CARD: 
           return state.decks.map(deck => {
                     if(deck.name === deckName) {
                       deck.cards.concat(card)
                    }
           })
    //    case REMOVE_CARD:
    //        return state.decks.filter(deck => deck.name !== action.deckName)
        default:
           return state;
    }
}




