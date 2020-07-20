import React from 'react';
import { Link, Button } from "gatsby";

export default (props) => (
    <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    jennifer quispe
                </Link>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/portfolio">
                        work
                    </Link>
                    
                    <Link className="navbar-item" to="/articles">
                        articles
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="button is-light" to="/accessibility">
                                accessibility options
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)