
import { useState } from 'react'

const Button = (props)=>{
  return(
    <>
      <button onClick={props.run}>{props.text}</button>
    </>
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
  const totalAnecdotes = anecdotes.length; 
  const [points, setPoints] = useState(new Array(totalAnecdotes).fill(0))
  console.log(points);
   
  const [selected, setSelected] = useState(0)
  const [voteId, setVoteId] = useState(0);
  const getRandomAnecdote = ()=>{
    // const latest = anecdotes[(Math.floor(Math.random() * anecdotes.length))];
    const latest = (Math.floor(Math.random() * anecdotes.length));
    console.log(latest);
    setSelected(latest);
    setVoteId(latest);
  }

  const vote = ()=>{
    console.log(voteId);
    const copy = [...points];
    copy[voteId]++;
    setPoints(copy); 
  }

  return (
    <div>
      {anecdotes[selected]}<br></br>
      has {points[voteId]} votes.<br></br>
      <Button run={getRandomAnecdote} text={"next anecdote"}/>
      <Button run={vote} text={"vote"}/>
    </div>
  )
}

export default App
