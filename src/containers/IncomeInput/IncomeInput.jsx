import s from "./style.module.css";
import { useSelector } from "react-redux";
import { setIncome } from "store/expense/expense-slice";
import { useDispatch } from "react-redux";

export function IncomeInput(props) {
  const defaultValueIncome = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();

  function updateValue(e) {
    const valeur = e.target.value;
    dispatch(setIncome(valeur))
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={defaultValueIncome}
          onChange={updateValue}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
