import { useState } from 'react'

const StatisticLine = (props) => {
  return <tr><td>{props.type}</td><td>{props.number}</td></tr>
}

const Statistics = (props) => {
  const all = props.good+props.neutral+props.bad
  const score = props.good*1 + props.bad*-1
  if (all===0) {
    return (
      <div><p>No Feedback Given</p></div>
    )
  }
  else {
    return (
      <div>
        <table>
          <tbody>
        <StatisticLine type='good' number={props.good}/>
        <StatisticLine type='neutral' number={props.neutral}/>
        <StatisticLine type='bad' number={props.bad}/>
        <StatisticLine type='all' number={all}/>
        <StatisticLine type='average' number={score/all}/>
        <StatisticLine type='positive' number={props.good/(props.good+props.bad) * 100 + "%"}/>
        </tbody>
        </table>
      </div>
    )
  }
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <div><button onClick={()=>setGood(good+1)}>good</button> <button onClick={()=>setNeutral(neutral+1)}>neutral</button> <button onClick={()=>setBad(bad+1)}>bad</button></div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App