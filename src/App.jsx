import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const roundToTwoDec = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

function App() {
  const [firstSide, setFirstSide] = useState(0)
  const [secondSide, setSecondSide] = useState(0)

  const formDistance = () => {
    const distance = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2))
    return roundToTwoDec(distance)
  }

  const convertSideValue = (value) => {
    if (value.includes(",") || value.includes(".") || value < 10) {
      return value * 100;
    } else {
      return value;
    }
  }

  return (
    <>
      <div className="card">
        <input
          type="number"
          style={{
            marginRight: "1rem"
          }}
          onChange={(evt) => {
            const { value } = evt.target;
            setFirstSide(convertSideValue(value));
          }}
        />
        <input
          type="number"
          onChange={(evt) => {
            const { value } = evt.target;
            setSecondSide(convertSideValue(value));
          }}
        />
        <div>
          {
            `Etäisyys on ${formDistance()}m`
          }
        </div>
      </div>
    </>
  )
}

export default App
