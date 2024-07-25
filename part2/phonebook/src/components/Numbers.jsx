import Contact from './Contact'

const Numbers = ({searchResult})=>{
    return(<>
      <h2>Numbers</h2>
      <ul>
      {searchResult.map((person)=><Contact key={person.id} contact={person}/>)}
      </ul>   
    </>)
}

export default Numbers