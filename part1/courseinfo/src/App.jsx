

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
  return(
    <div>
      <p>
        {props.arr[0].name} {props.arr[0].exercises }
      </p>
      <p>
        {props.arr[1].name} {props.arr[1].exercises }
      </p>
      <p>
        {props.arr[2].name} {props.arr[2].exercises }
      </p>
    </div>
  )

}

const Total = (props)=>{  
  return(
    <div>
      <p>Number of exercises {props.arr[0].exercises + props.arr[1].exercises + props.arr[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content arr={parts}/>
      <Total arr={parts}/>
    </div>
  )
}


export default App
