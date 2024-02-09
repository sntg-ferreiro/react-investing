import React from "react";
import { ListElement } from "./ListElement";
import {calculateInvestmentResults} from '../util/investment.js'



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

export const ListDisplay = (inputState) => {

  let annualData = calculateInvestmentResults(inputState.inputState);
  let initialInvestment = annualData[0].valueEndOfYear - (annualData[0].annualInvestment + annualData[0].interest);

  

function computeValuesAndReturnElement({year, interest, valueEndOfYear, annualInvestment}){
  
  let totalInterest = valueEndOfYear - (annualInvestment * year) - initialInvestment;
  let totalCapital = valueEndOfYear - totalInterest;

  return (
    <ListElement
      key={year}
      year={year}
      investment_value={valueEndOfYear}
      interest_year={interest}
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
          {annualData.map((e) => {
            return computeValuesAndReturnElement(e)
            })}
        </tbody>
      </table>
    </>
  );
};
