export function renderUserInfo() {
  const users = JSON.parse(localStorage.getItem('GitHubUser'))
  // console.log(users)
  const mainContainer = document.querySelector('.container')

  mainContainer.innerHTML = ''

  mainContainer.insertAdjacentHTML('beforeend', `
    <div class="container__user">
      <div class="user__info">
        <img src="${users.avatar_url}" alt="">
        <h2>${users.name}</h2>
      </div>
    <button id="newSearch">Trocar de usuário</button>
    </div> 
  `)
}
renderUserInfo()


export function renderRepository() {
  const repositories = JSON.parse(localStorage.getItem('userRepos'))

  const mainContainer = document.querySelector('.container')

  repositories.map(repository => {
    mainContainer.insertAdjacentHTML('beforeend', `
      <div class="user__card">
        <h3>${repository.name}</h3>
        <p>${repository.full_name} ${repository.language}</p>
        <a href="${repository.html_url}">Repositório</a>
      </div>
    `)
    // mainContainer.innerHTML = ''
  })
}

renderRepository()






















