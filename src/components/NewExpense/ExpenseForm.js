import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const enteredTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const enteredAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const enteredDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  return (
    <form>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input
            onChange={enteredTitleHandler}
            type="text"
            value={enteredTitle}
          />
        </div>
        <div className="expense-form__control">
          <label>Amount</label>
          <input
            onChange={enteredAmountHandler}
            type="number"
            min="0.01"
            step="0.01"
            max="9999999999"
            value={enteredAmount}
          />
        </div>
        <div className="expense-form__control">
          <label>Date</label>
          <input
            onChange={enteredDateHandler}
            type="date"
            min="2019-01-01"
            max="2023-07-01"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
