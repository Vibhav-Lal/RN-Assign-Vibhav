import { postData } from '../store/postData';

export const posts = (state = postData, action) => {
    switch (action.type) {
        case 'ADD_IMAGE':
            console.log(action.payload.path);
            state.unshift({
                image: { uri: action.payload.path },
                like: 0,
                comment: 0,
                commentList: [],
            });
            return state;

        case 'ADD_LIKE':
            state = [...state.slice(0, action.payload.index), { ...state[action.payload.index], like: state[action.payload.index].like + 1 }, ...state.slice(action.payload.index + 1)];
            return state;

        case 'ADD_COMMENT':
            state = [...state.slice(0, action.payload.index), { ...state[action.payload.index], comment: state[action.payload.index].comment + 1, commentlist: state[action.payload.index].commentList.unshift(action.payload.comment) }, ...state.slice(action.payload.index + 1)];
            return state;
        default:
            return state;

    }
};
