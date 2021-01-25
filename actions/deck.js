export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const GET_CARDS_FROM_DECK = 'GET_CARDS_FROM_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const REMOVE_CARD = 'REMOVE_CARD'
export const GET_DECK_FROM_ID = 'GET_DECK_FROM_ID'

import { fetchDecks, submitDeck, getDeckFromIdApi, addCardToDeckApi, removeDeckApi } from '../util/api'

const addCardToDeck = (decks) => ({
     type: ADD_CARD_TO_DECK,
     payload:decks
})

const removeCard = (cardId, deckId) => ({
    type: REMOVE_CARD,
    payload:{
        deckId, cardId
    }
})

const removeDeck = deckId => ({
    type: REMOVE_DECK,
    payload: deckId
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
    type: GET_DECK_FROM_ID,
    payload:deck
})

export const addCardToDeckFunc = (deckId, card) => async (dispatch) => {
   const decks = await addCardToDeckApi(deckId, card)
   console.log(decks)
   dispatch(addCardToDeck(decks))
   dispatch(getDeck(deckId))
}

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
    console.log('deckXXXXXXXXXX:', deck)
    dispatch(getDeckFromId(deck))
 }


 export const removeDeckFunc = (id) => async (dispatch) => {
    await removeDeckApi(id)
    dispatch(removeDeck(id))
 }

const getCardFromDeck = deckName => ({
    type: GET_CARD_FROM_DECK,
    payload:deckName
})



