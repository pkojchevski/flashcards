import { AsyncStorage } from 'react-native'


export const fetchDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => decks)
   
}

export const submitDeck = async ({deck, key}) => {
    return await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, 
                JSON.stringify({[key]:deck}))
}

export const getDeck = async (deckId) => { 
   return await AsyncStorage.getItem(DECKS_STORAGE_KEY)

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
 
