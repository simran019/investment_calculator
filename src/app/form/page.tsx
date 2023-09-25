const Form=()=>{
    return(
        <form className="w-full flex justify-center">
          <div className="flex flex-col bg-gradient-to-b from-[#307F6C] to-[#2B986D] px-4 py-16 rounded-md w-full gap-14 items-center">
            <div className="flex flex-col gap-14 md:flex-row">
              <div className="flex flex-col gap-14 justify-between">
                <div className="flex flex-col gap-2">
                  <label>CURRENT SAVINGS ($)</label>
                  <input className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>EXPECTED INTEREST (%,PER YEAR)</label>
                  <input className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64" />
                </div>
              </div>
              <div className="flex flex-col gap-14 justify-between">
                <div className="flex flex-col gap-2">
                  <label>YEARLY SAVINGS ($)</label>
                  <input className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>INVESTMENT DURATION (YEARS)</label>
                  <input className="border-2 border-slate-300 rounded-md p-2 focus:outline-slate-300 bg-transparent w-64" />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 text-slate-300">
              <button className="bg-gradient-to-b from-[#303b37] to-[#1a1f1d] p-2 rounded-md">
                Reset
              </button>
              <button className="bg-gradient-to-b from-[#303b37] to-[#1a1f1d] p-2 rounded-md">
                Calculate
              </button>
            </div>
          </div>
        </form>
    )
}

export default Form;