import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import List from './components/List'

const App = () => {
  
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-1234567'}
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleFilter = (event) => {
      setFilter(event.target.value)
    }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const onClickAction = (names,numbers) => {
      event.preventDefault()
      if (persons.reduce((y,x)=>(x.name===names || y),false)) {
        window.alert(names + " is already added to phonebook")
      }

      else {
        const obj = {id: persons[persons.length-1].id+1, name: names, number:numbers}
        setPersons(persons.concat(obj))
        setNewName('')
        setNewNumber('')
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <Form newName = {newName} handleChange={handleChange} newNumber={newNumber} handlePhoneChange={handlePhoneChange} onClickAction={onClickAction}/>
      <h2>Numbers</h2>
      <List persons={persons} filter2={filter}/>
    </div>
  )
}

export default App