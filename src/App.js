import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  // Define state
  const [budget, saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createexpense, saveCreateExpense] = useState(false);

  // UseEffect which updates the remaining

  useEffect(() => {
    if (createexpense) {
      // Add a new budget
      saveExpenses([...expenses, expense]);

      // Subtracting from the current budget
      const remainingBudget = remaining - expense.quantity;
      saveRemaining(remainingBudget);

      //Reset to false
      saveCreateExpense(false);
    }
  }, [createexpense, expense, expenses, remaining]);

  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="main-content content">
          {showquestion ? (
            <Question
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
