export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const GET_CARDS_FROM_DECK = 'GET_CARDS_FROM_DECK'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'
export const GET_DECK_FROM_ID = 'GET_DECK_FROM_ID'

import { fetchDecks, submitDeck, getDeckFromIdApi } from '../util/api'

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

const getDeckFromId = deck => ({
    type: GET_DECK,
    payload:deck
})

export const addDeckFunc = (deck) => async (dispatch) => {
   await submitDeck(deck)
   dispatch(addDeck(deck))
}

export const getDecksFunc = () => dispatch => {
    return fetchDecks().then((decks) => {
        dispatch(getDecks(decks))
    })
}

export const getDeckFromIdFunc = (id) => async (dispatch) => {
    const deck = await getDeckFromIdApi(id)
    console.log('deckXXXXXXXXXX:', JSON.stringify(deck))
    dispatch(getDeckFromId(deck))
 }

const getCardFromDeck = deckName => ({
    type: GET_CARD_FROM_DECK,
    payload:deckName
})



