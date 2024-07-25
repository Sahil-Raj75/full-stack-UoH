import { useState } from 'react'
import Contact from './components/Contact'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

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
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  
  const handlePhoneChange = (event)=>{
    console.log(event.target.value);
    setNewPhone(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map((person)=><Contact key={person.id} contact={person}/>)}
      </ul>
    </div>
  )
}

export default App