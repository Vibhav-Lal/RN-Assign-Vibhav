import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Instagram</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        backgroundColor: '#F4EEE7',
    },
    headerText: {
        fontFamily: 'cursive',
        fontSize: 30,
    },
});

export default Header;
