import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import data from './../../data/data';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Home = () => {

    const [toDo, setToDo] = useState(data);
    const [newToDo, setNewToDo] = useState({
        id: toDo.length + 1,
        body: '',
        status: false,
    });

    useEffect(() => {
        setNewToDo({ ...newToDo, id: toDo.length + 1 });
    }, [toDo]);

    const changeStatus = (id) => {
        const newToDoList = toDo.map(item => (item.id === id ? { ...item, status: !item.status } : item));
        setToDo(newToDoList);
    };

    const renderItem = (ele) => {
        return (
            <View style={styles.toDoItem}>
                <View style={styles.toDoView}>
                    <Text style={ele.item.status ? styles.toDoDone : styles.toDoText}>{ele.item.body}</Text>
                    <TouchableOpacity>
                        <Text style={styles.markDone} onPress={() => changeStatus(ele.item.id)}>{ele.item.status ? 'Redo' : 'Done'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    const handleAdd = () => {
        if (newToDo.body === '') {
            alert('Empty input');
            return;
        }
        setToDo([newToDo, ...toDo]);
        setNewToDo({
            id: 0,
            body: '',
            status: false,
        });

    };
    return (
        <View style={styles.sectionContainer}>
            <TextInput
                label="New Todo"
                placeholder="New Todo"
                value={newToDo.body}
                onChangeText={text => setNewToDo({ ...newToDo, body: text })}
            />
            <Button title="ADD" onPress={handleAdd} />
            <FlatList
                style={styles.flatListStyle}
                data={toDo}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListStyle: {
        marginTop: 20,
    },
    toDoItem: {
        backgroundColor: '#D2E6F5',
        padding: 10,
        marginTop: 3,
    },
    toDoView: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    toDoText: {
        fontSize: 20,
    },
    toDoDone: {
        fontSize: 20,
        textDecorationLine: 'line-through',
    },
    markDone: {
        color: '#0E7BF5',
        textAlign: 'right',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
});

export default Home;
