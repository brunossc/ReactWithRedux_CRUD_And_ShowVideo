
const INITIAL_AUTH =
{
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_AUTH, action) => {
    switch (action.type) {
        case 'SING_IN':
            return { ...state, isSignedIn: true, userId: action.payload };
        case 'SING_OUT':
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    };
}