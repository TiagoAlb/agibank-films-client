import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import LocalMoviesOutlined from '@material-ui/icons/LocalMoviesOutlined'
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined'

const menu = [
    { path: '/home', name: 'Home', icon: <HomeIcon /> },
    { path: '/films', name: 'Films', icon: <LocalMoviesOutlined /> },
    { path: '/bookmarks', name: 'Bookmarks', icon: <FavoriteOutlined /> }
]

export default menu