import { useState } from "react"

const StatisticLine = (props) => {
  console.log(props)

  return (
    
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    
  )
}

const Button = (props) =>{
  console.log(props)

  return (
 
    <button style={{marginRight:'15px'}} onClick={props.handleClick}>{props.text}</button>
    
  )
}

const Statistics = (props) => {
  console.log(props)

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        <h3>Statistics</h3>
        <h3>No Feedback Given</h3>
      </div>
    )
  }

  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    <div>
      <h1>Statistics</h1> 
      <table>
        <tbody>
           
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='total' value={total}/>
            <StatisticLine text='average' value={average}/>
            <StatisticLine text='positive' value={positive + ' %'}/>
        </tbody>    
      </table>      
    </div>
  )
}



const App = () =>{

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  



  return (
    <div>
      <h1>Give Feedback</h1>
           <Button handleClick={() => setGood(good + 1)} text='good' />
           <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
           <Button handleClick={() => setBad(bad + 1)} text='bad'/>

         <Statistics good={good} neutral={neutral} bad={bad}/>
         
    </div>
  )
}

export default App