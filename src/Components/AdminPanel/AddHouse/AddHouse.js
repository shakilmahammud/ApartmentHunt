import React, { useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt}from '@fortawesome/free-solid-svg-icons';
import './AddHouse.scss'
import { AdminHeader } from '../Admin/Admin';
import { Container, Grid } from '@material-ui/core';

export const AddHouse = () => {
    const { register, handleSubmit,errors } = useForm();
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
     const onSubmit = data => {

        const formData = new FormData()
    formData.append('file', file);
    formData.append('title', data.title);
    formData.append('price', data.price);
    formData.append('location', data.location);
    formData.append('bedroom', data.bedroom);
    formData.append('bathroom', data.bathroom);
    

    fetch('http://localhost:50001/addApartment',{
        method:'POST',
        body:formData
    })
    .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
     };
    return (
        <section>
            
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                <Sidebar/>
                </div>
                <div className="col-md-10">
                    <AdminHeader name="Add House"/>   
            <div className="showOrder">    
             <form onSubmit={handleSubmit(onSubmit)}>
             <div className="addService">
                    <div>
                    <Container>
         <Grid container spacing={3}>
        <Grid item xs={6}>
        <label>Service Title</label><br/>
                    <input type="text" name="title" ref={register({ required: true })} placeholder="Enter title"/> 
                    {errors.title && <span className="text-danger">This field is required</span>}
        </Grid>
        <Grid item xs={6}>
        <label>Price</label><br/>
                    <input type="number" name="price" ref={register({ required: true })} placeholder="Price"/> 
                    {errors.price && <span className="text-danger">This field is required</span>}
        </Grid>
        <Grid item xs={6}>
        <label>Location</label><br/>
                    <input type="text" name="location" ref={register({ required: true })} placeholder="Enter title"/> 
                    {errors.location && <span className="text-danger">This field is required</span>}
        </Grid>
        <Grid item xs={6}>
        <label>No of Bedroom</label><br/>
                    <input type="number" name="bedroom" ref={register({ required: true })} placeholder="No of bed room"/> 
                    {errors.bedroom && <span className="text-danger">This field is required</span>}
        </Grid>
        <Grid item xs={6}>
        <label>No of Bathroom</label><br/>
                    <input type="text" name="bathroom" ref={register({ required: true })} placeholder="No of Bath room"/> 
                    {errors.bathroom && <span className="text-danger">This field is required</span>}
        </Grid>
        <Grid item xs={6}>
            <label htmlFor="">Thumbnail</label> <br/>
        <label htmlFor="myFile" className="uploadFile" style={{}}><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                     <input type="file" onChange={handleFileChange} id="myFile" style={{display:'none'}} name="file" ref={register({ required: true })}/>
                     {errors.file && <span className="text-danger">img required</span>}
                     <br/>
        </Grid>
        </Grid>
        
         </Container>
                    
                    </div>        
             </div>
             <button className="btn add d-flex ml-auto">Submit</button>
            </form> 
                 </div>
                </div>
            </div>
        </div>
    </section>
    )
}
