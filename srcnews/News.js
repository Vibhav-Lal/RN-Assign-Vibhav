import React from 'react';
import { View, Text } from 'react-native';
import Home from './screens/home/Home';
import Web from './screens/home/Web';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const News = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#BCBCAD',
                    },
                    // headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        fontFamily: 'cursive'
                    },
                }}
            >
                <Stack.Screen name="Home" component={Home} options={{ title: 'NY Updates' }} />
                <Stack.Screen name="Web" component={Web} options={{ title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default News;
