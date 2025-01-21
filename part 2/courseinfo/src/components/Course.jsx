const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
  <div>{parts.map(part=><Part key={part.id} part={part}/>)}</div> 
  )
}
const Course = ({course}) => {
  const exer = course.parts.reduce((y,x)=>y+x.exercises,0)
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <b>total of {exer} exercises</b>
    </div>
  )
}

export default Course