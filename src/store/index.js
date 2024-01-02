import { configureStore } from "@reduxjs/toolkit"
import { expenseSlice } from "./expense/expense-slice"

const store = configureStore({
    reducer: {
        // on va créer une clé (on pourra l'appeler exactement comme tu veux).
        //La clé de base pour la Slice
        //Il faudrait que l'on pourrait avoir de façon permanente les données de notre
        //slice qui vienennt se mettre à jour, si elles changent à un moment donnée il faut que l'on le sache
        //Dans ma expense-slice il faut que j'appelle une fonction qui est cachée dessus qui est reducer
        //Cela va permettre en permanence de vérifier si quelque chose à changer dans ma slice et de le mettre à jour dans cette clé là.

        EXPENSE : expenseSlice.reducer
    }
})

export { store }