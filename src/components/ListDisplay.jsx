import React from "react";
import { ListElement } from "./ListElement";

export const ListDisplay = (investmentInput) => {
  /*const input = {
    //es un arreglo con ele de esta forma
    year: i + 1, // year identifier
    interest: interestEarnedInYear, // the amount of interest earned in this year
    valueEndOfYear: investmentValue, // investment value at end of year
    annualInvestment: annualInvestment, // investment added in this year
  };*/

  const thead = (
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (year)</th>
        <th>Total Interest</th>
        <th>Total Capital</th>
      </tr>
    </thead>
  );

  return (
    <>
      <table id="result">
        {thead}
        <tbody>
          {investmentInput.investmentInput.map((e) => (
            <ListElement
              key={e.year}
              year={e.year}
              investment_value={e.interest}
              interest_year={e.valueEndOfYear}
              total_interest={e.annualInvestment}
              total_capital={e.annualInvestment}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
