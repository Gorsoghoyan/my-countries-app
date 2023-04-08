import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import GridItem from "../../components/ui/GridItem/GridItem";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { numFormatter } from "../../utils/numFormatter";
import { stringFormatter } from "../../utils/stringFormatter";
import v from "../../assets/sass/_variables.scss";
import s from "./styles.module.scss";

function TooltipContent(props) {
  if (!props.active || !props.payload) return;

  const data = props.payload[0].payload;

  return (
    <div className={s.tooltipContent}>
      <h2>{data.name}</h2>
      <div className={s.p}>
        <span>Population: {numFormatter(data.population)}</span>
      </div>
      <div className={s.a}>
        <span>Area: {numFormatter(data.area)}</span>
      </div>
    </div>
  );
}

function AreaChartCountries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getChartData = async () => {
      const q = query(
        collection(db, "countries"),
        orderBy("population", "desc"),
        limit(7)
      );

      const documentSnapshots = await getDocs(q);

      const chartData = documentSnapshots.docs.map(doc => {
        const country = doc.data();

        return {
          name: country.name.common,
          population: country.population,
          area: country.area
        };
      });

      setData(chartData);
      console.log(chartData)
    };
    getChartData();
  }, []);

  return (
    <GridItem
      className={s.areaChartCountries}
      bg={"d-i-bg-2"}
      gridColumn={"1 / 3"}
    >
      <div className={s.leftChartWrapper}>
        <div className={s.head}>
          <h2>Countries Area Chart</h2>
          <p>Here you can see the 7 most populous contries</p>
        </div>
        {!!data.length && (
          <ResponsiveContainer className={s.responsiveContainer}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis 
                dataKey="name" 
                stroke="#dee2e6" 
                tickFormatter={stringFormatter} 
              />
              <YAxis stroke="#dee2e6" tickFormatter={numFormatter} />
              <CartesianGrid opacity={0.5} />
              <Tooltip
                content={<TooltipContent />}
                wrapperStyle={{ outline: "none" }}
              />
              <Area
                type="monotone"
                dataKey="population"
                strokeOpacity={0}
                fillOpacity={1}
                fill={v.populationFill}
              />
              <Area
                type={"monotone"}
                dataKey="area"
                strokeOpacity={0}
                fillOpacity={1}
                fill={v.areaFill}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className={s.rightChartWrapper}>

      </div>
    </GridItem>
  );
};

export default AreaChartCountries;