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
        position: 'center',
        style: {
          background: '#ffffff',        //  //#D4242C //#F5D707
          color: '#212529'
        }
      }).showToast()
    
    } else {

      await surveyUser(searchInput.value)
    
      await getRepository(searchInput.value)
    }
  })
}

searchUser()
    

    
