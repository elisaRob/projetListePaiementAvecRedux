import s from "./style.module.css";
import { addExpense } from "store/expense/expense-slice";
import { useDispatch } from "react-redux";

//On met dans un dossier containers pour dire que c'est un composant qui est connecté au store
//dès qu'il écrit ou qu'il lit depuis le store

export function ExpenseInput(props) {

  //Ce hook vient de redux
  //dispatch veut dire "met l'even"
  const dispatch = useDispatch();

  //On crée une fonction au moment ou on clique sur Add pour récupérer les données du formulaire
  //et ensuite les envoyer à l'action que l'on va créer
  function submit(e){

    e.preventDefault();
    //On récupère les données du formulaire
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const price = formData.get("price");
    dispatch(addExpense({name, price}));
  }

  return (
    //cela déclanche losqu'on clique sur le bouton parce qu'iol est de type submit
    <form onSubmit={ submit }>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
