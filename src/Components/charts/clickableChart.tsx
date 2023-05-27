// import React from "react";
// import * as charts from "@syncfusion/ej2-charts";
type ChartsPropType = {
  id: string;
  title: string;
  data: {
    value: number;
    text: string;
    labels: string[];
  };
  icon: string;
  color?: string;
  type: string;
};
export default function ClickableChart(props: ChartsPropType) {
  return (
    <div className="card  | Justify-center">
      <div>
        <div className="labels-container">
          <div className="label">{props.data.labels[0]}</div>
        </div>
      </div>
    </div>
  );
}
