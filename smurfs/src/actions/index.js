import axios from "axios";

export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";

export const smurfLoading = () => ({ type: FETCH_SMURF_LOADING });
export const smurfLoadSuccess = data => ({
  type: FETCH_SMURF_SUCCESS,
  payload: data
});
export const smurfLoadFailure = error => ({
  type: FETCH_SMURF_FAILED,
  payload: error
});

export const addNewSmurf = (smurf) => {
  return (dispatch) => {
    dispatch(smurfLoading());
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch(smurfLoadSuccess(response.data));
      console.log(response.data)
    })
    .catch(error => dispatch(smurfLoadFailure(error)))
  }
};

export function fetchSmurf() {
  return function(dispatch) {
    dispatch(smurfLoading());

    return axios
      .get(`http://localhost:3333/smurfs`)
      .then(function(response) {
        console.log('Server response', response);
        dispatch(smurfLoadSuccess(response.data));
      })
      .catch(error => dispatch(smurfLoadFailure(error)));
  };
}
