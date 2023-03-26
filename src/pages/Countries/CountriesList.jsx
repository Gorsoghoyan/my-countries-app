import CountryItem from "./CountryItem";
import useCountriesList from "./useCountriesList";
import s from "./styles.module.scss";

function CountriesList() {
  const { 
    error,
    loading,
    btnLoading,
    seeMore,
    countries,
    editCountry,
    deleteCountry
  } = useCountriesList();

  if (error) {

  }

  if (loading) {

  }

  if (!countries.length) {

  }

  return (
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
          deleteCountry={deleteCountry}
          editCountry={editCountry}
        />
      ))}
    </section>
  );
}

export default CountriesList;