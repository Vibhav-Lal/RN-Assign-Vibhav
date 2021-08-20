export const addComment = ({ index, comment }) => ({
    type: 'ADD_COMMENT',
    payload: {
        index: index,
        comment: comment,
    },
});
