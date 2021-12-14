import React from 'react';
import { Link } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <Link to={`/${linkUrl}`} className="subtitle">
          <span component={Link}>Shop Now</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
