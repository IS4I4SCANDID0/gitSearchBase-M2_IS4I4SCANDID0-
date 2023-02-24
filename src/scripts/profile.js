
function renderUserInfo() {
  const users = JSON.parse(localStorage.getItem('GitHubUser'))
  
  const mainContainer = document.querySelector('.container')
  
  mainContainer.innerHTML = ''

  mainContainer.insertAdjacentHTML('afterbegin', `
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


function renderRepository() {
  const repositories = JSON.parse(localStorage.getItem('UserRepos'))

  const mainContainer = document.querySelector('.container')
  
  repositories.map(repository => {
    mainContainer.insertAdjacentHTML('beforeend', `
      <div class="user__card">
        <h3>${repository.name}</h3>
        <p> ${repository.description} ${repository.full_name}  ${repository.language}</p>
        <a href="${repository.html_url}" target="_blank">Repositório</a>
      </div>
    `)
  })
}

renderRepository()


function backToHomePage() {
  const changeUser = document.querySelector('#newSearch')

  changeUser.addEventListener('click', () => {
    window.location.replace('/index.html')
  })
}

backToHomePage()



















