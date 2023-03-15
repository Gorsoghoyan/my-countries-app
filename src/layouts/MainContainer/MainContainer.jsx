import s from "./styles.module.scss";

function MainContainer({ children }) {
  return (
    <main className={s.mainContainer}>
      {children}
    </main>
  );
}

export default MainContainer;