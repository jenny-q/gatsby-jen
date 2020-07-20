import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Post = (props) => (
    <div className="p-3 col-md-3">
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.excerpt}
                </Card.Text>
                <Button variant="primary" href={props.readMore}>View</Button>
            </Card.Body>
        </Card>
    </div>
);

export default Post;