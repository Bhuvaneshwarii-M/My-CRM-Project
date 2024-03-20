import React from 'react'
import { Form,FormGroup,Button, Container, Row, Col} from 'react-bootstrap'
import { PropTypes} from 'prop-types'

export const AddProjectForm = ({handleOnSubmit,handleOnChange,projectData,projectDataError}) => {
    console.log(projectData)
  return (
    <Container className='mt-3'>
         <Form autoComplete='on' onSubmit={handleOnSubmit}> 
               
               <Form.Group>
               <FormGroup as={Row}>
                   <Form.Label column sm={3}>Project</Form.Label>
                   <Col sm={9}>
                   <Form.Control type="text" name="project" 
                   value={projectData.project}
                    onChange={handleOnChange}   placeholder="Enter project" required/>
                    <Form.Text className='text-danger'>{projectDataError.project && "Project is required"}</Form.Text>
                    </Col>
                   </FormGroup>
               </Form.Group>
              
               
               <Form.Group>
               <FormGroup as={Row}>
                   <Form.Label column sm={3}>Client</Form.Label>
                   <Col sm={9}>
                   <Form.Control type="text" name="client" 
                   value={projectData.client}
                   onChange={handleOnChange}  placeholder="Enter client" required/>
                   </Col>
                   </FormGroup>

               </Form.Group>


               <Form.Group>
               <FormGroup as={Row}>
                   <Form.Label column sm={3}>Date</Form.Label>
                   <Col sm={9}>
                   <Form.Control type="date" name="date" 
                   value={projectData.date}
                   onChange={handleOnChange}  placeholder="Enter last date" required/>
                    </Col>
                   </FormGroup>
                  
               </Form.Group>

               <Form.Group>
               <FormGroup as={Row}>
                   <Form.Label column sm={3}>Description</Form.Label>
                   <Col sm={9}>
                   <Form.Control as="textarea" name="description" rows="5"
                   value={projectData.description}
                   onChange={handleOnChange}  placeholder="Additional Info" required/>
                   </Col>
                   </FormGroup>
               </Form.Group>

              
               
              
               <Button type="submit"  variant="info" block>AddProject</Button>
           </Form>
    </Container>
  )
}
//rafc
AddProjectForm.propTypes = {
      handleOnChange:PropTypes.func.isRequired,
      handleOnSubmit:PropTypes.func.isRequired,
      projectData:PropTypes.object.isRequired,
      projectDataError:PropTypes.object.isRequired
}