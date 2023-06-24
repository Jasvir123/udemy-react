import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({onSaveExpense}) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpense} />
    </div>
  );
};
export default NewExpense;
