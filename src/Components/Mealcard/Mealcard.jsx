/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Mealcard.css";
import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Mealcard = (props) => {
    const {idMeal,strInstructions, strMeal, strMealThumb
    } = props.meal;
    const cropedStrInstructions = strInstructions.slice(0, 30);
    return (
        <Card className='card' style={{ width: '18rem', height: '450px' }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body className='card-body'>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    {cropedStrInstructions}
                </Card.Text>
                <LinkContainer to={`/detials/${idMeal}`}>
                    <Button variant="primary" className='btn-viewDetials'>View Detials</Button>
                </LinkContainer>

            </Card.Body>
        </Card>
    );
};

export default Mealcard;