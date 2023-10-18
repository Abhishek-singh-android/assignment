import { Card, Title, BarChart, Flex } from "@tremor/react";
import { SelectComponent } from "./SelectComponent";

const chartdata4 = [
  {
    date: "Jan",
    running: 167,
  },
  // ...
  {
    date: "Feb",
    running: 140,
  },
  {
    date: "Mar",
    running: 100,
  },
  {
    date: "Apr",
    running: 120,
  },
  {
    date: "May",
    running: 132,
  },
  {
    date: "June",
    running: 150,
  },
  {
    date: "July",
    running: 200,
  },
  {
    date: "Aug",
    running: 150,
  },
  {
    date: "Sep",
    running: 140,
  },
  {
    date: "Oct",
    running: 132,
  },
  {
    date: "Nov",
    running: 132,
  },
  {
    date: "Dec",
    running: 132,
  },
];

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">{category.value} bpm</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const BarChartComponent = () => {
  return (
    <>
      <Card className="mt-4 dark:bg-tremor-background">
      <Flex justifyContent="between" alignItems="center">
      <Title className=" dark:text-slate-950">Overview</Title>
      <SelectComponent/>
      </Flex>
        <BarChart
          className=" dark:bg-tremor-background h-72 mt-4 rounded-tremor-default"
          data={chartdata4}
          index="date"
          categories={["running"]}
          colors={["blue"]}
          yAxisWidth={30}
          customTooltip={customTooltip}
        />
      </Card>
    </>
  );
};

export default BarChartComponent;