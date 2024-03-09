import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
// Define styled component outside of the component
const FormGroup = styled.div`
  line-height: 33px;
`;
export const Login = ({handleOnChange,email,pass,handleOnSubmit,formSwitcher}) => {
    
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Client Login</h1>
            <hr/>
            <Form autoComplete='off' onSubmit={handleOnSubmit}> 
               
                <Form.Group>
                <FormGroup>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={handleOnChange}   placeholder="Enter email" required/>
                    </FormGroup>
                </Form.Group>
               
                
                <Form.Group>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={pass} onChange={handleOnChange}  placeholder="Enter Password" required/>
                    </FormGroup>
                </Form.Group>
               
                <Button type="submit">Login</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            
            <a href='#' onClick={() => formSwitcher('reset')}>Forget Password</a>
            </Col>
        </Row>
    </Container>
  )
}

Login.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired,
  }
