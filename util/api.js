import AsyncStorage from '@react-native-async-storage/async-storage';

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY'

export const fetchDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => decks)
}

export const submitDeck = async (deck) => {
   // console.log(deck)
    return await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, 
                JSON.stringify({[deck.id]:deck}))
}

export const getDeckFromIdApi = async (deckId) => { 
   const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    console.log(decks)
    console.log('deckId:', deckId)
   return decks[deckId]
}


 export const removeDeck = async (key) => {
    return await AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
 }
 
