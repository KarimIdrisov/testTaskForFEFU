import React from "react";
import { Line } from "@ant-design/charts";

export default function LineChart(props) {
   return (
      <div>
         <Line {...props.config} />;
      </div>
   )
}