// import { searchUser } from "./index.js"
// export async function getUsers() {
//   const gitHubUsers = await fetch(`https://api.github.com/users`, {
//     method: 'GET',
//     headers: {
//      'content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .catch(error => console.log(error))
  
//   return gitHubUsers
// }

// import { searchUser } from "./homePage.js"

// searchUser()

export async function surveyUser(userName) {
  const gitUser = await fetch(`https://api.github.com/users/${userName.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if(response.ok) {
      response.json().then(responseJson => {
        console.log(responseJson)
        localStorage.setItem('GitHubUser', JSON.stringify(responseJson))
        
        window.location.replace('./src/pages/profile.html')
      })
      
    } else {
      
      window.location.replace('./src/pages/error.html')
    }
  })
  .catch(error => console.log(error))
  
  renderUserInfo()

  renderRepository()
  
  return gitUser
}

// surveyUser(responseJson)





export async function getRepository(user) {

  const gitRepos = await fetch(`https://api.github.com/users/${user}/repos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }) 
  .then(response => {
    console.log(response)
    response.json().then(respJson => {
      console.log(respJson)
      localStorage.setItem('userRepos', JSON.stringify(respJson))
    })
  })
  .catch(error => console.log(error))
  
  return gitRepos
}
  
// getRepository(respJson)     
      
  
// const userResult = JSON.parse(localStorage.getItem('gitHubUser'))
// console.log(userResult)
    
  
    

  
 


      
//não mexer somente esperar

    



// localStorage.setItem('gitHubUserLogin', JSON.stringify(response.login))