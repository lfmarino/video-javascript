import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setFavorite, deleteFavorites } from '../actions';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({
  cover,
  title,
  year,
  contentRating,
  duration,
  setFavorite,
  deleteFavorites,
  isList,
  id,
}) => {
  const handleSetFavorite = () => {
    setFavorite({ cover, title, year, contentRating, duration, id });
  };

  const handleDeleteFavorite = itemId => {
    deleteFavorites(itemId);
  };

  return (
    <div className='carousel-item'>
      <img
        className='carousel-item__img'
        src={cover}
        alt={title}
      />

      <div className='carousel-item__details'>
        <div className='carousel-item__details--icons'>
          <Link to={`/player/${id}`}>
            <i className='fas fa-play-circle fa-3x' />
          </Link>
          {
            isList ?
              <i className='fas fa-trash fa-3x' onClick={() => handleDeleteFavorite(id)} /> :
              <i className='fas fa-plus-circle fa-3x' onClick={handleSetFavorite} />
          }
        </div>

        <p className='carousel-item__details--title'>{title}</p>

        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorites,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
