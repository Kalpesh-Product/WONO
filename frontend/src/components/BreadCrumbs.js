// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/compStyles/breadcrumbs.css'; // Import custom CSS

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="breadcrumb-nav">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join(' / ')}`;
          return (
            <li
              key={to}
              className={`breadcrumb-item ${index === pathnames.length - 1 ? 'active' : ''}`}
            >
              {index === pathnames.length - 1 ? (
                value.charAt(0).toUpperCase() + value.slice(1)
              ) : (
                <Link to={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
