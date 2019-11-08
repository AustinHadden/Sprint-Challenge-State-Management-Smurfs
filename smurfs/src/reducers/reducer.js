import { FETCH_SMURF_LOADING, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILED } from '../actions'


export const initialState = {
    isLoading: false,
    error: null,
    smurf: []
}

const addSmurf = smurfs => {
    return smurfs.map(props => ({
        name: props.name,
        age: props.age,
        height: props.height,
        id: props.id
    }))
};

export const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_SMURF_LOADING:
            return {
                ...state,
                smurf: [],
                isLoading: true,
                error: null
            };
            case FETCH_SMURF_SUCCESS:
                return {
                    ...state,                    
                    isLoading: false,
                    error: null,
                    smurf: addSmurf(action.payload)                   
                };
                case FETCH_SMURF_FAILED:
                return {
                    ...state,
                    smurf: [],
                    isLoading: false,
                    error: action.payload
                };
        default:
            return state;
    }
};