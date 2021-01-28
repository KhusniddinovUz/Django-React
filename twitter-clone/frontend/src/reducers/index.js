import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import tweet from './tweet';
import nav from './nav';

const rootReducer = combineReducers({ auth, errors, tweet, nav });

export default rootReducer;
