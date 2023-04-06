import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Guesses } from "./Data";
import { Chart as ChartJS } from "chart.js/auto";
import { useDispatch } from "react-redux";
import { fetchPlayerData } from "../../store/movie-actions";

const BarGraph = () => {
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        // text: 'Chart.js Horizontal Bar Chart',
      },
    },
    scales: {
      y: {
        ticks: { color: 'white' }
      },
      x: {
        ticks: { color: 'white' }
      }
    }
  };

  const dispatch = useDispatch();
  const [chartData, setChartData] = useState({
    labels: Guesses.map((data) => data.guessNumber),
    datasets: [
      {
        label: "No of guesses",
        data: Guesses.map((data) => data.numberOfGuesses),
        // backgroundColor: ["gray"],
        backgroundColor: function (context) {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          return value
        },
        borderColor: [ "gray"],
        borderWidth: 2,
      },
    ],
  });
  
  useEffect(() => {
    dispatch(fetchPlayerData());
  },[dispatch]);

  // const dataFromFirebase = useSelector(state => state.playerData.retrievePlayerDataFromDatabase);
  // let obj = [];
  // for(let data of dataFromFirebase) {
  //   obj.push(data);
  // }
  //console.log(obj[0]);
  
  return <Bar data={chartData} options={options} />;
};

export default BarGraph;

// labels: UserData.map(data => data.year),
// datasets: [{
//     label: "Users Gained",
//     data: UserData.map(data => data.userGain),
//     backgroundColor: ["green","gray"],
//     borderColor: ["green","gray"],
//     borderWidth: 2,
// }]
