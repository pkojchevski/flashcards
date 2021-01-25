
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
import { setLocalNotification } from './util/notifications';

const Stack = createStackNavigator()
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

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
              transitionSpec: {
                open: config,
                close: config,
              },

              
            }}
          >
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
