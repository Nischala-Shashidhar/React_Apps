import { combineReducers } from 'redux';
import  createMeasure  from './newMeasure/reducer';


const rootReducer = combineReducers({
    createMeasure : createMeasure
});

export default rootReducer;