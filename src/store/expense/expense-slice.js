import { createSlice } from "@reduxjs/toolkit"

// Une slice c'est un objet qui n'est pas juste un simple objet qui contient des données.
//Une Slice il va également nous permettre de modifier les données de notre Slice, donc la slice elle fait un petit peu tout.

//Une action c'est une fonction que l'on va écrire dans notre slice qui va nous permettre
//de modifier notre slice quand on va l'appeler.

export const expenseSlice = createSlice({
    name : "expenseSlice",
    initialState : {
        income : 1000,
        expenseList : [],
    },
    //pour crée une action il va falloir créer une clé qui s'appelle reducers et dedans on va pouvoir créer nos actions qui sont plus ou moins que des fonctions
    //Cette fonction va recevoir de façon cachée les données de notre slice
    //Pour recevoir les données à l'intèrieur de notre slice ça vient en deuxième paramètre
    reducers : {
        addExpense: (currentSlice, action)=>{
            currentSlice.expenseList.push({...action.payload, price : Number.parseFloat(action.payload.price)})

            //Ces paramètres on va toujours avoir accès à un payload et un type
            //Le type va être un identifiant pour l'action que je viens d'émettre
            //Cela nous indique que c'est une action qui est dans ExpenseSlide et addExpense c'est son nom
            //payload ce sont les données que l'on a envoyé à notre action
            //console.log( action)
        },

        setIncome: (currentSlice, action)=>{
            currentSlice.income=Number.parseFloat(action.payload);
        }
    }
});

//pour pouvoir utiliser une action il faut l'exporter
//const addExpense = expenseSlice.actions.addExpense;

//export { addExpense }

//On peut également destructurer pour récupérer tous les objets qui sont dans actions
const { addExpense, setIncome } =expenseSlice.actions;

export { addExpense , setIncome}