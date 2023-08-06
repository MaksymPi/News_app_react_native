import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'


import Main from './components/Main'
import FullInfo from './components/FullInfo'


const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Main" 
            component={Main}
            option={{title: 'Main'}}
            />
             <Stack.Screen 
            name="FullInfo" 
            component={FullInfo}
            option={{title: 'FullInfo'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

 