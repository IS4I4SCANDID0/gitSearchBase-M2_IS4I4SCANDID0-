
// export function renderUserInfo(user) {
//   const mainContainer = document.querySelector('.container')
  
//   mainContainer.insertAdjacentHTML('beforeend', `
//     <div class="container__user">
//       <div class="user__info">
//         <img src="${user.avatar_url}" alt="">
//         <h2>${user.name}</h2>
//       </div>
//       <button id="newSearch">Nova Busca</button>
//     </div>
//     <div class="container__repos">
//       ${user.repos.map(repo => `
//         <div class="repo">
//           <h3>${repo.name}</h3>
//           <p>${repo.description || 'Sem descrição'}</p>
//           <a href="${repo.html_url}" target="_blank">Ver repositório</a>
//         </div>
//       `).join('')}
//     </div>
//   `)
// }

// function newUserSearch() {
//   const newSearchButton = document.querySelector('#newSearch')
  
//   if (newSearchButton) {
    
//     newSearchButton.addEventListener('click', () => {
//       localStorage.removeItem('GitHubUser')
      
      

//       window.location.replace('../../index.html')
//     })
//   }
// }

// newUserSearch()
// export function renderRepository() {
//   const reposContainer = document.querySelector('.container__repos')
  
//   const repos = JSON.parse(localStorage.getItem('UserRepos'))
  
//   if (repos) {
    
//     repos.map(repo => {
//       reposContainer.insertAdjacentHTML('beforeend', `
//         <div class="repo">
//           <h3>${repo.name}</h3>
//           <p>${repo.description}</p>
//         </div>
//       `)
//     })
//   }
// }

























