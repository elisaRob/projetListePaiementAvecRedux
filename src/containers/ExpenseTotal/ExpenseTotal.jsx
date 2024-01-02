import s from "./style.module.css";
import { useSelector } from "react-redux";  

export function ExpenseTotal(props) {

  const totalPrix = useSelector((store)=>store.EXPENSE.expenseList);
  const recupereationValeurCompte = useSelector((store)=>store.EXPENSE.income)
  const totalDesPrixDesDepenses= totalPrix.reduce((accu, curent)=>{
    return accu + curent.price
  },0)
  const combienIlResteArgent = recupereationValeurCompte - totalDesPrixDesDepenses



  

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalDesPrixDesDepenses} €</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{combienIlResteArgent} €</div>
      </div>
    </div>
  );
}
