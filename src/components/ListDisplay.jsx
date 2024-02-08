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

  let totalCapital = 0;
  let totalInterest = 0;
  let baseYear = 0;

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

function computeValuesAndReturnElement({year, interest, valueEndOfYear, annualInvestment}){
  totalCapital += valueEndOfYear;
  totalInterest += annualInvestment;
  baseYear += year;

  return (
    <ListElement
      key={baseYear}
      year={baseYear}
      investment_value={interest}
      interest_year={valueEndOfYear}
      total_interest={totalInterest}
      total_capital={totalCapital}
    />
  )
}

  return (
    <>
      <table id="result">
        {thead}
        <tbody>
          {investmentInput.investmentInput.map((e) => {
            console.log(e)
            return computeValuesAndReturnElement(e)
            })}
        </tbody>
      </table>
    </>
  );
};
