import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import List from './components/List'
import Notification from './components/Notification'
import axios from 'axios'
import methods from './services/phone'

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response=>{setPersons(response.data)})},[])
  
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message,setMessage] = useState(null)
  const [type,setType] = useState('')

  const usual = (type,message) => {
    setNewName('')
    setNewNumber('')
    setType(type)
    setMessage(message)
    setTimeout(()=>{
      setMessage(null)
    },5000)
  }

  const handleFilter = (event) => {
      setFilter(event.target.value)
    }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const deleteHandler = (id,name) => {
    if (window.confirm(`Delete ${name}?`)) {
        methods.deleter(id)
        .then(response=>{
            console.log("deleted")
            setPersons([...persons].filter(person=>!(person.id===id)))
            usual('complete',`Deleted ${name}`)
        })
        .catch(error=>{
          usual('error',`Information of ${name} has already been removed from server`)
          methods.getAll().then(response=>{
            setPersons(response.data)
          })
        })
    }
}

  const onClickAction = (names,numbers) => {
      event.preventDefault()
      let x = persons.reduce((y,x)=>(x.name===names) ? x : null,null)
      if (x!==null) {
        if (window.confirm(`${x.name} is already added to phonebook, replace the old number with a new one?`)) {
          x = {...x, number:numbers}
          methods.update(x).then(response=>{
            setPersons([...persons].map(person=>(person.id===x.id ? x : person)))
            usual('complete',`Amended ${names}`)
          })
        }
      }
      else {
        methods.create({name: names, number:numbers})
        .then(response => {
          setPersons(persons.concat(response.data))
          usual('complete',`Added ${names}`)
        })
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={type}/>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <Form newName = {newName} handleChange={handleChange} newNumber={newNumber} handlePhoneChange={handlePhoneChange} onClickAction={onClickAction}/>
      <h2>Numbers</h2>
      <List persons={persons} filter2={filter} deleter={deleteHandler}/>
    </div>
  )
}

export default App