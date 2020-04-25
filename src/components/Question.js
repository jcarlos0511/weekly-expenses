import React, { Fragment, useState } from "react";
import Error from "./Error";

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {
  // Define states
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  // Function that reads the budget
  const defineBudget = (e) => {
    saveQuantity(parseInt(e.target.value, 10));
  };

  // Submit to define budget
  const addBudget = (e) => {
    e.preventDefault();

    //validate
    if (quantity < 1 || isNaN(quantity)) {
      saveError(true);
      return;
    }

    // Validation accepted
    saveError(false);
    saveBudget(quantity);
    saveRemaining(quantity);
    updateQuestion(false);
  };

  return (
    <Fragment>
      <h2>Put your budget</h2>
      {error ? <Error message="Incorrect budget" /> : null}
      <form onSubmit={addBudget}>
        <div className="row">
          <input
            type="number"
            className="one-half column u-full-width"
            placeholder="Put your budget"
            onChange={defineBudget}
          />
          <input
            type="submit"
            className="one-half column button-primary u-full-width"
            value="Define budget"
          />
        </div>
      </form>
    </Fragment>
  );
};

export default Question;
