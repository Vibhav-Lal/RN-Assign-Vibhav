import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <Card containerStyle={read[index] ? styles.readBaseContainer : styles.unreadBaseContainer}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <View >
                    {/* <Image
                        resizeMode="cover"
                        source={{ uri: item.multimedia[2].url }}
                    /> */}
                    <Text style={styles.bodyText}>{item.abstract}</Text>
                    <TouchableOpacity>
                        <Text style={read[index] ? styles.readStatusText : styles.unreadStatusText} onPress={handleWeb}>{read[index] ? 'Mark as Unread' : 'Read More'}</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    bodyText: {
        marginBottom: 5,
    },
    unreadBaseContainer: {
        backgroundColor: '#F3F0EA',
    },
    unreadStatusText: {
        color: '#37320C',
        textAlign: 'right',
        fontSize: 16,
    },
    readBaseContainer: {
        backgroundColor: '#DBED94',
    },
    readStatusText: {
        color: '#11110E',
        textAlign: 'right',
        fontSize: 16,
    },
});

export default Article;
