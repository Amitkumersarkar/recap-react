import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  //local data loading in json format
  // useState to hold data
  const [watches, setWatches] = useState([]);

  // using useEffect to load data by fetching

  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  }, [])

  // making fake data
  // const watches = [
  //   {
  //     "brand": "Apple",
  //     "model": "Apple Watch Series 9",
  //     "price": 399,
  //     "features": ["Always-On Retina Display", "Blood Oxygen Sensor", "ECG App", "GPS", "Water Resistant"],
  //     "battery_life": "18 hours",
  //     "os": "watchOS"
  //   },
  //   {
  //     "brand": "Samsung",
  //     "model": "Galaxy Watch 6",
  //     "price": 349,
  //     "features": ["Super AMOLED Display", "Body Composition Analysis", "Heart Rate Monitoring", "GPS", "LTE Option"],
  //     "battery_life": "40 hours",
  //     "os": "Wear OS"
  //   },
  //   {
  //     "brand": "Garmin",
  //     "model": "Garmin Forerunner 965",
  //     "price": 599,
  //     "features": ["AMOLED Display", "Multi-Band GPS", "VO2 Max Tracking", "Sleep Monitoring", "Pulse Oxi meter"],
  //     "battery_life": "23 days",
  //     "os": "Garmin OS"
  //   },
  //   {
  //     "brand": "Fit-bit",
  //     "model": "Fit-bit Sense 2",
  //     "price": 299,
  //     "features": ["EDA Sensor", "ECG App", "Built-in GPS", "Sleep Tracking", "Stress Management"],
  //     "battery_life": "6 days",
  //     "os": "Fit-bit OS"
  //   },
  //   {
  //     "brand": "Huawei",
  //     "model": "Huawei Watch GT 4",
  //     "price": 249,
  //     "features": ["AMOLED Display", "SpO2 Monitoring", "Long Battery Life", "GPS", "Sports Modes"],
  //     "battery_life": "14 days",
  //     "os": "HarmonyOS"
  //   }
  // ]


  return (
    <>
      <div>
        <h2>React Practice Project</h2>
        {/* <Watch></Watch> */}
        {/* looping the fake data */}
        {
          watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
        }
      </div>
    </>
  )
}

export default App
