import { VectorMap } from "react-jvectormap";
import GridItem from "../../components/ui/GridItem/GridItem";
import HorizontalItem from "./HorizontalItem";
import s from "./styles.module.scss";

function EarthMapCountries() {

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
          height: "200px"
        }}
        regionStyle={{
          initial: {
            fill: "#adb5bd",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
        }}
      />
    </GridItem> 
  );
}

export default EarthMapCountries;