import { getRepository } from "./requests.js"

getRepository()
//IDENTIFICAR QUAL DADO ESTÁ SENDO PASSADO E DEBUGAR
export function renderRepository(repositories) {
  const mainContainer = document.querySelector('.container')
  console.log(repositories)
  repositories.map(repository => {
    const cardRepos = createRepository(repository)

    mainContainer.appendChild(cardRepos)
  })
}

function createRepository(repository) {
  const userContainer = document.createElement('div')
  userContainer.classList.add('container__user')

  const user = document.createElement('div')
  user.classList.add('user__info')

  const userAvatar = document.createElement('img')
  userAvatar.src = repository.avatar_url
  
  const userName = document.createElement('h2')
  userName.innerText = repository.login
  
  user.append(userAvatar, userName)

  const homePageBtn = document.createElement('button')
  homePageBtn.innerText = 'Trocar de usuário'

  userContainer.append(user, homePageBtn)

  const card = document.createElement('div')
  card.classList.add('user__card')

  const nameProject = document.createElement('h3')
  nameProject.innerText = repository.name

  const description = document.createElement('p')
  description.innerText = repository.full_name

  const link = document.createElement('a')
  link.href(`${repository.html_url}`)
  link.innerText = 'Repositório' 

  return userContainer
}

// renderRepository(repositories)