import GridItem from "../../components/ui/GridItem/GridItem";
import ImageDiv from "../../components/ui/ImageDiv/ImageDiv";
import { SELECT_COUNTRY_TITLE } from "../../utils/constants";
import { BiSelectMultiple } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import s from "./styles.module.scss";

function CountryItem({
  id,
  name,
  region,
  flagURL,
  capital,
  population,
  checkCountry,
  editCountry,
  deleteCountry
}) {
  return (
    <GridItem className={s.countryItem} variant={"c-i"}>
      <ImageDiv variant={"c-i"} image={flagURL}>
        <div className={s.bgEffect}></div>
      </ImageDiv>
      <div className={s.countryInfo}>
        <h2>{name}</h2>
        <p>Population:<span>
          {population.toLocaleString("en-US")}
        </span></p>
        <p>Region:<span>{region}</span></p>
        <p>Capital:<span>{capital}</span></p>
      </div>
      <div className={s.countryId}>#{id}</div>
      <div className={s.actions}>
        <BiSelectMultiple 
          title={SELECT_COUNTRY_TITLE} 
          onClick={() => checkCountry(id)} 
        />
        <MdEdit onClick={() => editCountry(id)} />
        <AiFillDelete onClick={() => deleteCountry(id)} />
      </div>
    </GridItem>
  );
}

export default CountryItem;