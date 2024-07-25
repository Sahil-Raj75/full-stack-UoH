
const Course = (props)=>{
    const {course} = props;
    const total = 
    course.parts.reduce((s, p) =>
      s+p.exercises,0)
    return(
      <div>
        <h1>{course.name}</h1>
        {course.parts.map((part) => (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        ))}
        <p>
        <strong>Total of {total} exercises</strong>
        </p>
      </div>
    )
  }

export default Course