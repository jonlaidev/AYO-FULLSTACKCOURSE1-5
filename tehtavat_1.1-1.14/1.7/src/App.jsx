import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad) / total || 0
  const positivePercentage = (good / total) * 100 || 0

  return (
    <div>
      <h1>Give feeback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Average: {average.toFixed(1)}</p>
        <p>Positive: {positivePercentage.toFixed(1)}%</p>
      </div>
    </div>
  )
}

export default App