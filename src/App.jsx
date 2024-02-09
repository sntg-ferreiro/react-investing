import { useState } from "react";
import { Header } from "./components/Header";
import { ListDisplay } from "./components/ListDisplay";
import { UserInputs } from "./components/UserInputs";

function App() {
  const [inputState, setInputState] = useState({
    initialInvestment: 10,
    annualInvestment: 10,
    expectedReturn: 10,
    duration: 10,
  });

  const isValidInput = 100 > inputState.duration >= 1;

  function handleChange(newValue, field) {
    setInputState((prev) => {
      return { ...prev, [field]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInputs inputState={inputState} onChange={handleChange} />
      {isValidInput ? (
        <ListDisplay inputState={inputState} />
      ) : (
        <p className="center">Please input a duration greater than Zero</p>
      )}
    </>
  );
}

export default App;
