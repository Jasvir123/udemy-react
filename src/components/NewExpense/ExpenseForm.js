import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpense }) => {
  const initialFormData = {
    title: "",
    amount: "",
    date: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const chandler = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveExpense(formData);
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input
            onChange={chandler}
            type="text"
            name="title"
            value={formData.title}
          />
        </div>
        <div className="expense-form__control">
          <label>Amount</label>
          <input
            onChange={chandler}
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            max="9999999999"
            value={formData.amount}
          />
        </div>
        <div className="expense-form__control">
          <label>Date</label>
          <input
            onChange={chandler}
            type="date"
            name="date"
            min="2019-01-01"
            max="2023-07-01"
            value={formData.date}
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
