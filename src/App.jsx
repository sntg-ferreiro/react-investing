import { useState } from "react";
import { Header } from "./components/Header";
import { ListDisplay } from "./components/ListDisplay";
import { UserInputs } from "./components/UserInputs";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  /*const annualDataDummy = {
    //es un arreglo con ele de esta forma
    year: i + 1, // year identifier
    interest: interestEarnedInYear, // the amount of interest earned in this year
    valueEndOfYear: investmentValue, // investment value at end of year
    annualInvestment: annualInvestment, // investment added in this year
  };*/

  const [annualData, setAnnualData] = useState([]);

  function onNumberChange(userInput) {
    let result = calculateInvestmentResults(...userInput);
    console.log("result "+result)
    setAnnualData((prev) => prev.concat(result))
  }

  return (
    <>
      <Header />
      <UserInputs onNumberChange={onNumberChange} />
      <ListDisplay investmentInput={annualData} />
    </>
  );
}

export default App;
