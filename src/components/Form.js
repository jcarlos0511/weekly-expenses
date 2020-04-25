import React, { useState } from "react";

const Form = () => {
  // Define states
  const [name, saveName] = useState("");
  const [quantity, saveQuantity] = useState(0);

  // When the user adds an expense
  const addExpense = (e) => {
    e.preventDefault();

    // Validate

    // Build spending

    // Pass the expense to main component

    // Reset form
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses</h2>

      <div>
        <label>Expense name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="e.g. food, transport"
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </div>

      <div>
        <label>Quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="e.g. 500, 1000"
          value={quantity}
          onChange={(e) => saveQuantity(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />
    </form>
  );
};
export default Form;
