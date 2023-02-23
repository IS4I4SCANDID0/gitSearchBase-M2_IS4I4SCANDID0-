
export function renderUserInfo() {
  const users = JSON.parse(localStorage.getItem('GitHubUser'))
  
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
  const repositories = JSON.parse(localStorage.getItem('UserRepos'))
  
  const mainContainer = document.querySelector('.container')

  // mainContainer.insertAdjacentHTML('beforeend', `<ul class="container__reposCards"></ul>`)
  
  // const userCards = document.querySelector('.container__reposCards')
  
  repositories.map(repository => {
    mainContainer.insertAdjacentHTML('beforeend', `
      <li class="user__card">
        <h3>${repository.name}</h3>
        <p>${repository.full_name} ${repository.language}</p>
        <a href="${repository.html_url}">Repositório</a>
      </li>
    `)
  })
}

renderRepository()


function backToHome() {
  const changeUser = document.querySelector('#newSearch')

  changeUser.addEventListener('click', () => {
    window.location.replace('/')

    // localStorage.clear()
  })
}

backToHome()



















