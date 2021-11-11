import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  let data = [
    props.HP,
    props.Att,
    props.Def,
    props.SAtt,
    props.SDef,
    props.Spd,
  ];
  return (
    <div>
      <Bar
        data={{
          labels: ["Hp", "Att", "Def", "S.Att", "S.Def", "Spd"],
          datasets: [
            {
              label: "Base Stats",
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={200}
        options={{
          indexAxis: "y",
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
      <p>
        <b>Total {props.Total}</b>
      </p>
    </div>
  );
}

export default BarChart;
