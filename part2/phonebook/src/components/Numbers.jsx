import Contact from './Contact'

const Numbers = ({searchResult, deleteContact})=>{
    return(<>
      <h2>Numbers</h2>
      <ul>
      {searchResult.map(
        (person)=>
        <Contact key={person.id} contact={person}
      deleteContact={deleteContact}/>)}
      </ul>   
    </>)
}

export default Numbers