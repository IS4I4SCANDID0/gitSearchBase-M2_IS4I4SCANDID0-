// Função para obter dados do usuário
async function getUserData(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (!response.ok) {
    throw new Error('User not found');
    
  } else {
    window.location.replace('../src/pages/profile.html')
  }
  const userData = await response.json();
  return userData;
}

// Função para obter repositórios do usuário
async function getUserRepos(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}/repos`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  const userRepos = await response.json();
  return userRepos;
}


function renderUserData(userData) {
  // Salva os dados do usuário no localStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  // Redireciona para a página de perfil do usuário
  window.location.href = './profile.html';
}

// Função para renderizar os dados do usuário na página de perfil
function renderUserProfile() {
  // Recupera os dados do usuário do localStorage
  const userData = JSON.parse(localStorage.getItem('userData'));

  // Verifica se os dados existem no localStorage
  if (userData) {
    // Renderiza os dados do usuário na página
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const repoList = document.querySelector('#repoList');

    avatar.src = userData.avatar_url;
    name.textContent = userData.name;

    userData.repos.forEach(repo => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      const title = document.createElement('h3');
      const description = document.createElement('p');

      link.href = repo.html_url;
      title.textContent = repo.name;
      description.textContent = repo.description;

      link.appendChild(title);
      listItem.appendChild(link);
      listItem.appendChild(description);
      repoList.appendChild(listItem);
    });
  }
}

// Função para lidar com a submissão do formulário
async function handleFormSubmit(event) {
  event.preventDefault();

  const userName = event.target.elements.user.value.toString();

  try {
    const userData = await getUserData(userName);
    const userRepos = await getUserRepos(userName);

    userData.repos = userRepos;
    renderUserData(userData);
  } catch (error) {
    // Redirecionar para a página 404 em caso de erro
    window.location.replace('./src/pages/error.html')
  }
}

// Adicionar o listener de evento ao formulário
const searchForm = document.querySelector('#search');
searchForm.addEventListener('submit', handleFormSubmit);

// Função para redirecionar de volta para a página inicial
function redirectToHome() {
  window.location.replace ('./src/index.html')
}

// Adicionar o listener de evento ao botão "Nova Busca"
const newSearchButton = document.createElement('button');
newSearchButton.addEventListener('click', redirectToHome);
