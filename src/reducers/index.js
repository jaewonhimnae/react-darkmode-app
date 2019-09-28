import { combineReducers } from 'redux';
import config from './config_reducer';

const rootReducer = combineReducers({
    config,
})

export default rootReducer;