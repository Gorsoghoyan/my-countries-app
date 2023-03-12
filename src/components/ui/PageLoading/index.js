import s from "./styles.module.scss";

const words = ["L", "O", "A", "D", "I", "N", "G"];

const Span = ({ word }) => <span>{word}</span>;

function PageLoading() {
  return (
  <div className={s.loading}>
    <div className={s.loadingText}>
      {words.map((word, index) => (
        <Span key={index} word={word} />
      ))}
    </div>
  </div>
  )
}

export default PageLoading;
