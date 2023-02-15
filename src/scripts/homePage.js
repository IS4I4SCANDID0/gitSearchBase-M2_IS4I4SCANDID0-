import { surveyUser } from "./requests.js"

export async function searchUser() {
  const searchInput = document.querySelector('form > input')
  const sendSurvey = document.querySelector('form > button')
  
  sendSurvey.addEventListener('click', async (event) => {
    event.preventDefault()

    const searchResult = await surveyUser(searchInput.value)
  })
 
}