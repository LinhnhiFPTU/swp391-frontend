import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import HeaderSeller from "~/layouts/components/HeaderSeller";
import WidgetCard from "./WidgetCard";
import PieChartQuantity from "./PieChartQuantity";
import PieChartRevenue from "./PieChartRevenue";
import BarChart from "./BarChart";
import styles from "./Chart.module.scss";
import Chart from "react-apexcharts";
import { options, optionsWeek, optionsMonth, optionsYear } from "./OptionsChart";
const cx = classNames.bind(styles);

const widgets = [
  {
    id: 0,
    type: "Revenue",
    isMoney: true,
    data: 0,
    compareTitle: "vs previous ",
    compareData: 0,
  },
  {
    id: 1,
    type: "Sale",
    isMoney: false,
    data: 0,
    compareTitle: "vs previous ",
    compareData: 0,
  },
  {
    id: 2,
    type: "Order",
    isMoney: false,
    data: 0,
    compareTitle: "vs previous ",
    compareData: 0,
  },
  {
    id: 3,
    type: "Follower",
    isMoney: false,
    data: 0,
    compareTitle: "vs previous ",
    compareData: 0,
  },
  {
    id: 4,
    type: "Feedback",
    isMoney: false,
    data: 0,
    compareTitle: "vs previous ",
    compareData: 0,
  },
];

const datas = [
  {
    name: "Revenue",
    color: "#ff0000",
    data: [
      59, 72, 76, 75, 83, 69, 91, 71, 87, 80, 94, 66, 65, 92, 76, 63, 88, 72,
      108, 99, 61, 105, 77, 68,
    ],
  },
  {
    name: "Sale",
    color: "#00ff00",
    data: [
      42, 77, 85, 19, 56, 102, 63, 209, 76, 44, 178, 92, 53, 135, 28, 99, 61,
      115, 37, 82, 47, 188, 70, 124,
    ],
  },
  {
    name: "Order",
    color: "#0000ff",
    data: [
      57, 83, 126, 92, 46, 74, 109, 63, 87, 111, 74, 58, 95, 31, 189, 76, 104,
      50, 98, 66, 122, 39, 82, 193,
    ],
  },
  {
    name: "Follower",
    color: "#cc00ff",
    data: [
      68, 84, 32, 155, 22, 104, 86, 246, 96, 80, 162, 122, 231, 53, 189, 49, 36,
      212, 195, 78, 71, 193, 129, 59,
    ],
  },
  {
    name: "Feedback",
    color: "#ff33cc",
    data: [
      76, 38, 91, 52, 105, 64, 89, 47, 163, 74, 55, 116, 82, 43, 122, 97, 68,
      83, 29, 78, 136, 59, 94, 107,
    ],
  },
];

const datasWeek = [
  {
    name: "Revenue",
    color: "#ff0000",
    data: [59, 72, 76, 75, 83, 69, 91],
  },
  {
    name: "Sale",
    color: "#00ff00",
    data: [42, 77, 85, 19, 56, 102, 63],
  },
  {
    name: "Order",
    color: "#0000ff",
    data: [57, 83, 126, 92, 46, 74, 109],
  },
  {
    name: "Follower",
    color: "#cc00ff",
    data: [68, 84, 32, 155, 22, 104, 86],
  },
  {
    name: "Feedback",
    color: "#ff33cc",
    data: [76, 38, 91, 52, 105, 64, 89],
  },
];

const datasMonth = [
  {
    name: "Revenue",
    color: "#ff0000",
    data: [59, 72, 76, 75],
  },
  {
    name: "Sale",
    color: "#00ff00",
    data: [42, 77, 85, 19],
  },
  {
    name: "Order",
    color: "#0000ff",
    data: [57, 83, 126, 92],
  },
  {
    name: "Follower",
    color: "#cc00ff",
    data: [68, 84, 32, 155],
  },
  {
    name: "Feedback",
    color: "#ff33cc",
    data: [76, 38, 91, 52],
  },
];

const datasYear = [
  {
    name: "Revenue",
    color: "#ff0000",
    data: [59, 72, 76, 75, 83, 69, 91, 71, 87, 80, 94, 66],
  },
  {
    name: "Sale",
    color: "#00ff00",
    data: [42, 77, 85, 19, 56, 102, 63, 209, 76, 44, 178, 92],
  },
  {
    name: "Order",
    color: "#0000ff",
    data: [57, 83, 126, 92, 46, 74, 109, 63, 87, 111, 74, 58],
  },
  {
    name: "Follower",
    color: "#cc00ff",
    data: [68, 84, 32, 155, 22, 104, 86, 246, 96, 80, 162, 122],
  },
  {
    name: "Feedback",
    color: "#ff33cc",
    data: [76, 38, 91, 52, 105, 64, 89, 47, 163, 74, 55, 116],
  },
];

