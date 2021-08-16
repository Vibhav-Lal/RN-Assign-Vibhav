import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CardPost from './../../components/CardPost';
import { Icon } from 'react-native-elements';

const Home = ({ navigation }) => {
    const list = [
        {
            image: require('./../../data/a1pha.png'),
            like: 5,
            comment: 2,
            commentList: ['nice', 'this is a comment'],
        },
        {
            image: require('./../../data/image2.jpg'),
            like: 3,
            comment: 1,
            commentList: ['John Wick'],
        },
        {
            image: require('./../../data/bike.jpg'),
            like: 10,
            comment: 2,
            commentList: ['RE', 'Superb'],
        },
    ];
    const [data, setData] = useState(list);
    const handleLike = (index) => {
        setData([...data.slice(0, index), { ...data[index], like: data[index].like + 1 }, ...data.slice(index + 1)]);
    };

    const handleComment = ({ index, comment }) => {
        setData([...data.slice(0, index), { ...data[index], comment: data[index].comment + 1, commentlist: data[index].commentList.unshift(comment) }, ...data.slice(index + 1)]);

    };

    const renderItem = ({ item, index }) => {
        return (
            <CardPost item={item} index={index} handleLike={handleLike} handleComment={handleComment} />
        );
    };

    const postImage = (imageURI) => {
        console.log(imageURI);
        setData([{
            image: { uri: imageURI },
            like: 0,
            comment: 0,
            commentList: [],
        }, ...data]);
    };
    const addNewPost = () => {
        navigation.navigate('AddPost', { postImage: postImage });
    };
    return (
        <View style={styles.bodyContainer}>
            <View style={styles.iconContainer}>
                <Icon raised name="plus" type="font-awesome"
                    onPress={addNewPost} />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bodyContainer: {
        marginTop: 5,
    },
    bodyText: {

    },
    iconContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 2,
    },
});

export default Home;
