const initialState = {
    videoLink: '',
    previewImage: '',
    title: '',
    genre: '',
    contentRating: '',
    releaseDate: ''
}

const dialogBoxReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_FIELD': {
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        }
        default: {
            throw new Error('Invalid action type');
        }
    }
}

export {initialState, dialogBoxReducer}