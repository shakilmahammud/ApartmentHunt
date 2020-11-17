import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const BookList = () => {
    const [orderService,setOrderService]=useState([])
    return (
       <section>
           <Container>
           <div style={{ borderRadius: '20'}} className="p-5 bg-white">
        <Table responsive size="sm">
            <thead style={{ backgroundColor: "#F4F7FC" }}>
                <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Phone No</th>
                    <th>Message</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderService.map(service =>
                        <tr key={service._id}>
                            <td>{service.name}</td>
                            <td>{service.Email}</td>
                            <td>{service.course}</td>
                            <td>{service.message}</td>
                            <td>
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle scaret />
                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link  className="text-danger">Pending</Link></Dropdown.Item>
                                        <Dropdown.Item  ><Link  className="text-warning">On going</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link  className="text-success">Done</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </div>
           </Container>
       </section>
    )
}
