import axios from 'axios'
import Display from './components/Display'
import {useState, useEffect} from 'react'

const App = () => {
  const [countries,setCountries] = useState([])
  const [all,setAll] = useState([])
  useEffect(() => {axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response=>{
    setCountries(response.data)
    setAll(response.data)
  })},[])

  const [filter,setFilter] = useState('')

  const onChange = (event) => {
    setFilter(event.target.value)
    setCountries([...all].filter(country=>country.name.common.toLowerCase().includes(event.target.value)))
  }

  return (
  <div>
    <p>find countries <input value={filter} onChange={onChange}/></p>
    {<Display list2={countries} setCountries={setCountries}/>}
  </div>
  )
}

export default App