
const PersonForms = (props) => {
    return (
      <>
        <h2>add a new</h2>
        <form onSubmit={props.addName}>
          <div>
            name: <input value={props.newName} onChange={props.handleNameChange} />
          </div>
          <div>
            number: <input value={props.newPhone} onChange={props.handlePhoneChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    );
  };
  

export default PersonForms