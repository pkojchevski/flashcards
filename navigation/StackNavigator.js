
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import TabsNavigator from './TabsNavigator';
import DecksManage from '../screens/DeckManage'


const Stack = createStackNavigator()
export class StackNavigator extends Component {
  render() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabsNavigator" component={TabsNavigator}/>
            <Stack.Screen name="DecksManage" component={DecksManage}/>
        </Stack.Navigator>

    );
  }
}
