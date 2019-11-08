import axios from "axios";

export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

export const smurfLoading = () => ({ type: FETCH_SMURF_LOADING });
export const smurfLoadSuccess = data => ({
  type: FETCH_SMURF_SUCCESS,
  payload: data
});
export const smurfLoadFailure = error => ({
  type: FETCH_SMURF_FAILED,
  payload: error
});

export const addNewSmurf = (smurf) => ({
    type: ADD_NEW_SMURF,
    payload: smurf
});

export function fetchSmurf() {
  return function(dispatch) {
    dispatch(smurfLoading());

    return axios
      .get(`http://localhost:3333/smurfs`)
      .then(function(response) {
        console.log(response);
        dispatch(smurfLoadSuccess(response.data));
      })
      .catch(error => dispatch(smurfLoadFailure(error)));
  };
}
