import React from 'react'
import Grid from '@material-ui/core/Grid';
import { BookList } from '../BookList/BookList'
import { Sidebar } from '../Sidebar/Sidebar'
import { Container } from '@material-ui/core';

export const Admin = () => {
    return (
         
    <section>
         <Container>
         <Grid container spacing={3}>
        <Grid item xs={2}>
         <Sidebar/>
        </Grid>
        <Grid item xs={10}>
            <AdminHeader name="Book List"/>
         <BookList/>
        </Grid>
        </Grid>
         </Container>
    </section>
    )
}
export const AdminHeader=(props)=>{
 
    return(
        <div className="order-header d-flex p-2 mt-3">
                        <h2>{props.name}</h2>
                        <h4 className="ml-auto">
                        {/* {userLogin? <h2><Avatar/> Admin {userLogin?.name}</h2>:null} */}
                        me
                        </h4>
                        </div>
    )
}