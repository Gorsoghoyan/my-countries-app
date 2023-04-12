import v from "../assets/sass/_variables.scss";

export const donutChartOptions = {
  chart: {
    offsetY: -15,
  },
  labels: ["Independent countries", "Dependent countries"],
  fill: { colors: [v.populationFill, "#00acac"] },
  stroke: { colors: ["", ""] },
  colors: [v.populationFill, "#00acac"],
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: "left",
    labels: {
      colors: "#9ba8b4"
    },
    onItemHover: {
      highlightDataSeries: false,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 3,
    },
    markers: {
      width: 10,
      height: 10,
    }
  }
};