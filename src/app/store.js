import { configureStore } from '@reduxjs/toolkit';
import { phoneApi } from '../features/api/phoneApi';

export const store = configureStore({
  reducer: {
    [phoneApi.reducerPath]: phoneApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(phoneApi.middleware),
});
