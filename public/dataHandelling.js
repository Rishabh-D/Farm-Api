// define functions to grab realtime data using farmid
let temperature = [];
let humidity = [];
let pH = [];
let soilMoisture = [];
let waterValve = false;

async function rawData() {
  temperature = [];
  humidity = [];
  pH = [];
  soilMoisture = [];
  waterValve = false;
  if (document.cookie) {
    //fetch last 5 data
    let data = await fetch("/data", {
      method: "GET",
      // body: JSON.stringify({ 'farmid': farmid }),
      headers: { "Content-type": "application/json" },
    });
    let data2 = await data.json();
    // console.table(data2.data);

    data2.data.reverse().forEach((d) => {
      d.temperature = Number(d.temperature) + Math.random() * 10;
      temperature.push(d.temperature);
      d.humidity = Number(d.humidity) + Math.random() * 10;
      humidity.push(d.humidity);
      d.pH = Number(d.pH) + Math.random() * 10;
      pH.push(d.pH);
      d.soilMoisture = Number(d.soilMoisture) + Math.random() * 10;
      soilMoisture.push(d.soilMoisture);
      waterValve = d.waterValveOn;
    });
    return true;
  } else {
    console.log("err in dataHandelling");
    return false;
  }
}
