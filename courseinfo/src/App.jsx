const Header = (props) => {
 
    return (
      <div>
         <h1>{props.course}</h1> 
      </div>
    )
  }

const Part = (props) => {

  return (
    <div>
        <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
          <Part name={props.part1} exercises={props.exercise1} />
          <Part name={props.part2} exercises={props.exercise2} />
          <Part name={props.part3} exercises={props.exercise3} />
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
     <p>Sum of the total exercises {props.total}</p>
    </div>
  )
}

const App = () => {

  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass the data'
  const exercise2 = 7
  const part3 = 'State of compontn'
  const exercise3 = 14


  return (
    <div>
           <Header course={course}/>
           <Content part1={part1} exercise1={exercise1} 
                    part2={part2} exercise2={exercise2}
                    part3={part3} exercise3={exercise3}
           
           />
           <Total total={exercise1 + exercise2 + exercise3} />
           
    </div>
  )
}


export default App