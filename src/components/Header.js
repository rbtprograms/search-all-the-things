import React, { Component } from 'react';
import Search from './search/Search';
import styles from './Header.css';
import { Link, Route } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <h1>Header Component</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/results">Search</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <section>
          <Route component={Search}/>
        </section>
      </div>
    );
  }
}

export default Header;