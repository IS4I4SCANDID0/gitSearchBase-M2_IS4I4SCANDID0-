import { getRepository, surveyUser } from "./requests.js"

export function searchUser() {
  const searchInput = document.querySelector('form > input')
  const sendSurvey = document.querySelector('#search')
 
  sendSurvey.addEventListener('click', async (event) => {
    event.preventDefault()

    if(searchInput.value === '') {
      alert("Prencha o campo solicitado")

      window.location.replace('./')
    }
    
    await surveyUser(input.value)

    await getRepository(input.value)
  })
}


 
//JSON.parse(localStorage.getItem('GitHubUser'))
//JSON.parse(localStorage.getItem('userRepos'))

//
//searchInput.value
//searchInput.value