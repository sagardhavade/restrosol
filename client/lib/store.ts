// store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './features/rootSlice';
import { rootSaga } from './saga/rootSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import noopStorage from './noopStorage'; // Import the custom noop storage
// Ensure we only use localStorage on the client
const isClient = typeof window !== 'undefined';
const persistConfig = {
  key: 'root',
  // storage,
  storage: isClient ? storage : noopStorage, // Use noopStorage for SSR
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// Run root saga
sagaMiddleware.run(rootSaga);

// Define types
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
// export const persistor = persistStore(store);

export const persistor = isClient ? persistStore(store) : null; // Persistor should only be created on client


export default store;
