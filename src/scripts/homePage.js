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

 
