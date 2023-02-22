// import {  getUserData, saveUserData } from "./requests.js"

// import { renderUserInfo } from "./profile.js"


// export async function searchUser() {
//   const searchInput = document.querySelector('form > input')
//   const userName = searchInput.value.toString()
  
//   saveUserData(searchInput.value)

//   if (!userName) {
//     alert('Por favor, insira um nome de usuário!')
//     return
//   }
  
//   try {
//     const user = await getUserData(userName)
    
//     if (user) {
//       saveUserData(user)

//       renderUserInfo(user)
      
//       window.location.replace('./src/pages/profile.html')

//     } else {
      
//       window.location.replace('./src/pages/error.html')
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
      
 
//JSON.parse(localStorage.getItem('GitHubUser'))
//JSON.parse(localStorage.getItem('userRepos'))