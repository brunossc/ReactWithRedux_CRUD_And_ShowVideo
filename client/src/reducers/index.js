import { combineReducers } from 'redux';
import { reducer as formReducers } from 'redux-form';
import GoogleAuthReducer from './GoogleAuthReducer';
import StreamReducer from './streamReducer';

export default combineReducers ({
    auth: GoogleAuthReducer,
    form: formReducers,
    streams: StreamReducer
});


