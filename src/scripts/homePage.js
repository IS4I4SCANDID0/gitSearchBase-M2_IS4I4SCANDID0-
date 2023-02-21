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
    
    await surveyUser(searchInput.value)


    await getRepository(searchInput.value)
  })
}


 
//JSON.parse(localStorage.getItem('GitHubUser'))
//JSON.parse(localStorage.getItem('userRepos'))

//
//searchInput.value
//searchInput.value