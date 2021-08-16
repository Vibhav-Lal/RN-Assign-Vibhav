import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableHighlight, TextInput, Button, StyleSheet } from 'react-native';

const Child = ({ name, handleChange }) => {
    const [newName, setNewName] = useState('');

    return (
        <View style={styles.baseContainer}>
            <Text style={styles.title}>Child</Text>
            <Text>Hey, my name is {name}</Text>
            <TextInput
                placeholder="New name"
                onChangeText={text => setNewName(text)}
                value={newName}
            />
            <Button title="Request" onPress={() => handleChange(newName)} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18
    },
    baseContainer: {
        marginTop: 15,
        backgroundColor: '#E3E9F5',
        padding: 5
    },
})

export default Child;