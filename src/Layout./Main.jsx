import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import LeftNav from '../Pages/Shared/LeftNav';
import RightNav from '../Pages/Shared/RightNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container className='mt-4'>
                <Row>
                    <Col lg='2' className='d-none d-lg-block' ><LeftNav/></Col>
                    <Col lg='7' ><Outlet/></Col>
                    <Col lg='3' > <RightNav/> </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;