import { useState } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import PersonForms from './components/PersonForms'
import Numbers from './components/Numbers'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchField, setSearchField] = useState('')

  const searchResult = persons.filter((person)=>{
    return person.name.startsWith(searchField);
  })


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
    setPersons(persons.concat(newContact));
    console.log(persons);
    setNewName('');
    setNewPhone('');

    }
  }
  const handleNameChange = (event)=>{
    // console.log(event.target.value);
    setNewName(event.target.value);
  }
  
  const handlePhoneChange = (event)=>{
    // console.log(event.target.value);
    setNewPhone(event.target.value);
  }

  const handleSearch = (event)=>{
    console.log(event.target.value);
    setSearchField(event.target.value);
  }

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