function DataChart() {
  const [selectedWidget, setSelectedWidget] = useState([0]);
  const [countSelected, setCountSelected] = useState(1);
  const [dataChart, setDataChart] = useState(datas)
  const [optionsChart, setOptionsChart] = useState(options)
  const [filter, setFilter] = useState(() => {
    let newData = [
      { cur: 1, prev: 20 },
      { cur: 25, prev: 240 },
      { cur: 154, prev: 90 },
      { cur: 75, prev: 26 },
      { cur: 54, prev: 11 },
    ];
    newData.forEach((d, i) => {
      widgets[i].data = d.cur;
      widgets[i].compareData = Math.round((d.cur / d.prev) * 100) - 100;
    });

    return "day";
  });

  useEffect(() => {
    document.title = "Seller Centre";
  }, []);

  useEffect(() => {
    let newData = [
      {
        cur: Math.round(Math.random() * 99) + 1,
        prev: Math.round(Math.random() * 99) + 1,
      },
      {
        cur: Math.round(Math.random() * 99) + 1,
        prev: Math.round(Math.random() * 99) + 1,
      },
      {
        cur: Math.round(Math.random() * 99) + 1,
        prev: Math.round(Math.random() * 99) + 1,
      },
      {
        cur: Math.round(Math.random() * 99) + 1,
        prev: Math.round(Math.random() * 99) + 1,
      },
      {
        cur: Math.round(Math.random() * 99) + 1,
        prev: Math.round(Math.random() * 99) + 1,
      },
    ];
    newData.forEach((d, i) => {
      widgets[i].data = d.cur;
      widgets[i].compareData = Math.round((d.cur / d.prev) * 100) - 100;
    });
  }, [filter]);

  return (
    <>
      <HeaderSeller title="Data Chart" />
      <div className={cx("chart_wrapper")}>
        <div className={cx("chart_container")}>
          <div className={cx("chart_content")}>
            <div div className={cx("chart-content_header")}>
              <button
                className={cx("chart-btn", { active: filter === "day" })}
                onClick={() => {
                  setFilter("day"); 
                }}
              >
                Day
              </button>
              <button
                className={cx("chart-btn", { active: filter === "week" })}
                onClick={() => {
                  setFilter("week");
                }}
              >
                Week
              </button>
              <button
                className={cx("chart-btn", { active: filter === "month" })}
                onClick={() => {
                  setFilter("month");
                }}
              >
                Month
              </button>
              <button
                className={cx("chart-btn", { active: filter === "year" })}
                onClick={() => {
                  setFilter("year");
                }}
              >
                Year
              </button>
            </div>
            <div className={cx("chart-content_dataChart")}>
              <div className={cx("dataChart-title")}>Overview</div>
              <div className={cx("dataChart-widget")}>
                {widgets
                  .map((w) => ({
                    ...w,
                    compareTitle: w.compareTitle + filter,
                  }))
                  .map((widget) => (
                    <WidgetCard
                      key={widget.id}
                      data={widget}
                      setCountSelected={setCountSelected}
                      setSelectedWidget={setSelectedWidget}
                      selectedWidget={selectedWidget}
                    />
                  ))}
              </div>
              <div className={cx("dataChart-chart-header")}>
                <div className={cx("chart-title")}>Chart</div>
                <div className={cx("chart-count")}>
                  Selected{" "}
                  <span className={cx("count")}>{countSelected}/5</span>
                </div>
              </div>
              <div className={cx("dataChart-chart-data")}>
                <Chart
                  type="line"
                  width={"100%"}
                  height={"100%"}
                  series={[
                    ...dataChart.filter(
                      (d, index) => selectedWidget.indexOf(index) !== -1
                    ),
                  ]}
                  options={optionsChart}
                />
              </div>
            </div>
            <div className={cx("chart-content_moreChart")}>
              <div className={cx("chart-content_pieChart")}>
                <div className={cx("pieChart-quantity")}>
                  <div className={cx("title")}>Category Quantity</div>
                  <PieChartQuantity />
                </div>
                <div className={cx("pieChart-revenue")}>
                  <div className={cx("title")}>Category Revenue</div>
                  <PieChartRevenue />
                </div>
              </div>
              <div className={cx("chart-content_barChart")}>
                <div className={cx("title")}>Sale Quantity</div>
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataChart;
