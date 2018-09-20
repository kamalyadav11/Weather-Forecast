import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Charts = props => {
  return (
    <div>
      <Sparklines height={100} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
};

export default Charts;
