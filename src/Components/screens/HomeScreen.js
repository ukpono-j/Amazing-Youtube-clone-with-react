import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoriesBar from '../categoriesBar/CategoriesBar';
import Videos from '../videos/Videos';
import './HomeScreen.css';






const HomeScreen = () => {
    return (
        <Container >
            <CategoriesBar />
            <Row>
                {[...new Array(20)].map(() =>(
                    <Col lg={3} md={4}>
                        <Videos />
                    </Col>
                    )
                )}
            </Row>
        </Container>
    )
}

export default HomeScreen
