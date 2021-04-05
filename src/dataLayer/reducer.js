
export const SETUSER = 'set_user';

export const initialState = {
    user: null,
}


export const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case SETUSER:
            return {
                ...state, user: action.user
            }
        default:
            return;
    }

} 