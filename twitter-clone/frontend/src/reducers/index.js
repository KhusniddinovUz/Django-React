import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import tweet from './tweet';

const rootReducer = combineReducers({ auth, errors, tweet });

export default rootReducer;
