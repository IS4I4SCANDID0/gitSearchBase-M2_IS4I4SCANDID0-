import { surveyUser } from "./requests.js"

// import { getRepository } from "./requests.js"

// getRepository(userName)

export function searchUser() {
  const searchInput = document.querySelector('form > input')
  const sendSurvey = document.querySelector('#search')
 
  sendSurvey.addEventListener('click', async (event) => {
    event.preventDefault()
    
    await surveyUser(searchInput.value)
  })
}
searchUser()

 

