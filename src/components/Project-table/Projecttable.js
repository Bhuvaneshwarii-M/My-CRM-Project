import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
export const Projecttable = ({projects}) => {


  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>S.NO</th>
                <th>Project Name</th>
                <th>Client</th>
                <th>Status</th>
                <th>Last Date</th>
            </tr>
        </thead>
        <tbody>
            {projects.length ? ( projects.map(row=>
                <tr  key={row.Sno}>
                <td>{row.Sno}</td>
                <td>{row.Name}</td>
                <td>{row.Client}</td>
                <td>{row.status}</td>
                <td>{row.Date}</td>
                 </tr>
                
                )):
                <tr>
                    <td colSpan="4" className='text-center'>No projects available</td>
                </tr>
                }
            
           
        </tbody>
    </Table>
  )
}
Projecttable.propTypes={
    projects:PropTypes.array.isRequired,
}
//projects is passing from ProjecList.js 