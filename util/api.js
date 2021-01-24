import AsyncStorage from '@react-native-async-storage/async-storage';

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY'

export const fetchDecks = async () => {
    const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    return JSON.parse(decks)
}

export const submitDeck = async (deck) => {
   // console.log(deck)
    return await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, 
                JSON.stringify({[deck.id]:deck}))
}

export const getDeckFromIdApi = async (deckId) => { 
   const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
   const data = JSON.parse(decks)
   return data[deckId]
}


 export const removeDeckApi = async (key) => {
    const decks =  await AsyncStorage.getItem(DECKS_STORAGE_KEY)
      const data = JSON.parse(decks)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
      return key
 }


 export const addCardToDeckApi = async (deckId, card) => {
   const decks =  await AsyncStorage.getItem(DECKS_STORAGE_KEY)
     let data = JSON.parse(decks)
     data[deckId].cards.push(card)
     console.log(data[deckId])
     AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
     return data
}

export const deleteDeck = (deckId, decks) => {
   let {[deckId]:onsubmit, ...rest} = decks
   console.log('rest:', rest)
   return rest
}
 
