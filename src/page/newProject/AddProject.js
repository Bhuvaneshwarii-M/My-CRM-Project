import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { BreadCrumpComp } from '../../components/breadcrump/BreadCrumpComp'
import { AddProjectForm } from '../../components/AddProjectForm/AddProjectForm'
import { shortText } from '../../utils/Validation'

const initialprojectData={
    project:'',
    client:'',
    date:'',
    description:''
}
const initialprojectDataError={
    project:false,
    client:false,
    date:false,
    description:false
}
export const AddProject = () => {

  const [projectData,setprojectData]=useState(initialprojectData)
  const [projectDataError,setprojectDataError]=useState(initialprojectDataError)
  useEffect(()=>{},[projectData]);


    const handleOnChange=e=>{
        const {name,value}=e.target

       
        setprojectData({
            ...projectData,
            [name]:value,
        })
       
    }

    const handleOnSubmit=async(e)=>{
        e.preventDefault()
        setprojectDataError(initialprojectDataError)
        
        const isprojectValid=await shortText(projectData.project);
         setprojectDataError({
            ...initialprojectDataError,
            project:!isprojectValid,
        });
        console.log('form subject request received',projectData);
    }

  return (
    <Container>
        <Row>
            <Col>
            <BreadCrumpComp page="/AddProject"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <AddProjectForm handleOnChange={handleOnChange} projectData={projectData} projectDataError={projectDataError} handleOnSubmit={handleOnSubmit}/>
            </Col>
        </Row>
    </Container>
  )
}
//rafc
//to capture and store values use useState