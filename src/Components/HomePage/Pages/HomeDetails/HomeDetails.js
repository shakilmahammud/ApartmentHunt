import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { apartmentContext } from "../../../../App";
// import NavBar from '../../Pages/NavBar/NavBar';
import "./HomeDetails.scss";

const HomeDetails = () => {
  const [userLogin,setUserLogin] = useContext(apartmentContext);
  const history=useHistory()
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => {
    fetch('https://shakil-apartment.herokuapp.com/bookApartment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
          if(result){
            history.push("/rent")
          }
        })
  }
  // const {homeDetailsId} = useParams();

  // const [homeDetails, setHomeDetails] = useState([]);

  // useEffect(() => {
  //   const matchData = fakeData.find((item) => +item.id === +homeDetailsId);
  //   setHomeDetails(matchData);
  // }, []);

  const apartmentImages =["https://i.ibb.co/XW6DhQL/Rectangle-408.png",
    "https://i.ibb.co/SfJdrW0/Rectangle-409.png",
    "https://i.ibb.co/cL9mb08/Rectangle-410.png",
    "https://i.ibb.co/64w6rC1/Rectangle-407.png" ]

  return (
    <>
      <div className="container">
        {/* <NavBar></NavBar> */}
      </div>
      <div className="coverImg">
        <h3>Apartment</h3>
      </div>
      <div className="main-container container">
        <div className="row">
          <div className="apartment-img col-md-8">
            <div className="main-img">
              {/* <img src={homeDetails.image} alt=""/> */}
            </div>
            <div className="img-group">
              {
                apartmentImages.map((img, index) => 
                  <>
                    <img key={index+1} src={img} alt=""/>
                  </>
                  )
              }
            </div>

            {/* apartment information */}
            <div className="apartment-info">
              <div className="title-bar">
                {/* <h3>{homeDetails.name}</h3> */}
                {/* <h3><strong><span color="#275A53">${homeDetails.price}</span></strong></h3> */}
              </div>
              <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
              <div className="price-details">
              <h3>Price Details- </h3>
              <p>Rent/Month: $550 (negotiable)</p>
              <p>Service Charge : 8,000/= Tk per month, subject to change</p>
              <p>Security Deposit : 3 month’s rent</p>
              <p>Flat Release Policy : 3 months earlier notice required</p>
              </div>
              <div className="property-details">
                <h3>Property Details</h3>
                <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                Flat Size : 3000 Sq Feet.
                Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                </p>
              </div>
            </div>
          </div>
          <div className="apartment-form col-md-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <input type="text" name="name" ref={register({ required: true })} placeholder="Your name" value={userLogin?.name}/> <br/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                      <div>
                      <input type="email" placeholder="Your email address" name="Email" ref={register({ required: true })} value={userLogin?.email}/> <br/>
                      {errors.Email && <span className="text-danger">This field is required</span>}
                      </div>
                     <div>
                     <input type="number" name="phone" ref={register({ required: true })} placeholder="phone Number" /> <br/>
                     {errors.phone && <span className="text-danger">This field is required</span>}
                     </div>
                    <div>  <textarea  placeholder="aparment Details" name="message" ref={register} ></textarea>
                    {errors.message && <span className="text-danger">This field is required</span>}
                     </div>
              
                  
                    <br/>
               <button className="btn">Request Booking</button>
                </form>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDetails;
