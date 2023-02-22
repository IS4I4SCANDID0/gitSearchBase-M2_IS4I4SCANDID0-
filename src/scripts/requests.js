export async function surveyUser(userName) {
  const gitUser = await fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if(response.status === 200) {
      response.json().then(responseJson => {
        
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


export async function getRepository(user) {

  const gitRepos = await fetch(`https://api.github.com/users/${user}/repos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }) 
  .then(response => {
    response.json().then(respJson => {
      
      localStorage.setItem('userRepos', JSON.stringify(respJson))
    })
  })
  .catch(error => console.log(error))
  
  return gitRepos
}
  