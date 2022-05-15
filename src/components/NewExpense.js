import React from "react";
import "../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formSwitch, setformSwitch] = React.useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    closeForm();
  };

  const openForm = () => {
    setformSwitch(true);
  };

  const closeForm = () => {
    setformSwitch(false);
  };

  return (
    <div className="new-expense">
      {formSwitch ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          formModalClose={closeForm}
        />
      ) : (
        <button onClick={openForm}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
