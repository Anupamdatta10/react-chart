import React from "react";
import {Bar} from  "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

const BarChart=()=>{
    const state={
        labels:["january","february","march","april","may","june"],
        datasets:[
            {
                label:"rainfall",
                backgroundColor:"blue",
                borderColor:"black",
                borderWidth:2,
                data:[10,20,30,40,50,60]
            }
        ]
    }
    return(
        <div>
             <Bar data={state}/>
        </div>
       
        
    )
}
export default BarChart;