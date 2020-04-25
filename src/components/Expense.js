import React from "react";

const Expense = ({ expense }) => (
  <li>
    <p>
      {expense.name}
      <span className="expense">$ {expense.quantity}</span>
    </p>
  </li>
);
export default Expense;
