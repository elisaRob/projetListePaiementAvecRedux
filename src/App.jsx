import { ExpenseInput } from "containers/ExpenseInput/ExpenseInput";
import s from "./style.module.css";
import { List } from "components/List/List"
import { useSelector } from "react-redux";
import { IncomeInput } from "containers/IncomeInput/IncomeInput";
import { ExpenseTotal } from "containers/ExpenseTotal/ExpenseTotal";
import { Logo } from "components/Logo/Logo";

export function App() {

  //On va donc utiliser un autre hook de Redux qui est useSelector
  //Comment cela fonctionne ?
  //useSelector à la capcité d'aller lire les données du store c'est une fonction
  //qui te donne accès à un petit callback
  //On va en permanence lire le store et cette section du store et stocker la valeur dans expenseList
  //Dès que la valeur va changer expenseList va changer et ton composant va rerenderer
  //Dans le premier paramètre tu as accès à tous le store et ensuite tu dis exactement quelle section de ta slice tu veux retourner

  const expenseList = useSelector((store)=> store.EXPENSE.expenseList);
 

  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>
          <Logo title={"Ispent"} subtitle="Track your expenses"/>
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <List items={expenseList}/>
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
