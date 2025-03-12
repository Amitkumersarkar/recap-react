import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  // making fake data
  const watches = [

    { id: 101, name: 'Apple smart Watch', price: '350 usd', color: 'black' },
    { id: 102, name: 'Xiaomi smart Watch', price: '50 usd', color: 'gray' },
    { id: 103, name: 'Huawei smart Watch', price: '100 usd', color: 'silver' },
  ]

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
