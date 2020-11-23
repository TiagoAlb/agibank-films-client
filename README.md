# Agibank Films

Link para acesso ao sistema: http://ec2-177-71-228-249.sa-east-1.compute.amazonaws.com:3001

## Resumo
A aplicação foi realizada em JavaScript, utilizado a biblioteca ReactJS. O sistema é baseado na Api de filmes https://swapi.dev/api/films e possui as funcionalidades de listagem de filmes, visualização específica de filme, visualização de personagens, visualização especifica de personagens, visualização de produtores, visualização de imagem e trailer do filme e possui link para pesquisa de produtor no Google.

### Tecnologias
- ReactJS
- Material-UI
- Axios
- Javascript
- HTML
- CSS

#### Resumo de passos para utilização
1. Entre na página inicial do sistema.
2. No caminho /films, escolha dentre os filmes a opção de trailer ou de informações.
3. Caso deseje visualizar o trailer do filme, será aberto um modal com o trailer.
4. Caso escolha a opção de Informações, você será direcionado para a página do filme.
5. Na página do filme, é possivel visualizar os produtores e personagens.
6. Clique no avatar de um produtor para ser direcionado a página do Google com a pesquisa por nome do produtor.
7. Clique no avatar de um personagem para ser direcionado a página com as informações específicas.
8. O grupo de avatars mostra inicialmente o valor maximo de 6 personagens, mas você pode clicar no número de avatars faltante para expandir todos.
9. Na página específica do personagem você pode visualizar as suas informações e filmes relacionados. Clique em um filme para ser direcionado a página de informações.

## Executar projeto
1. Clone este repositório 
2. Faça a instalação dos pacotes do projeto com o comando `npm install`
3. Execute o comando `npm start`

## Dados utilizados da API
### Listagem de filmes
```
GET:
Endpoint: https://swapi.dev/api/films

Retorno - corpo:
{
  "count": 6,
  "next": null,
  "previous": null,
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [
        "http://swapi.dev/api/people/1/",
        "http://swapi.dev/api/people/2/",
        "http://swapi.dev/api/people/3/",
        ...
      ],
      "planets": [
        "http://swapi.dev/api/planets/1/",
        "http://swapi.dev/api/planets/2/",
        "http://swapi.dev/api/planets/3/"
      ],
      "starships": [
        "http://swapi.dev/api/starships/2/",
        "http://swapi.dev/api/starships/3/",
        "http://swapi.dev/api/starships/5/",
        ...
      ],
      "vehicles": [
        "http://swapi.dev/api/vehicles/4/",
        "http://swapi.dev/api/vehicles/6/",
        "http://swapi.dev/api/vehicles/7/",
        ...
      ],
      "species": [
        "http://swapi.dev/api/species/1/",
        "http://swapi.dev/api/species/2/",
        "http://swapi.dev/api/species/3/",
        ...
      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2014-12-20T19:49:45.256000Z",
      "url": "http://swapi.dev/api/films/1/"
    },
    ...
```

### Busca de filme específico
```
GET:
Endpoint: https://swapi.dev/api/films/{id}

Retorno - corpo:
{
  "title": "A New Hope",
  "episode_id": 4,
  "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
  "director": "George Lucas",
  "producer": "Gary Kurtz, Rick McCallum",
  "release_date": "1977-05-25",
  "characters": [
    "http://swapi.dev/api/people/1/",
    "http://swapi.dev/api/people/2/",
    "http://swapi.dev/api/people/3/",
    ...
  ],
  "planets": [
    "http://swapi.dev/api/planets/1/",
    "http://swapi.dev/api/planets/2/",
    "http://swapi.dev/api/planets/3/"
  ],
  "starships": [
    "http://swapi.dev/api/starships/2/",
    "http://swapi.dev/api/starships/3/",
    "http://swapi.dev/api/starships/5/",
    ...
  ],
  "vehicles": [
    "http://swapi.dev/api/vehicles/4/",
    "http://swapi.dev/api/vehicles/6/",
    "http://swapi.dev/api/vehicles/7/",
    ...
  ],
  "species": [
    "http://swapi.dev/api/species/1/",
    "http://swapi.dev/api/species/2/",
    "http://swapi.dev/api/species/3/",
    ...
  ],
  "created": "2014-12-10T14:23:31.880000Z",
  "edited": "2014-12-20T19:49:45.256000Z",
  "url": "http://swapi.dev/api/films/1/"
}
```

### Listagem de personagens
```
GET:
Endpoint: https://swapi.dev/api/people

Retorno - corpo:
{
  "count": 82,
  "next": "http://swapi.dev/api/people/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "http://swapi.dev/api/planets/1/",
      "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        ...
      ],
      "species": [],
      "vehicles": [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "http://swapi.dev/api/people/1/"
    },
    ...
```

### Busca de personagem específico
```
GET:
Endpoint: https://swapi.dev/api/people/{id}

Retorno - corpo:
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "http://swapi.dev/api/planets/1/",
  "films": [
    "http://swapi.dev/api/films/1/",
    "http://swapi.dev/api/films/2/",
    "http://swapi.dev/api/films/3/",
    ...
  ],
  "species": [],
  "vehicles": [
    "http://swapi.dev/api/vehicles/14/",
    "http://swapi.dev/api/vehicles/30/"
  ],
  "starships": [
    "http://swapi.dev/api/starships/12/",
    "http://swapi.dev/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "http://swapi.dev/api/people/1/"
}
```

## Páginas - Versão Web
### Página de Boas-vindas

<p float="center">
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/drawer_expanded.PNG" width="400" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/home_web.PNG" width="400" />
</p>

### Listagem de filmes e trailers

<p float="center">
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/films_web.PNG" width="400" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/trailer_web.PNG" width="400" />
</p
  
### Informações sobre filme específico

<p float="center">
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/information_web.PNG" width="300" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/avatars_web.PNG" width="300" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/google_web.PNG" width="300" />
</p>

### Informações sobre o personagem

<p float="center">
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/character_web.PNG" width="400" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/trailer_web.PNG" width="400" />
</p>

## Páginas - Versão Mobile
### Página de Boas-vindas

<p float="center">
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/home_mobile.jpeg" width="300" />
</p>

### Listagem de filmes e trailers

<p float="center">
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/films_mobile.jpeg" width="250" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/films_description_mobile.jpeg" width="220" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/trailer_mobile.jpeg" width="220" />
</p
  
### Informações sobre filme específico

<p float="center">
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/information_avatars_mobile.jpeg" width="300" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/google_mobile.jpeg" width="300" />
</p>

### Informações sobre o personagem

<p float="center">
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/character_mobile.jpeg" width="400" />
  <img src="https://github.com/Tiagoalbuquerque2302/agibank-films/blob/main/public/static/images/character_films_mobile.jpeg" width="400" />
</p>

## Desenvolvimentos futuros
O sistema de filmes foi criado como teste de desenvolvimento, porém para realizações futuras seria interessante:
- Inclusão de página de favoritos (o link já foi feito)
- Inclusão de notificação com filmes em lançamento,
- Acessos a outros dados da api, como veículos e planetas
- Adicionar pontuação em estrelas por votação de usuários
- Adicionar comentários de usuários
