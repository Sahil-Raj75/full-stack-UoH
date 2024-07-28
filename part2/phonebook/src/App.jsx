import { useState, useEffect } from 'react'
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
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  const addName = (event)=>{
    const existing = persons.find((person) => person.name === newName);
    if(existing){
      event.preventDefault();
      if(window.confirm(`${newName} is already added to the phonebook. Do you want
        to update contact information?`))
        {
          setNewPhone(event.target.value)
          existing.number = newPhone;
          Phone
          .updateContact(existing)
          .then(data=>{
            console.log("update success. woohooo!")
          })
        }
    }else{
      event.preventDefault();
    const newContact = {
      name:newName,
      number:newPhone,
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

  const deleteContact = id =>{
    const contact = persons.find(n=>n.id==id)
    if(window.confirm(`Do you really want to delete this contact? ${contact.name}`)){
      Phone
      .removeContact(id)
      .then(data=>{
        setPersons(persons.filter(contact=>contact.id!==id));
      });
      console.log("deletion successful.")
    }
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

      <Numbers searchResult={searchResult} deleteContact={deleteContact}/>
      
    </div>
  )
}

export default App