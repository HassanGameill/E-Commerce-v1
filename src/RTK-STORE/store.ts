import { configureStore, combineReducers } from '@reduxjs/toolkit';
import
  { persistStore, 
    persistReducer, 
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import categories from './categories/categoriesSlice.ts';
import products from './products/productsSlice.ts';
import cart from './cart/cartSlice.ts';
import wishlist from './wishlistLike/wishlistSlice.ts';


// Configuration for redux-persist
const cartPersistConfig = {
  key: "cart",
  storage,
  whiteList: ["items"], // Only persist the cart slice
}

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whiteList: ["itemsId"], // Only persist the cart slice
}

// Combine reducers
const rootReducer = combineReducers({
  categories, 
  products, 
  cart: persistReducer(cartPersistConfig, cart),
  wishlist: persistReducer(wishlistPersistConfig, wishlist),
  
});




// Configure and create the Redux store

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});




// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
