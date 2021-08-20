import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CardPost from './../../components/CardPost';
import { Icon } from 'react-native-elements';
import { addLike } from '../../redux/actions/addLike';
import { addComment } from '../../redux/actions/addComment';
import { connect } from 'react-redux';

const Home = ({ data, addComment, addLike, navigation }) => {
    const handleLike = (index) => {
        addLike(index);
    };

    const handleComment = ({ index, comment }) => {
        addComment({ index, comment });
    };

    const renderItem = ({ item, index }) => {
        return (
            <CardPost item={item} index={index} handleLike={handleLike} handleComment={handleComment} />
        );
    };

    const addNewPost = () => {
        navigation.navigate('AddPost');
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

const mapStateToProps = state => {
    return {
        data: state.posts,
    };
};

const mapDispatchToProps = dispatch => ({
    addLike: payload => dispatch(addLike(payload)),
    addComment: payload => dispatch(addComment(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
