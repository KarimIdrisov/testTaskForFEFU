import React from "react";
import { Column } from "@ant-design/charts";

export default function BarChart(props) {
   return (
      <div>
         <Column {...props.config} />;
      </div>
   )
}