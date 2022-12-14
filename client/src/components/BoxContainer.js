import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'


const BoxContainer = ({children}) => {
    return (
        <Container className="pt-0">
            <Row className="justify-content-md-center m-4">
                <Col xs={14} s={12} md={10} l={8}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default BoxContainer