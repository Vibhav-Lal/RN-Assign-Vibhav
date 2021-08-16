import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const CardPost = ({ item, index, handleLike, handleComment }) => {
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState('');
    const handleCommentSection = () => {
        if (comment === '') {
            alert('Please write a comment');
        }
        else {
            handleComment({ index, comment });
            setComment('');
        }
    };
    return (
        <View style={styles.cardContainer}>
            <Card>
                <View >
                    <Image
                        style={styles.image}
                        source={item.image}
                    />
                    <View style={styles.iconContainer}>
                        <Icon name="heart-o" type="font-awesome" color="#f50"
                            onPress={() => handleLike(index)}
                        />
                        <Text style={{ fontSize: 21, marginRight: 10 }}> {item.like}</Text>

                        <Icon name="comment-o" type="font-awesome" color="#f50"
                            onPress={() => setShow(!show)}
                        />
                        <Text style={{ fontSize: 21 }}> {item.comment}</Text>
                    </View>
                    {show &&
                        <View>
                            <FlatList
                                data={item.commentList}
                                renderItem={({ item }) => <SingleComment item={item} />}
                                keyExtractor={(it, ind) => ind.toString()}
                            />
                            <TextInput style={single.input}
                                placeholder="Add a comment"
                                value={comment}
                                onChangeText={text => setComment(text)} />
                            <TouchableOpacity
                                onPress={handleCommentSection}>
                                <Text style={{ textAlign: 'center', color: '#020511' }}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </Card>
        </View>
    );
};

const SingleComment = ({ item }) => {
    return (
        <View style={single.commentContainer}>
            <Text style={single.commentText}>{item}</Text>
        </View>
    );
};

const single = StyleSheet.create({
    commentContainer: {
        padding: 5,
        marginLeft: 10,
        borderBottomWidth: 0.5,
    },
    commentText: {
        fontSize: 14,
    },
    input: {
        borderBottomWidth: 0.7,
    },
});
const styles = StyleSheet.create({
    cardContainer: {
        textAlign: 'left',
    },
    cardText: {

    },
    iconContainer: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    cardBody: {
        textAlign: 'left',
    },
    image: {
        width: '100%',
        height: 200,
    },
});

export default CardPost;
