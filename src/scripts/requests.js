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
  const gitUser = await fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if(response.ok) {
      response.json().then(responseJson => {

        localStorage.setItem('gitHubUser', JSON.stringify(responseJson.login))

        window.location.replace('./src/pages/profile.html')
      })
    
    } else {

      window.location.replace('./src/pages/error.html')
    }
  })
  .catch(error => console.log(error))
  // return gitUser
}

 




export async function getRepository(user) {

  const gitRepos = await fetch(`https://api.github.com/users/${user}/repos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }) 
  .then(response => {

    response.json().then(responseJson => {

      
      localStorage.setItem('userRepos', JSON.stringify(responseJson))
     
    })
  })
  .catch(error => console.log(error))
  
  // return gitRepos
}
    
    
    
    
    
// getRepository('user')

  
 


      
    

    



// localStorage.setItem('gitHubUserLogin', JSON.stringify(response.login))