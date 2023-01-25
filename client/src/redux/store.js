import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import { persistStore, persistReducer, FLUSH, REGISTER ,PURGE, REHYDRATE, PAUSE, PERSIST } from "redux-persist"
import storage from "redux-persist/lib/storage"


const persistConfig = {
    key: 'root',
    version: 1,
    storage
}
const rootReducer = combineReducers({
    user: authReducer,
})
const persistedReducer =  persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoreActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
})

export const persistor = persistStore(store)