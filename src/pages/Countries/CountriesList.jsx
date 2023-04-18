import { Fragment } from "react";
import { NO_COUNTRIES_MESSAGE } from "../../utils/constants";
import useCountriesList from "./useCountriesList";
import CountryItem from "./CountryItem";
import Button from "../../components/ui/Button/Button";
import Spinner from "../../components/ui/Spinner/Spinner";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import ComponentLoading from "../../components/ui/ComponentLoading/ComponentLoading";
import DeleteModal from "../../components/ui/Modals/DeleteModal/DeleteModal";
import s from "./styles.module.scss";
import AddEditCountryModal from "../../components/ui/Modals/AddEditCountryModal/AddEditCountryModal";
import Toast from "../../components/ui/Toast/Toast";

function CountriesList() {
  const {
    error,
    loading,
    btnLoading,
    seeMore,
    dataLimit,
    countries,
    deleteModalRef,
    editModalRef,
    checkCountry,
    editCountry,
    deleteCountry,
    getMoreCountries
  } = useCountriesList();

  if (error) {
    return <ErrorMessage error={error} variant={"c-p"} />;
  }

  if (loading) {
    return <ComponentLoading variant={"c-p"} />;
  }

  if (!countries.length) {
    return <ErrorMessage error={NO_COUNTRIES_MESSAGE} variant={"c-p"} />;
  }

  return (
    <Fragment>
      <section className={s.countriesList}>
        {countries.map(country => (
          <CountryItem
            key={country.id}
            id={country.id}
            region={country.region}
            name={country.name.common}
            flagURL={country.flags.png}
            population={country.population}
            capital={country.capital
              ? country.capital[0]
              : "Has no capital city"
            }
            isChecked={country.isChecked}
            checkCountry={checkCountry}
            deleteCountry={deleteCountry}
            editCountry={editCountry}
          />
        ))}
      </section>  
      {countries.length >= dataLimit && (
        <Button
          variant={"c-gm"}
          disabled={!seeMore || btnLoading}
          onClick={getMoreCountries}
        >
          {!btnLoading && (seeMore ? "See more" : "You are up to date!")}
          {btnLoading && <Spinner size={18} />}
        </Button>
      )}
      <DeleteModal ref={deleteModalRef} collection={"countries"} />
      <AddEditCountryModal type="add" />
      <AddEditCountryModal ref={editModalRef} type="edit" />
      <Toast type="info" />
    </Fragment>
  );
}

export default CountriesList;