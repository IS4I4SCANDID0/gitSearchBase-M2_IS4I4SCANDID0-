
// export function renderUserInfo(user) {
//   const mainContainer = document.querySelector('.container')
export function renderUserInfo(){ 
  const users = JSON.parse(localStorage.getItem('GitHubUser')) 
  console.log(users)
  
  users.map(user => {
    mainContainer.insertAdjacentHTML('beforeend', `
      <div class="container__user">
        <div class="user__info">
          <img src="${user.avatar_url}" alt="">
          <h2>${user.name}</h2>
        </div>
      <button id="newSearch">Trocar de usuário</button>
      </div> 
    `)
  })
}



  

export function renderRepository() {
  const mainContainer = document.querySelector('.container')
  
  const repositories = JSON.parse(localStorage.getItem('userRepos')) 
  console.log(repositories)
  
  repositories.map(repository => {
    mainContainer.insertAdjacentHTML('beforeend', `
      <div class="user__card">
        <h3>${repository.name}</h3>
        <p>${repository.full_name} + ${repository.language}</p>
        <a href="${repository.html_url}">Repositório</a>
      </div>
    `)
  })
} 
























