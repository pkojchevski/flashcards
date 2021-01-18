import {ADD_DECK, REMOVE_DECK, ADD_CARD} from '../actions/DECK'


export const deck = (state={decks:[]}, action)  => {
    switch(action.type) {
        case ADD_DECK: 
            return state.decks.concat(action.deck)
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




