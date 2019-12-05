import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import localforage from 'localforage';
import axios from 'axios';
import {
  AnyAction,
  configureStore,
  EnhancedStore,
  Middleware,
  StoreEnhancer
} from 'redux-starter-kit';

import { reducer } from '../reducers';

const enhancers: StoreEnhancer[] = [];

const middleware: Middleware<{}, any>[] = [logger, thunk];

const preloadedState = {};

const storage = localforage.createInstance({
  driver: localforage.INDEXEDDB,
  name: 'piximi'
});

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducer);

const options = {
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: enhancers,
  middleware: middleware,
  preloadedState: preloadedState,
  reducer: persistedReducer
};

export const store: EnhancedStore<any, AnyAction> = configureStore(options);

const fetchExample = (name: string) => {
  return axios
    .get('https://storage.piximi.app/examples/' + name + '.piximi')
    .then((result: any) => {
      return {
        ...preloadedState,
        categories: result.data.categories,
        images: result.data.images
      };
    })
    .catch(function(error: Error) {
      alert(error);
    });
};

export const test: EnhancedStore<any, AnyAction> = configureStore({
  ...options,
  preloadedState: fetchExample('mnist')
});

export const persistor = persistStore(store);
