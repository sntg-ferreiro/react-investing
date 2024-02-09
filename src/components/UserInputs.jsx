import React, { useState } from "react";
import { UserInput } from "./UserInput";

const number = 0;

export const UserInputs = ({ inputState, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investement"
          field="initialInvestment"
          placeholder={number}
          onChange={onChange}
          value={inputState.initialInvestment}
        />
        <UserInput
          label="Annual Investment"
          field="annualInvestment"
          placeholder={number}
          onChange={onChange}
          value={inputState.annualInvestment}
        />
      </div>
      <div className="input-group">
        <UserInput
          label="Expected Return"
          field="expectedReturn"
          placeholder={number}
          onChange={onChange}
          value={inputState.expectedReturn}
        />
        <UserInput
          label="Duration"
          field="duration"
          placeholder={number}
          onChange={onChange}
          value={inputState.duration}
        />
      </div>
      {/* <button>Calculate</button> */}
    </section>
  );
};
