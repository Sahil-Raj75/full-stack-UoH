import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
    .then(response => response.data)
    .catch(err=>{
      console.log('failed request');
    })
  }
  
  const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request
    .then(response => response.data)
    .catch(err=>{
      setMessage('The contact has already been deleted');
      setTimeout(()=>{
        setMessage(null);
      },2000);
    })
  }

  const removeContact = (id)=>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response=>response.data)
  }

  const updateContact = (contact)=>{
    const request = axios.put(`${baseUrl}/${contact.id}`, {...contact, "number":contact.number})
    return request
    .then(response=>response.data)
  }


  
  export default { 
    getAll, create, update, removeContact ,updateContact
  }