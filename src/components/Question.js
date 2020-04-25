import React, { Fragment, useState } from "react";
import Error from "./Error";

const Question = () => {
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
  };

  return (
    <Fragment>
      <h2>Put your budget</h2>
      {error ? <Error message="Incorrect budget" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Put your budget"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define budget"
        />
      </form>
    </Fragment>
  );
};

export default Question;
