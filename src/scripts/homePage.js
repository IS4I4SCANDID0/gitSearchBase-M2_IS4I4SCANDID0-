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

 
export async function percorreArray() {

  const resulta = await getUsers()
  resulta.forEach(user => {
    // user.type
    console.log(user.avatar_url)
  });
  return resulta
}