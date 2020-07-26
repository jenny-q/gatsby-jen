import React from 'react'
import { Link } from 'gatsby'

const Post = (props) => (
    <Link to={props.readMore}  className="project__wrap">
    <div className="project" id={props.title}>
        <div className="project__column image">
            <img className="project__img" src={props.image}/>
        </div>
        <div className="project__column copy">
            <h2 className="project__title space">{props.title}</h2>
            <p className="project__keywords">{props.excerpt}</p>
            
            <span className="project__link space">View Project<span className="sr-only"> for {props.title}</span></span>
        </div>
    </div>
    </Link>
);

export default Post;