import { 
  Text,
  Area, 
  XAxis, 
  YAxis,
  Tooltip, 
  AreaChart, 
  CartesianGrid, 
  ResponsiveContainer,
} from "recharts";
import GridItem from "../../components/ui/GridItem/GridItem";
import s from "./styles.module.scss";

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

function AreaChartCountries() {

  return (
    <GridItem 
      className={s.areaChartCountries} 
      bg={"d-i-bg-2"} 
      gridColumn={"1 / 3"}
    > 
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDashoffset="1 1" />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="uv" 
            strokeOpacity={0} 
            fillOpacity={1} 
            fill="rgb(52, 143, 226, .7)" 
          />  
          <Area 
            type={"monotone"} 
            dataKey="pv" 
            strokeOpacity={0} 
            fillOpacity={1} 
            fill="rgb(73, 182, 214, .7)" 
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className={s.rightChartWrapper}>

      </div>
    </GridItem>
  );
};

export default AreaChartCountries;