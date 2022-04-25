import {combineReducers} from 'redux';

import getAssetsReducer from './getAssetsReducer';

export const appReducer = combineReducers({
  getAssetsReducer,
});
