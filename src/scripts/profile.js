// import { getRepository } from "./requests.js"
//fazer com outra lógica de renderização, fazendo uma função para renderiazar o usuário e outra para 
//renderizar os repositórios **ver a aula do canvas que ensina a fazer o fetch(), fazer com isertAdjasent

export function renderUserInfo() {
  const users = JSON.parse(localStorage.getItem('gitHubUser'))

  const mainContainer = document.querySelector('.container')

  users.map(user => {

    mainContainer.insertAdjacentHTML('afterbegin', `
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

renderUserInfo()
  

export function renderRepository() {
  const repositories = JSON.parse(localStorage.getItem('userRepos'))
  
  const mainContainer = document.querySelector('.container')

  repositories.map(repository => {

    mainContainer.insertAdjacentHTML('beforeend', `
      <div class="user__card">
        <h3>${repository.name}</h3>
        <p>${repository.description}</p>
        <a href="${html_url}">Repositório</a>
      </div>
    `)
  })
} 

renderRepository()











//   console.log(repositories)









//   repositories.map(repository => {
//     const cardRepos = createRepository(repository)

//   })
//   mainContainer.appendChild(cardRepos)
// }

// function createRepository(repository) {
//   // const repositories = JSON.parse(localStorage.getItem('userRepos'))
//   // console.log(repositories)

//   const userContainer = document.createElement('div')
//   userContainer.classList.add('container__user')

//   const user = document.createElement('div')
//   user.classList.add('user__info')

//   const userAvatar = document.createElement('img')
//   userAvatar.src = repository.avatar_url

//   const userName = document.createElement('h2')
//   userName.innerText = repository.login

//   user.append(userAvatar, userName)

//   // const homePageBtn = document.createElement('button')
//   // homePageBtn.id = 'newSearch'
//   // homePageBtn.innerText = 'Trocar de usuário'

//   userContainer.append(user)

//   const card = document.createElement('div')
//   card.classList.add('user__card')

//   const nameProject = document.createElement('h3')
//   nameProject.innerText = repository.name

//   const description = document.createElement('p')
//   description.innerText = repository.full_name

//   // const link = document.createElement('a')
//   // link.href(html_url)
//   // link.innerText = 'Repositório' 

//   return userContainer
// }