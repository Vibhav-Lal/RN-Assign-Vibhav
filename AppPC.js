import React from 'react';
import Home from './srcpc';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';


const App = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
                Parent Child Communication App
            </Text>
            <Home />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    }
});

export default App;
