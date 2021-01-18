export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const GET_CARDS_FROM_DECK = 'GET_CARDS_FROM_DECK'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'
import { fetchDecks, submitDecks  } from '../util/api'

const addCard = (card, deckName) => ({
     type: ADD_CARD,
     payload:{
         deckName, card
     }
})

const removeCard = (cardId, deckName) => ({
    type: REMOVE_CARD,
    payload:{
        deckName, cardId
    }
})

const removeDeck = deckName => ({
    type: REMOVE_DECK,
    payload:deckName
})

const addDeck = deck => ({
    type: ADD_DECK,
    payload:deck
})

const getDecks = decks => ({
    type: GET_DECKS,
    payload: decks
})


const getDeck = deckName => ({
    type: GET_DECK,
    payload:deckName
})

export const addDeckFunc = (deck) => async (dispatch) => {
   await submitDecks(deck)
   dispatch(addDeck(deck))
}



export const getDecksFunc = () => dispatch => {
    fetchDecks().then((decks) => {
        dispatch(getDecks(decks))
    })
}





const getCardFromDeck = deckName => ({
    type: GET_CARD_FROM_DECK,
    payload:deckName
})



