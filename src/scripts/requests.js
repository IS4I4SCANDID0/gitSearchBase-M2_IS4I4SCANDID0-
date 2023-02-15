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
  .then(response => response.json())
  .then(res => {
    
    if(res.login){
      window.location.replace('/src/pages/profile.html')

    } else {
      window.location.replace('/src/pages/error.html')
    }
  })
  .catch(error => console.log(error))

  return gitUser
}
