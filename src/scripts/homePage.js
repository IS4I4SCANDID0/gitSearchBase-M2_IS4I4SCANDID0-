import { getRepository, surveyUser } from "./requests.js"

export function searchUser() {
  const searchInput = document.querySelector('form > input')
  const sendSurvey = document.querySelector('#search')
 
  sendSurvey.addEventListener('click', async (event) => {
    event.preventDefault()
    
    await surveyUser(searchInput.value)

    await getRepository(searchInput.value)
  })
}


 

