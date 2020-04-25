import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  // Define state
  const [budget, saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);

  // When adding a new expense
  const addNewExpense = (expense) => {
    saveExpenses([...expenses, expense]);
  };

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
                <Form addNewExpense={addNewExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
