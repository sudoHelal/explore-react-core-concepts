import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singers'
import BookStore from './BookStore'

function App() {
  const [count, setCount] = useState(0)
  const books = [
    {name: "physics", price: 100},
    {name: "Math", price: 120},
    {name: "Chemistry", price: 130},
    {name: "Biology", price: 150},
  ]
  const actors = ['Sakib', 'Shoriful Raz', 'Jasim', 'Rubel', 'Salman Shah'];
  const singers = [
    {id: 1, name: "Helal Uddin", age: 31},
    {id: 2, name: "Ahsan", age: 29},
    {id: 3, name: "Raju", age: 27},
  ]

  return (
    <>
    <h1>Vite + React</h1>
    <BookStore books={books}></BookStore>
    {
      singers.map(singer => <Singers singer={singer}></Singers>)
    }




    <Actor name='Bappa Raz'></Actor>
    {
      actors.map(actor => <Actor name={actor}></Actor>)
    }
    {/* <Todo 
    task="Learn React" 
    isDone={true}></Todo>
    <Todo 
    task="Learn NextJs" 
    isDone={false}></Todo>
    <Todo 
    task="Explore Core Concepts" isDone={true}></Todo>
    <Todo 
    task="Try JSX" isDone={false}></Todo> */}
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="3" score="98"></Student>
      <Student score="50"></Student>
      <Developer></Developer>
      <Inter></Inter>
      <Device name="Laptop" price="50000"></Device>
      <Device name='Mobile' price="2000"></Device>
      <Device name="Desktop" price="550000"></Device>
      <Device></Device> */}
 
    </>
  )
}
const {grade, score} = {grade: '7', score: '99'}
function Student({grade=1, score=0}){
  console.log(grade, score);
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Grade: {grade}</p>
    <p>Score: {score}</p>
  </div>
)
}
function Device(propos){
  // console.log(propos);
  return <h6>This is: {propos.name} price: {propos.price}</h6>
    
 
}
function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12}
  return <h3>I am a {person.name} with age {person.age}</h3>
}

function Developer(){
  const developerStyle = {
    margin: 'px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p></p>
    </div>
  )
}
function Inter(){
  const interStyle = {
    margin: '5px',
    padding: '20px',
    border: '1px solid red',
    borderRadius: '34px',
  }
  return (
    <div style={interStyle}>
      <h1>I want a Intership for Mern</h1>
      <p>Hello world</p>
    </div>
  )
}

export default App
