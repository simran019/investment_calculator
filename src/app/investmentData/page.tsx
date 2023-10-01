const InvestmentData = (props: any) => {
  // {year: 1, yearlyInterest: 2, savingsEndOfYear: 6, yearlyContribution: 3}
  const yearlyInvestmentData = props.yearlyDataInfo;
  // console.log(yearlyInvestmentData.length);
  return (
    <div className="pb-16">
      {props.yearlyDataInfo.length === 0 ? (
        "Investment not yet calculated"
      ) : (
        <table className="w-full">
          <thead className="p-2">
            <tr>
              <th className="p-2 w-48 text-[#43d199]">
                Year
              </th>
              <th className="p-2 w-48 text-[#43d199]">
                Total Savings
              </th>
              <th className="p-2 w-48 text-[#43d199]">
                Interest (Year)
              </th>

              <th className="p-2 w-48 text-[#43d199]">
                Total Interest
              </th>
              <th className="p-2 w-48 text-[#43d199]">
                Invested Capital
              </th>
            </tr>
          </thead>
          <tbody>
            {props.yearlyDataInfo.map((item: any) => {
              return (
                <tr key={item.year} className="text-center p-2 font-normal">
                  <td>{item.year}</td>
                  <td>Rs {item.savingsEndOfYear}</td>
                  <td>Rs {item.yearlyInterest}</td>
                  <td>Rs {item.updatedInterest}</td>
                  <td>Rs {item.yearlyContribution}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestmentData;
