import PageTopPart from "../../components/ui/PageTopPart/PageTopPart";
import NewRegisteredUsers from "./NewRegisteredUsers";
import AreaChartCountries from "./AreaChartCountries";
import s from "./styles.module.scss";

function Dashboard() {
  return (
    <div className={s.container}>
      <PageTopPart title={"Dashboard"} />
      <section className={s.gridContainer}>
        <AreaChartCountries />
        <NewRegisteredUsers />
      </section>
    </div>
  );
}

export default Dashboard;