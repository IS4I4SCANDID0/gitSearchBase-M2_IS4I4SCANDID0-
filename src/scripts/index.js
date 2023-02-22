import { surveyUser, getRepository } from "./requests.js"

export function searchUser() {
  const searchInput = document.querySelector('#user')
 
  const searchButton = document.querySelector('#searchBtn')
  
  searchButton.addEventListener('click', async (event) => {
    event.preventDefault()
    
    if(searchInput.value === ''){
      alert("Preencha os campos necessários")
    
    } else {

      await surveyUser(searchInput.value)
    
      await getRepository(searchInput.value)
    }
  })
}

searchUser()
    
