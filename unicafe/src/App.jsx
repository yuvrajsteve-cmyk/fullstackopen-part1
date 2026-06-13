
import { useState } from 'react'

const Statistics = (props) => {

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100
  return (
    <div>

      <h1>Statistics</h1>
          <h3>good {good}</h3>
          <h3>neutral {neutral}</h3>
          <h3>bad {bad}</h3>
          <h3>total {total}</h3>
          <h3>average {average}</h3>
          <h3>positive {positive} %</h3>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>Give me feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

     

      <Statistics good={good} neutral={neutral} bad={bad}/>

      
    </div>
  )
}

export default App