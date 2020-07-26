import React from 'react';
import { Link } from "gatsby";

export default (props) => (
    <header className="header">
        <nav className="navigation container" role="navigation" aria-label="main navigation">
            <div className="navigation__logo">
                <Link className="navigation__link space" to="/">
                    jennifer quispe
                </Link>
            </div>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link className="navigation__link space" to="#about">
                        0. about
                    </Link>
                </li>

                <li className="navigation__item">
                    <Link className="navigation__link space" to="#portfolio">
                        1. portfolio
                    </Link>
                </li>

                <li className="navigation__item">
                    <Link className="navigation__link space" to="/resume">
                        2. resume
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
)