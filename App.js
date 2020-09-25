import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './Component/HomeScreen'
import DetailsScreen from './Component/DetailsScreen'

const Stack = createStackNavigator();

const App=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator intialRouteName="Home">
                <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    title:'My Home',
                    headerTintColor:'pink',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }} />
                <Stack.Screen 
                name="Details" 
                component={DetailsScreen} 
                options={{
                   
                    headerTintColor:'pink',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;