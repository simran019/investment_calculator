"use client";

import { useState } from "react";
import Form from "./form/page";
import Header from "./header/page";
import InvestmentData from "./investmentData/page";

export default function Home() {
  const [result, setResult] = useState(null);

  const onSaveHandler = (userInput: any) => {
    console.log(userInput);
    if (userInput != null) {
      setResult(userInput);
      console.log("ex");
      const yearlyData = [];
      let newCurrentSavings = userInput.currentSavings;
      let updatedInterest = 0;
      for (let i = 0; i < userInput.duration; i++) {
        const yearlyInterest =
          userInput.currentSavings * userInput.expectedReturn;
        updatedInterest = updatedInterest + yearlyInterest;
        newCurrentSavings += yearlyInterest + userInput.yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          updatedInterest: updatedInterest,
          savingsEndOfYear: newCurrentSavings,
          yearlyContribution: userInput.yearlyContribution,
        });
      }
      setResult(yearlyData);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="w-full h-screen flex items-start justify-center py-6 font-bold">
      <div className="flex flex-col items-center justify-start gap-10 w-3/4 md:w-1/2 h-full">
        <Header />
        <Form onSaveData={onSaveHandler} />
        {result == null ? (
          <p>Investment not yet calculated</p>
        ) : (
          <InvestmentData yearlyDataInfo={result} />
        )}
      </div>
    </div>
  );
}
