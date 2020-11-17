import { Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { apartmentContext } from '../../../App';
import { AdminHeader } from '../Admin/Admin';
import { Sidebar } from '../Sidebar/Sidebar';
import './MyRent.scss';

export const MyRent = () => {
    const [singleApartment,setSingleApartment]=useState([])
    const [userLogin,setUserLogin] = useContext(apartmentContext);
    useEffect(() => {
        fetch('https://shakil-apartment.herokuapp.com/singleApartment?email='+userLogin.email)
            .then(res => res.json())
            .then(data =>setSingleApartment(data));
      },[])
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
                {
                    singleApartment.map(apartment =>
                        <tr >
                            <td>{apartment.tile}</td>
                            <td>$ {apartment.price}</td>
                            <td>
                                
                                <button className="rent-btn"> View Details</button>
                            </td>
                        </tr>
                    )
                 } 
            </tbody>
        </Table>
    </div>
       </div>
       </Grid>
       </Grid>
        </Container>
        
    )
}

