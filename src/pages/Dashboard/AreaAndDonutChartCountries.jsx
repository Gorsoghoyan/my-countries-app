import ReactApexChart from "react-apexcharts";
import GridItem from "../../components/ui/GridItem/GridItem";
import useAreaChartCountries from "./useAreaAndDonutChartCountries";
import ComponentLoading from "../../components/ui/ComponentLoading/ComponentLoading";
import { Area, XAxis, YAxis, Tooltip, AreaChart, CartesianGrid, ResponsiveContainer } from "recharts";
import { numFormatter } from "../../utils/numFormatter";
import { stringFormatter } from "../../utils/stringFormatter";
import v from "../../assets/sass/_variables.scss";
import s from "./styles.module.scss";
import { donutChartOptions } from "../../configs/dashboard";

const data = [
  {
    "name": "Page A",
    "population": 4000,
    "area": 2400,
  },
  {
    "name": "Page B",
    "population": 3000,
    "area": 1398,
  },
  {
    "name": "Page C",
    "population": 2000,
    "area": 9800,
  },
  {
    "name": "Page D",
    "population": 2780,
    "area": 3908,
  },
  {
    "name": "Page E",
    "population": 1890,
    "area": 4800,
  },
  {
    "name": "Page F",
    "population": 2390,
    "area": 3800,
  },
  {
    "name": "Page G",
    "population": 3490,
    "area": 4300,
  }
]


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

function AreaAndDonutChartCountries() {
  const {
    areaLoading,
    areaChartData,
    donutLoading,
    independentCountriesSize,
    totalCountriesSize
  } = useAreaChartCountries();

  return (
    <GridItem className={s.areaChartCountries} bg={"d-i-bg-2"}>
      <div className={s.leftChartWrapper}>
        <div className={s.head}>
          <h2>Countries Area Chart</h2>
          <p>Here you can see the 7 most populous contries</p>
        </div>
        <div className={s.responsiveContainer}>
          {areaLoading && <ComponentLoading />}
          {/* {!!areaChartData.length && ( */}
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis
                dataKey="name"
                stroke="#dee2e6"
                axisLine={false}
                tickLine={false}
                tickFormatter={stringFormatter}
              />
              <YAxis
                stroke="#dee2e6"
                tickCount={6}
                axisLine={false}
                tickLine={false}
                tickFormatter={numFormatter}
              />
              <CartesianGrid opacity={0.2} vertical={false} />
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
          {/* )} */}
        </div>
      </div>
      <div className={s.rightChartWrapper}>
        <div className={s.head}>
          <h2>{totalCountriesSize?.toLocaleString("en-US")}</h2>
          <p>Total countries</p>
        </div>
        {donutLoading && <ComponentLoading size={40} />}
        {independentCountriesSize && totalCountriesSize && (
          <ReactApexChart
            type={"donut"}
            width={"100%"}
            height={300}
            series={[
              independentCountriesSize,
              totalCountriesSize - independentCountriesSize,
            ]}
            options={donutChartOptions}
          />
        )}
      </div>
    </GridItem>
  );
};

export default AreaAndDonutChartCountries;