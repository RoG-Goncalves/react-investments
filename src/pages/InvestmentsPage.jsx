import { allInvestments } from "../data/investments-2";
import Header from "../components/Header";
import Main from "../components/Main";
import Investments from "../components/Investments";

export default function InvestmentsPage() {
  return (
    <div>
      <Header>React Investments</Header>

      <Main>
        <Investments>{allInvestments}</Investments>
      </Main>
    </div>
  );
}
