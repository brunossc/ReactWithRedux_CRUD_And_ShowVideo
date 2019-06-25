import Lodash from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case "FETCH_STREAM":
        case "CREATE_STREAM":
        case "EDIT_STREAM":
            return {...state, [action.payload.id]:action.payload};
        case "DELETE_STREAM":
            return Lodash.omit(state, action.payload);
            case "FETCH_STREAMS":
                return {...state, ...Lodash.mapKeys(action.payload, "id")} ;
        default:
            return state;
    }
}