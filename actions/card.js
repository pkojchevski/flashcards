export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'

export const addCard = (card) => ({
     type: ADD_CARD,
     card
})

export const removeCard = (cardId) => ({
    type: REMOVE_CARD,
    cardId
})