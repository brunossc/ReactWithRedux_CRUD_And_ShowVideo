import FakeApi from '../api/fakeApi';
import history from '../history';

export const signIn = (userId) =>
{
    return {
        type:'SING_IN',
        payload: userId
    };
};

export const signOut = () =>
{
    return {
        type:'SING_OUT'
    };
};

export const createStream = formValues => async (dispatch, getState) =>
{
    const {userId} = getState().auth;
    const response = await FakeApi.post("/values",{ ...formValues, userId });
    dispatch({type:"CREATE_STREAM", payload: response.data});
    history.push("/streams");
};

export const fetchStreams = () => async dispatch =>
{
    const response = await FakeApi.get("/values");
    dispatch({type:"FETCH_STREAMS", payload: response.data});
};

export const editStream = (id, formValues) => async (dispatch, getState) =>
{
    const {userId} = getState().auth;
    const response = await FakeApi.put("/values/" + id, { ...formValues, userId });
    dispatch({type:"EDIT_STREAM", payload: response.data});
    history.push("/streams");
};

export const fetchStream = id => async dispatch =>
{
    const response = await FakeApi.get("/values/" + id);
    dispatch({type:"FETCH_STREAM", payload: response.data});
};

export const deleteStream = id => async dispatch =>
{
    await FakeApi.delete("/values/" + id);
    dispatch({type:"DELETE_STREAM", payload: id });
    history.push("/streams");
};
