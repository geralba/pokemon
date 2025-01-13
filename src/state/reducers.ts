import { combineReducers } from '@reduxjs/toolkit';

import teamReducer from './slice/teamSlice';

export const rootReducer = combineReducers({
  team: teamReducer,
});
