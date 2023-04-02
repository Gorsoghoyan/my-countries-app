import PageTopPart from "../../components/ui/PageTopPart/PageTopPart";
import CountriesList from "./CountriesList";
import s from "./styles.module.scss";

function Countries() {
  return (
    <div className={s.container}>
      <PageTopPart 
        title={"Countries"} 
        button={true}
        btnText={"Add country"}
        variant={"a-c"}
        onClick={() => ""}
      />
      <CountriesList />
    </div>
  );
}

export default Countries;