"use client"

import { useState } from "react";
import Form from "./form/page";
import Header from "./header/page";
import InvestmentData from "./investmentData/page";


export default function Home() {
  const [yearlyData, setYearlyData] = useState([]);

  const onSaveHandler=(yearlyData:any)=>{
    setYearlyData(yearlyData)
  }

  return (
    <div className="w-full h-screen flex items-start justify-center py-6 font-bold">
      <div className="flex flex-col items-center justify-start gap-10 w-3/4 md:w-1/2 h-full">
        <Header/>
        <Form onSaveData={onSaveHandler}/>
        <InvestmentData yearlyDataInfo={yearlyData}/>
      </div>
    </div>
  );
}
