import { useState } from "react"




const App = () => {

  const [clicks, setClicks] = useState({left:0, right:0})

  const handleLeftClick = () => setClicks({...clicks, right: clicks.right + 1})
  const handleRightClick = () => setClicks({...clicks, left: clicks.left + 1})



  return (
    <div>
         <h1>{clicks.left}</h1>
         <button onClick={handleLeftClick}>left</button>
         <button onClick={handleRightClick}>right</button>
         <h1>{clicks.right}</h1>
         
    </div>
  )
}

export default App