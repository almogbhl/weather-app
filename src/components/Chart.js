import React from "react";
import  average  from '../utilities/calc';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-Sparklines";




export default props => {
  return (
    <div>
      <Sparklines width={180} height={120} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
};
