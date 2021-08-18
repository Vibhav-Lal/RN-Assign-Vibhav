import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const Article = ({ navigation, item, index, handleRead, read }) => {
    const ARTICLE_URI = item.url;
    const handleWeb = () => {
        if (!read[index]) {
            navigation.navigate('Web', { ARTICLE_URI });
        }
        handleRead(index);
    };

    return (
        <View style>
            <Card containerStyle={read[index] ? readS.baseContainer : unReadS.baseContainer}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <View >
                    {/* <Image
                        resizeMode="cover"
                        source={{ uri: item.multimedia[2].url }}
                    /> */}
                    <Text style={styles.bodyText}>{item.abstract}</Text>
                    <Text style={read[index] ? readS.statusText : unReadS.statusText} onPress={handleWeb}>{read[index] ? 'Mark as Unread' : 'Read More'}</Text>
                </View>
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    bodyText: {
        marginBottom: 5,
    },
});

const unReadS = StyleSheet.create({
    baseContainer: {
        backgroundColor: '#F3F0EA',
    },
    statusText: {
        color: '#37320C',
        textAlign: 'right',
        fontSize: 16,
    },
});

const readS = StyleSheet.create({
    baseContainer: {
        backgroundColor: '#DBED94',
    },
    statusText: {
        color: '#11110E',
        textAlign: 'right',
        fontSize: 16,
    },
});

export default Article;
