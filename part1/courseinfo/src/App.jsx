

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )

}

const Part = (props)=>{
  console.log('part', props)
  return (
    <div>
      <p>{props.name}  {props.exercise}</p>
    </div>
  )
}

const Content = (props)=>{
  console.log('content', props)
  return (
    <div>
      <Part name={props.obj1.name} exercise={props.obj1.exercises}/>
      <Part name={props.obj2.name} exercise={props.obj2.exercises}/>
      <Part name={props.obj3.name} exercise={props.obj3.exercises}/>
    </div>
  )
}

const Total = (props)=>{  
  return(
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content obj1={part1} obj2 = {part2} obj3 = {part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}



export default App
