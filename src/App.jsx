import { useState } from "react";
import { Header } from "./components/Header";
import { ListDisplay } from "./components/ListDisplay";
import { UserInputs } from "./components/UserInputs";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {

  const [annualData, setAnnualData] = useState([]);

  function onNumberChange(userInput) {
    let result = calculateInvestmentResults(userInput);
    setAnnualData((prev) => [...result, ...prev])
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
