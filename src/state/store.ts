import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '@/state/reducers';

export const store = configureStore({
  reducer: rootReducer,
});
