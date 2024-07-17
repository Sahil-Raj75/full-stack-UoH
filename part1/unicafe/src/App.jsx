import { useState } from 'react'

const Button = (props)=>{
  return(
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const Stats = (props)=>{
  
  return(<>
  {/* console.log('started rendering stats') */}
    <p><strong>{props.text} {props.value}</strong></p>
  </>)
  
}

const App = ()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text={"good"}/>
      <Button handleClick={()=>setNeutral(neutral+1)} text={"neutral"}/>
      <Button handleClick={()=>setBad(bad+1)} text={"bad"}/>

      <h1>statistics</h1>
      <Stats text={"good"} value={good}/>
      <Stats text={"neutral"} value={neutral}/>
      <Stats text={"bad"} value={bad}/>

    </div>
  )

}

export default App
