import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Article extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book } = this.props;
    const url = book.selfLink;
    const split = url.split('/');
    const id = split[split.length - 1];

    return (
      <li>
        {book.volumeInfo.imageLinks 
          ? <img src={book.volumeInfo.imageLinks.thumbnail}  className="item-c"/>
          : <img src="http://www.moxmultisport.com/wp-content/uploads/no-image.jpg" className="no-image"/>
        }
        <p className="item-a">{book.volumeInfo.title}</p>
        {book.volumeInfo.authors
          ? <p className="item-b">{book.volumeInfo.authors[0]}</p>
          : <p className="item-b">{book.volumeInfo.authors}</p>
        }
        <p className="item-d">
          <Link to={`/results/${id}`}>
            View this books info
          </Link>
        </p>
      </li>
    );
  }
}

export default Article;