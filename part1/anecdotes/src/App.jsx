// import { useState } from 'react'

// const Button = (props)=>{
//   return(
//     <div>
//       <button onClick={props.run}>{props.text}</button>
//     </div>
//   )
// }

// const GetMax = (props)=>{
//   return(
//     <div>
//       {props.anecdotes[props.max]}<br></br>
//       has {props.points[props.max]} votes.
//     </div>
//   )
// }

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//     'The only way to go fast, is to go well.'
//   ]
//   const [max, setMax] = useState(0);
//   const [selected, setSelected] = useState(0)
//   const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

//   const getRandomAnecdote = ()=>{
//     const latest = (Math.floor(Math.random() * anecdotes.length));
//     setSelected(latest);  
//   }

//   const vote = ()=>{
//     const copy = [...points];
//     copy[selected]++;
//     setPoints(copy); 
//     updateMax();
//   }

//   const updateMax = ()=>{
//     let maxIndex = 0;
//     let maxVotes = 0;
//     for (let i = 0; i < points.length; i++) {
//       if (points[i] > maxVotes) {
//         maxVotes = points[i];
//         maxIndex = i;
//       }
//     }
//     setMax(maxIndex);
//   }

//   return (
//     <div>
//       <h1>Anecdote of the day</h1>
//       {anecdotes[selected]}<br></br>
//       <div>has {points[selected]} votes</div>
//       <Button run={getRandomAnecdote} text={"next anecdote"}/>
//       <Button run={vote} text={"vote"}/><br></br>
//       <h1>Anecdote with maximum votes</h1>
//       <GetMax anecdotes={anecdotes} points={points} max={max}/>
//     </div>
//   )
// }

// export default App

import { useState } from 'react'

const Button = (props)=>{
  return(
    <div>
      <button onClick={props.run}>{props.text}</button>
    </div>
  )
}

const GetMax = (props)=>{
  return(
    <div>
      {props.anecdotes[props.max]}<br></br>
      has {props.points[props.max]} votes.
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [max, setMax] = useState(0);
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const getRandomAnecdote = ()=>{
    const latest = (Math.floor(Math.random() * anecdotes.length));
    setSelected(latest);  
  }

  const vote = ()=>{
    const copy = [...points];
    copy[selected]++;
    setPoints((prevPoints) => {
      const updatedPoints = [...prevPoints];
      updatedPoints[selected]++;
      updateMax(updatedPoints);
      return updatedPoints;
    }); 
  }

  const updateMax = (pointsArray)=>{
    let maxIndex = 0;
    let maxVotes = 0;
    for (let i = 0; i < pointsArray.length; i++) {
      if (pointsArray[i] > maxVotes) {
        maxVotes = pointsArray[i];
        maxIndex = i;
      }
    }
    setMax(maxIndex);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      <div>has {points[selected]} votes</div>
      <Button run={getRandomAnecdote} text={"next anecdote"}/>
      <Button run={vote} text={"vote"}/><br></br>
      <h1>Anecdote with maximum votes</h1>
      <GetMax anecdotes={anecdotes} points={points} max={max}/>
    </div>
  )
}

export default App