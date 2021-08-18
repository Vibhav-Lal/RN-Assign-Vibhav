import React from 'react';
import Home from './screens/home/Home';
import Web from './screens/home/Web';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const News = ({ navigation }) => {
    const Stack = createStackNavigator();

    return (
        <View>
            <Home />
        </View>
    );
};

export default News;
