import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';

const Web = ({ route, navigation }) => {
    const ARTICLE_URI = route.params.ARTICLE_URI;
    console.log(ARTICLE_URI);
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
        alignSelf: 'stretch',
        flex: 1,
    },
});

export default Web;
