import Home from '../pages/Home'
import Films from '../pages/Films'
import FilmInformation from '../pages/FilmInformation'
import CharacterInformation from '../pages/CharacterInformation'

const routes = [
    { path: '/home', name: 'Home', component: Home },
    { path: '/bookmarks', name: 'Bookmarks', component: Home },
    { path: '/films', name: 'Films', component: Films },
    { path: '/films/:id', name: 'Film', component: FilmInformation },
    { path: '/films/:id/characters/:idCharacter', name: 'Character', component: CharacterInformation },
    { redirect: true, path: '/', to: '/home', name: 'Home' }
]

export default routes