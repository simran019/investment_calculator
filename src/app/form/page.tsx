"use client";

import { useState } from "react";
import { useEffect } from "react";

const initialInput = {
  currentSavings: 0,
  expectedReturn: 0,
  yearlyContribution: 0,
  duration: 0,
};
const Form = (props: any) => {
  const [userInput, setUserInput] = useState(initialInput);

  const inputHandler = (identifier: string, value: any) => {
    let inputData = Number(value);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: inputData,
      };
    });
  };

  const resetHandler = (e: any) => {
    e.preventDefault();
    setUserInput(initialInput);
    props.onSaveData(null);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onSaveData(userInput);
  };
  return (
    <form className="w-full flex justify-center" onSubmit={submitHandler}>
      <div className="flex flex-col bg-gradient-to-b from-[#307F6C] to-[#2B986D] px-4 py-8 rounded-md w-full gap-14 items-center">
        <div className="flex flex-col gap-14 md:flex-row">
          <div className="flex flex-col gap-14 justify-between">
            <div className="flex flex-col gap-2">
              <label>CURRENT SAVINGS ($)</label>
              <input
                className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64"
                onChange={(event) =>
                  inputHandler("currentSavings", event.target.value)
                }
                value={userInput.currentSavings}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>EXPECTED INTEREST (%,PER YEAR)</label>
              <input
                className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64"
                onChange={(event) =>
                  inputHandler("expectedReturn", event.target.value)
                }
                value={userInput.expectedReturn}
              />
            </div>
          </div>
          <div className="flex flex-col gap-14 justify-between">
            <div className="flex flex-col gap-2">
              <label>YEARLY SAVINGS ($)</label>
              <input
                className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64"
                onChange={(event) =>
                  inputHandler("yearlyContribution", event.target.value)
                }
                value={userInput.yearlyContribution}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>INVESTMENT DURATION (YEARS)</label>
              <input
                className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64"
                onChange={(event) =>
                  inputHandler("duration", event.target.value)
                }
                value={userInput.duration}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 text-slate-300">
          <button
            className="bg-gradient-to-b from-[#303b37] to-[#1a1f1d] p-2 rounded-md"
            onClick={resetHandler}
          >
            Reset
          </button>
          <button
            className="bg-gradient-to-b from-[#303b37] to-[#1a1f1d] p-2 rounded-md"
            type="submit"
          >
            Calculate
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
