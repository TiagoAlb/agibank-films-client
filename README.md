# Visualização de Filmes

Link para acesso ao sistema: http://ec2-177-71-228-249.sa-east-1.compute.amazonaws.com:3001

## Resumo
A aplicação foi realizada em JavaScript, utilizado a biblioteca ReactJS. O sistema é baseado na Api de filmes https://swapi.dev/api/films e possui as funcionalidades de listagem de filmes, visualização específica de filme, visualização de personagens, visualização especifica de personagens, visualização de produtores, visualização de imagem e trailer do filme e possui link para pesquisa de produtor no Google.

#### Resumo de passos para utilização
1. Entre na página inicial do sistema.
2. No caminho /films, escolha dentre os filmes a opção de trailer ou de informações.
3. Caso deseje visualizar o trailer do filme, será aberto um modal com o trailer.
4. Caso escolha a opção de Informações, você será direcionado para a página do filme.
5. Na página do filme, é possivel visualizar os produtores e personagens.
6. Clique no avatar de um produtor para ser direcionado a página do Google com a pesquisa por nome do produtor.
7. Clique no avatar de um personagem para ser direcionado a página com as informações específicas.
8. O grupo de avatars mostra inicialmente o valor maximo de 6 personagens, mas você pode clicar no número de avatars faltante para expandir todos.

## Executar projeto
1. Clone este repositório 
2. Faça a instalação dos pacotes do projeto com o comando `npm install`
3. Execute o comando `npm start`

## Desenvolvimentos futuros
O sistema de filmes foi criado como teste de desenvolvimento, porém para realizações futuras seria interessante:
- Inclusão de página de favoritos (o link já foi feito)
- Inclusão de notificação com filmes em lançamento,
- Acessos a outros dados da api, como veículos e planetas

<p float="center">
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/films.PNG" width="650" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/films_mobile.jpeg" width="200" />
</p>

