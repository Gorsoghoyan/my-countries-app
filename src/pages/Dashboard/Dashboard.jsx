import PageTopPart from "../../components/ui/PageTopPart/PageTopPart";
import AreaAndDonutChartCountries from "./AreaAndDonutChartCountries";
import NewRegisteredUsers from "./NewRegisteredUsers";
import EarthMapCountries from "./EarthMapCountries";
import Toast from "../../components/ui/Toast/Toast";
import s from "./styles.module.scss";

function Dashboard() {
  return (
    <div className={s.container}>
      <PageTopPart title={"Dashboard"} />
      <Toast />
      <section className={s.gridContainer}>
        <AreaAndDonutChartCountries />
        <EarthMapCountries />
        <NewRegisteredUsers />
      </section>
    </div>
  );
}

export default Dashboard;