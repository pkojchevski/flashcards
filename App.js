
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './navigation/TabsNavigator'
import DeckManage from './screens/DeckManage'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
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
import { setLocalNotification } from './util/notifications';

const Stack = createStackNavigator()


class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk, logger))}>
      <NavigationContainer>
          <Stack.Navigator 
            screenOptions= {{
              gestureHandler: true,
              gestureDirections: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
          >
              <Stack.Screen name="Decks" component={TabsNavigator}/>
              <Stack.Screen name="Deck Manage" component={DeckManage}/>
              <Stack.Screen name="Add Deck" component={AddDeck}/>
              <Stack.Screen name="Add Card" component={AddCard}/>
              <Stack.Screen name="Quiz" component={Quiz}/>
              <Stack.Screen name="Quiz Results" component={QuizResults}/>
          </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
