import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    console.log(enteredAmountNumber);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        input={{
          label: "Amount",
          key: props.id,
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && "Please enter a valid amount"}
    </form>
  );
};

export default MealItemForm;
