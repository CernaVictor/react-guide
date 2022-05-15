import { React, useState } from "react";
import "../styles/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredArr = props.items.filter(
    (el) => el.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={yearChangeHandler}
          defaultYear={filteredYear}
        />
        <ExpensesChart expenses={filteredArr} />
        <ExpensesList items={filteredArr} />
      </Card>
    </div>
  );
};

export default Expenses;
