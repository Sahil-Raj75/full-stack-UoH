import { useState } from 'react'

const Button = (props)=>{
  return(
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const StatisticLine = (props)=>{
  
  return(<>
    <p>{props.text} {props.value}</p>
  </>)
  
}

const Stats = (props)=>{
  if(props.total===0){
    return(
      <div>
        No feedback given
      </div>
    )
  }else{
    return(
      <>
        <StatisticLine text={"good"} value={props.good}/>
        <StatisticLine text={"neutral"} value={props.neutral}/>
        <StatisticLine text={"bad"} value={props.bad}/>
        <StatisticLine text={"total"} value={props.good + props.bad + props.neutral}/>
        <Average net={props.net} total={props.total}/>
        <Percentage total={props.total} sub={props.good}/>
      </>
    )
  }
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
        positive {(props.sub/props.total)*100}
      </div>
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


  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text={"good"}/>
      <Button handleClick={handleNeutral} text={"neutral"}/>
      <Button handleClick={handleBad} text={"bad"}/>

      <h1>statistics</h1>
      <Stats total={total} good={good} bad={bad} neutral={neutral}
      net={net}/>
    </div>
  )

}
export default App
