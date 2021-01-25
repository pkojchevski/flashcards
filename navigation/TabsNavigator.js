import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Decks from '../screens/Decks'
import AddDeck from '../screens/AddDeck'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';

const Tabs = createBottomTabNavigator()

class TabsNavigator extends React.Component {
    render() {
        return (
            <Tabs.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Decks') {
                  iconName = focused
                    ? 'card'
                    : 'card-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                } else if (route.name === 'AddDeck') {
                  iconName = focused ? 'plussquare' : 'plussquareo';
                  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
             <Tabs.Screen name="Decks" component={Decks}/>
             <Tabs.Screen name="AddDeck" component={AddDeck}/>
         </Tabs.Navigator>
        )
    }
}




export default TabsNavigator