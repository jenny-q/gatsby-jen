import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="header">
    <nav className="navigation container" role="navigation" aria-label="main navigation">
      <div className="navigation__logo">
      <Link to="/" className="navigation__link space">jennifer quispe</Link>
      </div>
    </nav>
    <ul className="navigation__list bottom" aria-label="social media">
      <li className="navigation__item">
          <Link to="https://www.linkedin.com/in/jenniferquispe/" target="_blank" className="navigation__link space">
            linkedin
        </Link>
      </li>
      <li className="navigation__item">
          <Link to="https://www.github.com/jenny-q" target="_blank" className="navigation__link space">
            github
        </Link>
      </li>
      <li className="navigation__item">
          <Link to="https://www.adaux.com" target="_blank" className="navigation__link space">
            adaux
        </Link>
      </li>
    </ul>
    </header>
);

export default Header;
