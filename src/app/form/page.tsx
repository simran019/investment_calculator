"use client"

import { useState } from "react";
import { useEffect } from "react";


const Form = (props:any) => {

  
  const [currentSavings, setCurrentSavings] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [duration, setDuration] = useState("");


  const inputHandler=(identifier:string,value:any)=>{
    let inputData=parseInt(value);
    if(identifier==="currentSavings"){
      setCurrentSavings(inputData)
    }else if(identifier==="expectedReturn"){
      setExpectedReturn(inputData)
    }else if(identifier==="yearlyContribution"){
      setYearlyContribution(inputData)
    }else{
      setDuration(inputData)
    }
  }
  
  const resetHandler=()=>{
    setCurrentSavings("");
    setExpectedReturn("");
    setYearlyContribution("");
    setDuration("");
  }

  const submitHandler=(event:any)=>{
    event.preventDefault();
    const yearlyData=[];
    let newCurrentSavings=currentSavings
    let updatedInterest=0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
       updatedInterest= updatedInterest+yearlyInterest;
      newCurrentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        updatedInterest:updatedInterest,
        savingsEndOfYear: newCurrentSavings,
        yearlyContribution: yearlyContribution
      });
    }
    props.onSaveData(yearlyData);
    resetHandler();
    // console.log(currentSavings,expectedReturn,yearlyContribution,duration,yearlyData)
  }
  return (
    <form className="w-full flex justify-center" onSubmit={submitHandler}>
      <div className="flex flex-col bg-gradient-to-b from-[#307F6C] to-[#2B986D] px-4 py-8 rounded-md w-full gap-14 items-center">
        <div className="flex flex-col gap-14 md:flex-row">
          <div className="flex flex-col gap-14 justify-between">
            <div className="flex flex-col gap-2">
              <label>CURRENT SAVINGS ($)</label>
              <input 
              className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64" 
              onChange={(event)=>inputHandler('currentSavings',event.target.value)}
              value={currentSavings}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>EXPECTED INTEREST (%,PER YEAR)</label>
              <input 
              className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64" 
              onChange={(event)=>inputHandler('expectedReturn',event.target.value)}
              value={expectedReturn}
              />
            </div>
          </div>
          <div className="flex flex-col gap-14 justify-between">
            <div className="flex flex-col gap-2">
              <label>YEARLY SAVINGS ($)</label>
              <input 
              className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64" 
              onChange={(event)=>inputHandler('yearlyContribution',event.target.value)}
              value={yearlyContribution}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>INVESTMENT DURATION (YEARS)</label>
              <input 
              className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64" 
              onChange={(event)=>inputHandler('duration',event.target.value)}
              value={duration}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 text-slate-300">
          <button className="bg-gradient-to-b from-[#303b37] to-[#1a1f1d] p-2 rounded-md" onClick={resetHandler}>
            Reset
          </button>
          <button className="bg-gradient-to-b from-[#303b37] to-[#1a1f1d] p-2 rounded-md" type="submit">
            Calculate
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
