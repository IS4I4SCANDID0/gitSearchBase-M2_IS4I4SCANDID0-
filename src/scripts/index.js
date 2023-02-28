import { surveyUser, getRepository } from "./requests.js"

export function searchUser() {
  const searchInput = document.querySelector('#user')
 
  const searchButton = document.querySelector('#searchBtn')
  
  searchButton.addEventListener('click', async (event) => {
    event.preventDefault()
    
    if(searchInput.value === ''){
      Toastify({
        text: 'Por favor digite um nome de usuário para fazer a pesquisa',
        duration: 3000,
        gravity: 'top',
        position: 'left',
        style: {
          background: '#ffffff',       
          color: '#212529'
        }
      }).showToast()
    
    } else {
      await getRepository(searchInput.value)
      
      await surveyUser(searchInput.value)
    }
  })
}

searchUser()

    

    
