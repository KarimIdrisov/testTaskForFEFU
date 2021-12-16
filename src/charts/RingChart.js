import React from "react";
import { RingProgress } from "@ant-design/charts";

export default function RingChart(props) {
   return (
      <div>
         <RingProgress {...props.config} />;
      </div>
   )
}