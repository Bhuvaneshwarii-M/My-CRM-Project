import React from 'react'
import { Container,Row,Col,Button, Breadcrumb } from 'react-bootstrap'
import { Projecttable } from '../../components/Project-table/Projecttable'
import projects from '../../assets/data/Dummyprojects'
import { BreadCrumpComp } from '../../components/breadcrump/BreadCrumpComp'
export const Dashboard = () => {
  return (
     <Container>
        <Row>
          <Col>
             <BreadCrumpComp page="Dashboard"/>
          </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
            <Button variant='info' style={{fontSize:'2rem', padding:'10px 30px'}}>Add new Projects</Button>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
              <div>Total Projects :39</div>
              <div>Pending Projects : 6</div>
            </Col>
        </Row>
        <Row>
           
            <Col className='mt-2'>To do projects this month</Col>
        </Row>
        <hr/>
        <Row>
           
            <Col className='recent-projects'><Projecttable projects={projects}/></Col>
        </Row>
     </Container>
  )
}
//passing "projects" as a props to the Projecttable