import { useState } from 'react'

const Button = (props)=>{
  return(
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}
// component already built during step 2
const Stats = (props)=>{
  
  return(<>
    <p>{props.text} {props.value}</p>
  </>)
  
}

const Average = (props)=>{
  if(props.total === 0){
    return(<>
      <p>average {0}</p>
    </>)
  }else{
    return(
      <>
        <p>average {props.net/props.total}</p>
      </>
    )
  }
}

const App = ()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [net, setNet] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = ()=>{
    setGood(good+1);
    setNet(net + 1);
    console.log(net);
    setTotal(total+1);

  }

  const handleBad = ()=>{
    setBad(bad+1);
    setNet(net - 1);
    console.log(net);
    setTotal(total+1)
  }

  const handleNeutral = ()=>{
    setNeutral(neutral+1);
    setTotal(total+1);  

  }
  const Percentage = (props)=>{
    if(props.total === 0){
      return(
        <div>
          positive {0}
        </div>
      )
    }else{
      return(
        <div>
          positive {(good/total)*100}
        </div>
      )
    }
  }

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text={"good"}/>
      <Button handleClick={handleNeutral} text={"neutral"}/>
      <Button handleClick={handleBad} text={"bad"}/>

      <h1>statistics</h1>
      <Stats text={"good"} value={good}/>
      <Stats text={"neutral"} value={neutral}/>
      <Stats text={"bad"} value={bad}/>
      <Stats text={"total"} value={good + bad + neutral}/>
      <Average net={net} total={total}/>
      <Percentage total={total} good={good}/>

    </div>
  )

}

export default App
