import { surveyUser, getRepository } from "./requests.js"

export function searchUser() {
  const searchInput = document.querySelector('#searchUser')
 
  const searchButton = document.querySelector('#searchBtn')
  
  searchButton.addEventListener('click', async (event) => {
    event.preventDefault()

    await surveyUser(searchInput.value)

    await getRepository(searchInput.value)
  })
}
      
 
