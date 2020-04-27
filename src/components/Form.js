import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Form = ({ saveExpense, saveCreateExpense }) => {
  // Define states
  const [name, saveName] = useState("");
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  // When the user adds an expense
  const addExpense = (e) => {
    e.preventDefault();

    // Validate
    if (quantity < 1 || isNaN(quantity) || name.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);
    // Building 'expense'
    const expense = {
      id: shortid.generate(),
      name,
      quantity,
    };

    // Pass the expense to main component
    saveExpense(expense);
    saveCreateExpense(true);

    // Reset form
    saveName("");
    saveQuantity(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses</h2>
      {error ? (
        <Error message="Both fields are required or incorrect budget" />
      ) : null}
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
Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  saveCreateExpense: PropTypes.func.isRequired,
};
export default Form;
