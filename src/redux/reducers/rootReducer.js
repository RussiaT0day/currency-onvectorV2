import {combineReducers} from 'redux';
import dataMoney from './dataMoney';

const rootReducer = combineReducers({
    dataMoney: dataMoney
})

export default rootReducer;


