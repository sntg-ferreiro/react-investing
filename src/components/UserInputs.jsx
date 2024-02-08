import React, { useState } from "react";
import { UserInput } from "./UserInput";

const number = 0;

const example = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

export const UserInputs = ({ onNumberChange }) => {
  const [inputState, setInputState] = useState(example);

  const onNumberInput = (field, newNumber) => {
    setInputState((prev) => {
        console.log(prev)
      return { ...prev, [field]: newNumber }
    });
    onNumberChange(inputState);
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investement"
          field="initialInvestment"
          placeholder={number}
          onNumberInput={onNumberInput}
        />
        <UserInput
          label="Annual Investment"
          field="annualInvestment"
          placeholder={number}
          onNumberInput={onNumberInput}
        />
      </div>
      <div className="input-group">
        <UserInput
          label="Expected Return"
          field="expectedReturn"
          placeholder={number}
          onNumberInput={onNumberInput}
        />
        <UserInput
          label="Duration"
          field="duration"
          placeholder={number}
          onNumberInput={onNumberInput}
        />
      </div>
    </section>
  );
};
