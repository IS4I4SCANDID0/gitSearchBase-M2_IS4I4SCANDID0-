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



// export function saveUserData(user) {
//   localStorage.setItem('GitHubUser', JSON.stringify(user))
// }



