import React from "react";
import { TinyLine } from "@ant-design/charts";

export default function TinyLineChart(props) {
   return (
      <div>
         <TinyLine {...props.config} />;
      </div>
   )
}