import React from 'react';
import Home from './screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddPost from './screens/home/AddPost';

const Insta = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#F7F0ED',
                    },
                    // headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        fontFamily: 'cursive',
                    },
                }}
            >
                <Stack.Screen name="Home" component={Home} options={{ title: 'RN Book' }} />
                <Stack.Screen name="AddPost" component={AddPost} options={{ title: 'New Post' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Insta;
