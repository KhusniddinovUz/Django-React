import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import tweet from './tweet';
import nav from './nav';
import lastusers from './lastusers';

const rootReducer = combineReducers({ auth, errors, tweet, nav, lastusers });

export default rootReducer;
