import React from "react";
import { Pie } from "@ant-design/charts";

export default function PieChart(props) {
   return (
      <div>
         <Pie {...props.config} />
      </div>
   )
}