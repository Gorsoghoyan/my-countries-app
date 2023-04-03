import PageTopPart from "../../components/ui/PageTopPart/PageTopPart";
import NewRegisteredUsers from "./NewRegisteredUsers";
import AreaChartCountries from "./AreaChartCountries";
import useDashboard from "./useDashboard";
import s from "./styles.module.scss";

function Dashboard() {
  useDashboard()

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