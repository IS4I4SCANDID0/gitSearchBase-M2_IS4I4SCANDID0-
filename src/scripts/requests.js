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
  .then(response => response.json())  
  .then(responseJson => {
    localStorage.setItem('GitHubUser', JSON.stringify(responseJson))
    
    if(response.ok) {
      console.log(response)
      window.location.replace('./src/pages/profile.html')
      
    } else {
      window.location.replace('./src/pages/error.html')
    }

    // return responseJson
  })
  .catch(error => console.log(error))
  
  
  return gitUser
}




export async function getRepository(user) {

  const gitRepos = await fetch(`https://api.github.com/users/${user}/repos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }) 
  .then(response => response.json())
  .then(resJson => {
    localStorage.setItem('UserRepos', JSON.stringify(resJson))

    return resJson
  })
  
  // .then(response => {
  //   response.json().then(respJson => {
  //     // console.log(respJson)
  //   })
  // })
  .catch(error => console.log(error))
  
  return gitRepos
}
  







   
      
  
// const userResult = JSON.parse(localStorage.getItem('gitHubUser'))
// console.log(userResult)
    
  
    

  
 


      
//não mexer somente esperar

    



// localStorage.setItem('gitHubUserLogin', JSON.stringify(response.login))