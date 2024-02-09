import React from "react";
import { formatter } from "../util/investment.js";

export const ListElement = ({
  year,
  investment_value,
  interest_year,
  total_interest,
  total_capital,
}) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(investment_value)}</td>
      <td>{formatter.format(interest_year)}</td>
      <td>{formatter.format(total_interest)}</td>
      <td>{formatter.format(total_capital)}</td>
    </tr>
  );
};
