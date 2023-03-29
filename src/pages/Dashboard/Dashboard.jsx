import PageTopPart from "../../components/ui/PageTopPart/PageTopPart";
import NewRegisteredUsers from "./NewRegisteredUsers";
import s from "./styles.module.scss";
import useDashboard from "./useDashboard";

function Dashboard() {
  useDashboard()

  return (
    <div className={s.container}>
      <PageTopPart title={"Dashboard"} />
      <section className={s.gridContainer}>
        <NewRegisteredUsers />
      </section>
    </div>
  );
}

export default Dashboard;