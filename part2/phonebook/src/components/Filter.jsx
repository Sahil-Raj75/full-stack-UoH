
const Filter = (props)=>{
    return(<div>
        filter shown with <input value={props.searchField} onChange={props.handleSearch}/>
    </div>)
  }
  
export default Filter

  