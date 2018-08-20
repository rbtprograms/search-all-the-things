import React, { Component } from 'react';
import { getFavorites } from '../../services/favoritesApi';
import Favorite from './Favorite';
import styles from '../books/Books.css';

class Favorites extends Component {

  state = {
    favorites: null
  };

  componentDidMount() {
    getFavorites()
      .then(favorites => {
        this.setState({ favorites });
      })
      .catch(console.log);
  }

  render() {
    const { favorites } = this.state;
    if(!favorites) return null;

    return (
      <ul className={styles.books}>
        {favorites.map(favorite => {
          return <Favorite key={favorite.id} book={favorite}/>;
        })}
      </ul>
    );
  }
}

export default Favorites;