import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Article from './Article';

const Home = ({ navigation }) => {
    const NEWS_API = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=eeGgSKNtN4CiwlF7sSQD2In8cUYIcVRj';
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [read, setRead] = useState();
    useEffect(() => {
        axios.get(NEWS_API)
            .then(res => setNewsList(res.data.results))
            .then(() => setLoading(false));
    }, []);
    useEffect(() => {
        setRead(new Array(newsList.length).fill(false));
    }, [newsList]);

    const handleRead = (index) => {
        setRead([...read.slice(0, index), !read[index], ...read.slice(index + 1)]);
    };

    const renderItem = ({ item, index }) => {
        return (
            <Article
                navigation={navigation}
                item={item}
                index={index}
                handleRead={handleRead}
                read={read}
            />
        );
    };

    return (
        <View>
            {/* <Text style={styles.titleText}>NYT Updates</Text> */}
            <View>
                {loading ?
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                    :
                    <View>
                        <FlatList
                            data={newsList}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        textAlign: 'center',
        fontSize: 30,
        padding: 5,
        marginTop: 5,
        fontFamily: 'cursive',
    },
    loading: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 40,
        fontFamily: 'serif',
    },
});

export default Home;
