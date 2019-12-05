import { combineReducers, Reducer } from 'redux';

import { classifierReducer } from './classifier';

export const reducer: Reducer = combineReducers({
  classifier: classifierReducer
});
