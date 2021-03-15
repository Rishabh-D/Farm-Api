console.log("in plot");

let temperatureChart = document.getElementById("temperatureChart");
let temperatureLineChart = null;
let humidityChart = document.getElementById("humidityChart");
let humidityLineChart = null;
let moistureChart = document.getElementById("moistureChart");
let moistureLineChart = null;
let pHChart = document.getElementById("pHChart");
let pHLineChart = null;
let labels = ["1", "2", "3", "4", "5"];

function allcharts() {
  console.log("plotting temp");
  //temperature
  temperatureLineChart = new Chart(temperatureChart, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Temperature(deg-C)",
          fill: true,
          backgroundColor: "rgba(0, 195, 235, 0.5)",
          borderColor: "rgba(75,192,192,1)",
          lineTension: 0.1,
          data: temperature,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    },
  });

  //humidity
  console.log("plottinf humidity");

  humidityLineChart = new Chart(humidityChart, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "Humidity",
          fill: true,
          backgroundColor: "rgba(0, 195, 235, 0.5)",
          borderColor: "rgba(75,192,192,1)",
          lineTension: 0.1,
          data: humidity,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    },
  });

  //soil-moisture
  console.log("plottinf humidity");

  moistureLineChart = new Chart(moistureChart, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "Soil-Moisture",
          fill: true,
          backgroundColor: "rgba(0, 195, 235, 0.5)",
          borderColor: "rgba(75,192,192,1)",
          lineTension: 0.1,
          data: soilMoisture,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    },
  });

  //pH

  console.log("plottinf humidity");

  pHLineChart = new Chart(pHChart, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "pH",
          fill: true,
          backgroundColor: "rgba(0, 195, 235, 0.5)",
          borderColor: "rgba(75,192,192,1)",
          lineTension: 0.1,
          data: pH,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    },
  });

  //end of allChart function
}

async function updateChart() {
  let dummy = await rawData();
  console.log("from update", temperature);
  temperatureLineChart.data.datasets[0].data = temperature;
  temperatureLineChart.update();
  humidityLineChart.data.datasets[0].data = humidity;
  humidityLineChart.update();
  moistureLineChart.data.datasets[0].data = soilMoisture;
  moistureLineChart.update();
  pHLineChart.data.datasets[0].data = pH;
  pHLineChart.update();
}
