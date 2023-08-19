/* eslint-disable no-unused-vars */
export const initialState = {
    comments: [],


}

export const commentReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case "CREATECOMMENT": {

            return {
                ...state,
                comments: payload.comment
            }


        }
        case "EDITCOMMENT": {

            return {
                ...state,
                comments: payload.comment
            }


        }

        case "DELETECOMMENT": {

            return {
                ...state,
                comments: payload.comment
            }


        }

        default: {
            return state;
        }


    }

}