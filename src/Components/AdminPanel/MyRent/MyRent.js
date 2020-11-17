import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AdminHeader } from '../Admin/Admin';
import { Sidebar } from '../Sidebar/Sidebar';
import './MyRent.scss';

export const MyRent = () => {
    const [orderService,setOrderService]=useState([])
    return (
        <Container>
        <Grid container spacing={3}>
       <Grid item xs={2}>
        <Sidebar/>
       </Grid>
       <Grid item xs={10}>
           <AdminHeader name="Your Rent"/>
       <div>
            <div style={{ borderRadius: '20'}} className="p-5 bg-white">
        <Table responsive size="sm">
            <thead style={{ backgroundColor: "#F4F7FC" }}>
                <tr>
                    <th>House name</th>
                    <th>Price</th>
                    <th>Action</th>
                    {/* <th>Project Details</th>
                    <th>Status</th> */}
                </tr>
            </thead>
            <tbody>
                {/* {
                    orderService.map(service => */}
                        <tr >
                            <td> Washington Avenue</td>
                            <td>$195</td>
                            <td>
                                
                                <button className="rent-btn"> View Details</button>
                            </td>
                        </tr>
                    
                {/* } */}
            </tbody>
        </Table>
    </div>
       </div>
       </Grid>
       </Grid>
        </Container>
        
    )
}

