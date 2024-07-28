import { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import PersonForms from './components/PersonForms'
import Numbers from './components/Numbers'
import axios from 'axios'
import Phone from './services/phone'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchField, setSearchField] = useState('')

  const searchResult = persons.filter((person)=>{
    return person.name.startsWith(searchField);
  })

  useEffect(() => {
    Phone
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])

  const addName = (event)=>{
    if(persons.some((person) => person.name === newName)){
      event.preventDefault();
      alert(`${newName} is already added to the phonebook`);
      setNewName(''); 
    }else{
      event.preventDefault();
    const newContact = {
      name:newName,
      phone:newPhone,
      id:String(persons.length + 1)
    }
    
    Phone
    .create(newContact)
      .then(phoneData=>{
        console.log(phoneData);
        setPersons(persons.concat(phoneData));
        setNewName('');
        setNewPhone('');
      })
    }
  }
  const handleNameChange = (event)=>{
    setNewName(event.target.value);
  }
  
  const handlePhoneChange = (event)=>{
    setNewPhone(event.target.value);
  }

  const handleSearch = (event)=>{
    setSearchField(event.target.value);
  }

  useEffect(()=>{
    console.log("effect");
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data);
    })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchField={searchField} handleSearch={handleSearch}/>
  
      <PersonForms addName={addName} newName={newName} handleNameChange={handleNameChange}
      newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>

      <Numbers searchResult={searchResult}/>
      
    </div>
  )
}

export default App