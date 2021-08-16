import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const AddPost = ({ route, navigation }) => {
    const { postImage } = route.params;
    const [imageSource, setImageSource] = useState(null);
    const addImage = () => {
        if (imageSource === null) {
            alert('No image selected');
        }
        else {
            postImage(imageSource);
            navigation.navigate('Home');
        }
    };

    const selectImage = () => {
        let options = {
            title: 'You can choose one image',
            maxWidth: 256,
            maxHeight: 256,
            noData: true,
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
            },
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
                alert('You did not select any image');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.assets[0].uri };
                setImageSource(source.uri);
            }
        });
    };
    return (
        <View
            style={[
                STYLES.flex,
                STYLES.centerContainer,
            ]}
        >
            <View style={STYLES.imageContainer}>
                {imageSource === null ? (
                    <Image
                        source={require('./../../data/place.png')}
                        style={STYLES.imageBox}
                        resizeMode="contain"
                    />
                ) : (
                    <Image
                        source={{ uri: imageSource }}
                        style={STYLES.imageBox}
                        resizeMode="contain"
                    />
                )}
            </View>
            <TouchableOpacity
                onPress={selectImage}
                style={STYLES.selectButtonContainer}
            >
                <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={addImage}
                style={STYLES.selectButtonContainer}
            >
                <Text style={STYLES.selectButtonTitle}>Post</Text>
            </TouchableOpacity>
        </View>
    );
};

const STYLES = StyleSheet.create({
    flex: {
        flex: 1,
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    // add below
    selectButtonContainer: {
        margin: 20,
        borderRadius: 5,
        backgroundColor: '#B0EAC7',
    },
    selectButtonTitle: {
        padding: 10,
        fontSize: 18,
        color: '#062F16',
    },
    imageContainer: {
        marginVertical: 20,
    },
    imageBox: {
        width: 300,
        height: 200,
    },
});

export default AddPost;
