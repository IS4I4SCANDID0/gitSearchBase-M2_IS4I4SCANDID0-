// import { renderUserInfo, renderRepository } from "./profile.js"

// export async function getUserData(userName) {
//   const response = await fetch(`https://api.github.com/users/${userName}`)
  
//   const user = await response.json()
  
//   if (response.status === 200) {
    
//     const repos = await getUserRepos(userName)
//     user.repos = repos
//   }
  
//   return user
// }
  


// export async function getUserRepos(userName) {
//   const response = await fetch(`https://api.github.com/users/${userName}/repos`)
  
//   const repos = await response.json()
  
//   return repos.map(repo => ({
//     name: repo.name,
//     description: repo.description,
//     html_url: repo.html_url
//   }))
// }



<<<<<<< HEAD
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
=======
// export function saveUserData(user) {
//   localStorage.setItem('GitHubUser', JSON.stringify(user))
// }
>>>>>>> 131c3f61851adb8a8fb25004e35516fad523bbd9



