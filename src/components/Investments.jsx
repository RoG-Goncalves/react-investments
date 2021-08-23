import Investment from "./Investment";

export default function Investments({ children: allInvestments }) {
  return (
    <div key={allInvestments.id}>
      {allInvestments.map((investment) => {
        return <Investment>{investment}</Investment>;
      })}
    </div>
  );
}
