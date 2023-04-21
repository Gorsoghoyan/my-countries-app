import { VectorMap } from "react-jvectormap";
import { numFormatter } from "../../utils/numFormatter";
import useEarthMapCountries from "./useEarthMapCountries";
import GridItem from "../../components/ui/GridItem/GridItem";
import HorizontalItem from "./HorizontalItem";
import s from "./styles.module.scss";

function EarthMapCountries() {
  const { checkedCountries, theBiggestCountries } = useEarthMapCountries();

  return (
    <GridItem
      className={s.earthMapCountries}
      variant={"d-i-column"}
      bg={"d-i-bg-1"}
    >
      <HorizontalItem
        bgVariant={"v-1"}
        title={"Your checked countries"}
      />
      <VectorMap
        map={"world_mill"}
        backgroundColor={"#20252a"}
        containerStyle={{
          width: "100%",
          height: 184
        }} 
        regionStyle={{
          initial: {
            fill: "#6c757d",
            stroke: "none",
            "fill-opacity": 0.9,
            "stroke-width": 0,
            "stroke-opacity": 0
          },
        }}
        series={{
          regions: [
            {
              scale: ["#348fe2", "#00acac", "#ffffff"],
              values: checkedCountries,
              min: 0,
              max: 100
            }
          ]
        }}
      />
      <div className={s.checkedCountriesWrapper}>
        {theBiggestCountries?.map((country, index) => (
          <HorizontalItem 
            key={country.id}
            hover
            fontSize={12}
            title={`${index + 1}. ${country.name.common}`}
            borderBottom={"1px solid #20252a"}
            badge={numFormatter(country.area)}
            badgeBgVariant={"v-1"}
          />
        ))}
      </div>
    </GridItem>
  );
}

export default EarthMapCountries;