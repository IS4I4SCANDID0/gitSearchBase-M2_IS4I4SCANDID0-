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
    if(response.ok) {
      response.json().then(responseJson => {

        localStorage.setItem('gitHubUser', JSON.stringify(responseJson))


        window.location.replace('./src/pages/profile.html')
      })
    
    } else {

      window.location.replace('./src/pages/error.html')

    }
  })
  .catch(error => console.log(error))
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
    console.log(resJson)
  })
  .catch(error => console.log(error))
  
  return gitRepos
}
    
    
//localStorage.setItem('userRepos', JSON.stringify(resJson)))

 // localStorage.setItem('gitHubUserLogin', JSON.stringify(response.login))
        // const user = JSON.parse(localStorage.getItem('gitUser'))
        // getRepository(user)