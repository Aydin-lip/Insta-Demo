import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import PostInformation from "./reducers";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Post"],
};

const persistedReducer = persistReducer(persistConfig, PostInformation);

export let store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);
