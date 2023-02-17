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


export async function surveyUser(userName) {
  const gitUser = await fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if(response.ok){
      response.json().then(response => localStorage.setItem('user', JSON.stringify(response))) 

      window.location.replace('./src/pages/profile.html')
    } else {
      
      window.location.replace('./src/pages/error.html')
    }
  }) 
  .catch(error => console.log(error))

  getRepository(userName)

  return gitUser
}

      
    

export async function getRepository(userName) {
  const gitRepos = await fetch(`https://api.github.com/users/${userName}/repos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }) 
  .then(response => response.json())
  .then(res => {
    // console.log(res)
    return res
  })
  .catch(error => console.log(error))
  
  return gitRepos
}
    
    


