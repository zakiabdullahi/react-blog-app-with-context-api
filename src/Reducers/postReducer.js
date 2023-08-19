/* eslint-disable no-unused-vars */
export const initialState = {
    posts: [],


}

export const postReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case "CREATEPOST": {

            return {
                ...state,
                posts: payload.post
            }


        }
        case "EDITPOST": {

            return {
                ...state,
                posts: payload.post
            }


        }
        case "DELETEPOST": {

            return {
                ...state,
                posts: payload.post
            }


        }

        default: {
            return state;
        }


    }

}