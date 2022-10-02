import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import './Student.css'

const Student = ({ student }) => {
    const { id, name, phone, email, website, username } = student
    return (
        <Container >
                    <Card >
                        <Card.Body>
                            <Card.Title className='fs-3 fw-bold text-primary'>{name}</Card.Title>
                            <Card.Text>
                                <ul type='none' className='fw-semibold fs-5' >
                                    <li>Roll: {id}</li>
                                    <li>Email: {email}</li>
                                    <li>Phone: {phone}</li>
                                    <li>Website: {website}</li>
                                    <li>UserID: {username}</li>
                                </ul>
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
        </Container>
    );
};

export default Student;