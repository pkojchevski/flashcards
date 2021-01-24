
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
import TabsNavigator from './navigation/TabsNavigator'
import DeckManage from './screens/DeckManage'
import { createStackNavigator } from '@react-navigation/stack'
import AddCard from './screens/AddCard';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import AddDeck from './screens/AddDeck'
import logger from 'redux-logger'
import Quiz from './screens/Quiz'
import QuizResults from './screens/QuizResults'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={createStore(reducer, applyMiddleware(thunk, logger))}>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="TabsNavigator" component={TabsNavigator}/>
            <Stack.Screen name="DeckManage" component={DeckManage}/>
            <Stack.Screen name="AddDeck" component={AddDeck}/>
            <Stack.Screen name="AddCard" component={AddCard}/>
            <Stack.Screen name="Quiz" component={Quiz}/>
            <Stack.Screen name="QuizResults" component={QuizResults}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
