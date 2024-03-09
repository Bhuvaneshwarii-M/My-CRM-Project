import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
// Define styled component outside of the component
const FormGroup = styled.div`
  line-height: 33px;
`;
export const ResetPassword = ({handleOnChange,email,handleOnResetSubmit,formSwitcher}) => {
    
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Password</h1>
            <hr/>
            <Form autoComplete='off' onSubmit={handleOnResetSubmit}> 
               
                <Form.Group>
                <FormGroup>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={handleOnChange}   placeholder="Enter email" required/>
                    </FormGroup>
                </Form.Group>
               
                
                
               
                <Button type="submit">Login</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            
            <a href='#' onClick={() => formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>
    </Container>
  )
}

ResetPassword.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
  
  }
