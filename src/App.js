import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV pro max ultra",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <>
      <NewExpense />
      <Card className="expenses ">
        {expenses.map((data) => (
          <ExpenseItem data={data} key={data.id} />
        ))}
      </Card>
    </>
  );
};

export default App;
