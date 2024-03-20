import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Breadcrumb, Button } from 'react-bootstrap'
import { SearchForm } from '../SearchFormComponent/SearchForm'
import { Projecttable } from '../../components/Project-table/Projecttable'
import projects from '../../assets/data/Dummyprojects'
export const ProjectList = () => {
  
  const [str, setStr] = useState('');
  const [displayProject, setdisplayProject] = useState(projects)

  
  useEffect(() => {
   
  }, [str,displayProject]);

  const handleOnChange = (e) => {
    const {value}=e.target;
    setStr(value);
    searchProject(value);
    
  }

  const searchProject=sttr=>{
    const displayProject=projects.filter((row)=>row.Name.toLowerCase().includes(sttr.toLowerCase()));
    setdisplayProject(displayProject)
  }

  return (
    <Container>
      <Row className='mt-4'>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Project Lists</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='info'>Add Project</Button>
        </Col>
        <Col className='text-right'>
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Projecttable projects={displayProject}/>
        </Col>
      </Row>
    </Container>
  )
}
//taking projects from dummyprojects and pass it to the projectTble.js
