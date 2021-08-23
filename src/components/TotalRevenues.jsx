export default function TotalRevenues({ children: investmentReports }) {
  const grossRevenue = investmentReports[11].value - investmentReports[0].value;
  //prettier-ignore
  const percentualRevenue =
    ((investmentReports[11].value/investmentReports[0].value) - 1) * 100;
  const checkClass = percentualRevenue > 0 ? "text-green-800" : "text-red-800";

  return (
    <div className={`text-base font-semibold mb-2 ${checkClass}`}>
      Rendimento Total: R$ {Math.round(grossRevenue * 100) / 100} (
      {percentualRevenue.toLocaleString("pt-BR")} %)
    </div>
  );
}
