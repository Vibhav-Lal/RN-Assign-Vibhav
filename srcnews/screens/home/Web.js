import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';

const Web = ({ route, navigation }) => {
    const ARTICLE_URI = route.params.ARTICLE_URI;
    const [isLoading, setIsLoading] = useState(true);
    const LoadingView = () => {
        return <ActivityIndicator color='#24250E' size='large' />;
    };
    return (
        <View style={styles.container}>
            <WebView
                renderLoading={LoadingView}
                startInLoadingState={true}
                source={{ uri: ARTICLE_URI }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        width: '100%',
    },
});

export default Web;
