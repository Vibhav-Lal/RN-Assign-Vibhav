export const addImage = ({ imageSource }) => ({
    type: 'ADD_IMAGE',
    payload: {
        path: imageSource,
    },
});
