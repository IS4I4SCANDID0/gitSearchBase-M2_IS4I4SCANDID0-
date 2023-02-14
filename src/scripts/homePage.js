export async function getUsers() {
  const gitHubUsers = await fetch(`https://api.github.com/users`, {
    method: 'GET',
    headers: {
     'content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => console.log(error))
  
  return gitHubUsers
}

 //DEBUGAR COM URGÊNCIASS
// export async function verifyUser() {
//   const searchInput = document.querySelector('form > input')
//   const sendSurvey = document.querySelector('form > button')
//   // console.log(searchInput.value)
//   const results = await getUsers()
//   results.map(user => {
//     const memberGitHub = user.login
//     console.log(memberGitHub)
//   });

//   sendSurvey.addEventListener('click', (event) => {
//     event.preventDefault()

    
//   })
 
// }