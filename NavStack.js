import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import AppPC from './AppPC';
import NewsHome from './srcnews/screens/home/Home';
import Web from './srcnews/screens/home/Web';
import Insta from './srcinsta/Insta';
import ToDO from './src/screens/home';
import AddPost from './srcinsta/screens/home/AddPost';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './srcinsta/redux/reducers/index';

const store = createStore(rootReducer);

const NavStack = () => {
    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="app"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#72B2B6',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}>
                    <Stack.Screen name="app" component={App} options={{ title: 'My Apps' }} />
                    <Stack.Screen name="to-do-home" component={ToDO} options={{ title: 'To Do App' }} />
                    <Stack.Screen name="pc-home" component={AppPC} options={{ title: 'PC App' }} />
                    <Stack.Screen name="news-home" component={NewsHome} options={{ title: 'NY Updates' }} />
                    <Stack.Screen name="Web" component={Web} options={{ title: 'Web' }} />
                    <Stack.Screen name="insta-home" component={Insta} options={{ title: 'Gallery App' }} />
                    <Stack.Screen name="AddPost" component={AddPost} options={{ title: 'New Post' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default NavStack;
