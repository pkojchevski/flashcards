export const addCardInDeck = (decks, card, deckName) => {

    decks.map(deck => {
        if(deck.name === deckName) {
            deck.cards.concat(card)
        }
    })
}



// decks:[
//     {
//         name:deckId,
//         cards: [{id, question, answer}]
//     },

// ]