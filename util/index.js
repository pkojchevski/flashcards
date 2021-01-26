export const addCardInDeck = (decks, card, deckName) => {
    decks.map(deck => {
        if(deck.name === deckName) {
            deck.cards.concat(card)
        }
    })
}
