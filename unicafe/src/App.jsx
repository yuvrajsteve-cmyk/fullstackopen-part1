import { useState } from 'react'

const App = () => {
  // ਹਰੇਕ ਬਟਨ ਦੇ ਕਲਿੱਕ ਨੂੰ ਸਟੇਟ ਵਿੱਚ ਸੇਵ ਕਰਨਾ ਹੈ
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      {/* 👈 ਇੱਥੇ ਆਪਣੇ ਬਟਨ ਅਤੇ ਕਲਿੱਕ ਹੈਂਡਲਰ ਬਣਾਓ */}
      
      <h1>statistics</h1>
      {/* 👈 ਇੱਥੇ ਡਾਟਾ ਪ੍ਰਿੰਟ ਕਰਕੇ ਦਿਖਾਓ */}
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App