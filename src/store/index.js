import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { expenseSlice } from "./expense/expense-slice"
import storage from "redux-persist/lib/storage"
import { 
    persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"

const persistConfig = {
    key : "root",
    version : 1,
    storage,
    whitelist : ['EXPENSE']
}

const rootReducer = combineReducers({
    EXPENSE : expenseSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    //{
        // on va créer une clé (on pourra l'appeler exactement comme tu veux).
        //La clé de base pour la Slice
        //Il faudrait que l'on pourrait avoir de façon permanente les données de notre
        //slice qui vienennt se mettre à jour, si elles changent à un moment donnée il faut que l'on le sache
        //Dans ma expense-slice il faut que j'appelle une fonction qui est cachée dessus qui est reducer
        //Cela va permettre en permanence de vérifier si quelque chose à changer dans ma slice et de le mettre à jour dans cette clé là.

    //     EXPENSE : expenseSlice.reducer
    // }
})

const persistor = persistStore(store)

export { store, persistor }