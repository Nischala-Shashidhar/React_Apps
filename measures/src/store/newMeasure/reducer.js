import { CREATE_MEASURE } from './action';

export default function createMeasure(state = {}, action) {
    console.log(action)
    switch(action) {
        case CREATE_MEASURE :
            let newState = Object.assign({}, state, {measureData: action.measureData});
            console.log(newState);
            return newState;
        default:
            return state;
    }
}