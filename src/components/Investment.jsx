import TotalRevenues from "./TotalRevenues";

export default function Investment({ children: investment }) {
  const { reports } = investment;
  return (
    <div key={investment.id} className="m-4 border p-2">
      <h2 className="text-center font-semibold text-lg">
        {investment.description}
      </h2>
      <span className="text-center">
        <TotalRevenues>{reports}</TotalRevenues>
      </span>
      {
        //prettier-ignore
        reports
        .sort((a, b) => {return a.month - b.month;})
        .map((report, index) => {
          const { monthName, year, value } = report;
          //prettier-ignore
          const previousValue = reports[index > 0 ? index - 1 : index].value;
          const monthlyRevenue = Math.round((value / previousValue - 1) * 100);
          //prettier-ignore
          const checkClass = monthlyRevenue > 0 ? "text-green-800" : "text-red-800 font-semibold";

          return (
            <div
              className={`flex flex-row justify-between border-b-2 ${checkClass}`}
            >
              <div className="flex flex-row">
                <div className="mr-4 text-sm text-gray-900">
                  {monthName}/{year}
                </div>
                <div className={`text-left text-lg `}>
                  R$ {value.toLocaleString("pt-BR")}
                </div>
              </div>
              <div className={`text-right`}>{monthlyRevenue} %</div>
            </div>
          );
        })
      }
    </div>
  );
}
