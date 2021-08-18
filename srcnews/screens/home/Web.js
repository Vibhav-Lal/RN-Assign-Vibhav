import React from 'react';
import { View, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Web = ({ route, navigation }) => {
    const ARTICLE_URI = route.params.ARTICLE_URI;
    const LoadingView = () => {
        return (
            <View style={styles.activity}>
                <ActivityIndicator color="#24250E" size="large" />
            </View>
        );
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
        height: deviceHeight,
        width: deviceWidth,
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },
});

export default Web;
