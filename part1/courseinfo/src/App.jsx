

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
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
        {props.arr.parts[0].name} {props.arr.parts[0].exercises }
      </p>
      <p>
        {props.arr.parts[1].name} {props.arr.parts[1].exercises }
      </p>
      <p>
        {props.arr.parts[2].name} {props.arr.parts[2].exercises }
      </p>
    </div>
  )

}

const Total = (props)=>{  
  return(
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course}/>
      <Content arr={course}/>
      <Total course={course}/>
    </div>
  )
}


export default App
