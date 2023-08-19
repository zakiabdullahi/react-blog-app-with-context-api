/* eslint-disable no-unused-vars */
export const initialState = {
    users: [],
    isAuthenticated: false,
    currentUser: null

}

export const authReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case "REGISTER": {

            return {
                ...state,
                users: payload.user
            }


        }
        case "LOGIN": {

            return {
                ...state,
                currentUser: payload,

            }


        }
        case "ISAUTHENTICATED": {

            return {
                ...state,
                isAuthenticated: payload
            }


        }
        case "SETAUTHENTICATED": {

            return {
                ...state,
                isAuthenticated: payload
            }


        }

    }

}