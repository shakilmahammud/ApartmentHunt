import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.scss';
import google from '../../images/logos/google.png'
import fb from '../../images/logos/fb.png'
import { apartmentContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
// firebase.initializeApp(firebaseConfig)
//dummytext
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
function Login() {
  const history = useHistory();
  const location=useLocation().location?.pathname
  const [userLogin,setUserLogin] = useContext(apartmentContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn : false,
    name:'',
    email:'',
    password:'',
    photo:'',
    error:'',
    success: false
  })
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName, email, photoURL} = res.user;
      const signedInUser = {
        isSignedIn:true,
        name:displayName,
        email:email,
        photo:photoURL
      }
      setUser(signedInUser);
      console.log(displayName, email, photoURL);
      setUserLogin(signedInUser)
      history.replace(location || "/")
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }

  const handleFbLogin = () => {
    console.log('button clicked');
    firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      
      var user = result.user;
   
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      
    });
  }

  // const handleSignOut = () => {
  //   firebase.auth().signOut()
  //   .then(res => {
  //     const signedOutUser={
  //       isSignedIn:false,
  //       name:'',
  //       email:'',
  //       photo:''
  //     }
  //     setUser(signedOutUser);

  //   })
  // }
  const handleBlur = (e) => {
    
    let isFormValid = true;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
       
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordNumber = /\d{1}/.test(e.target.value);
      isFormValid =  isPasswordValid && passwordNumber;
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    console.log('handle click');
    if( newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name)
        setUserLogin(newUserInfo)

      })
      .catch(error => {
        const newUserInfo ={...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        history.replace(location || "/")
      });
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        history.replace(location || "/")
      })
      .catch(function(error) {
        const newUserInfo ={...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        setUserLogin(newUserInfo)
        
      });
    }
    e.preventDefault();
  }
  const updateUserName = name => { 
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
    }).catch(function(error) {
    });
  }
  return (
    
    <section className='container' style={{width:'500px'}}>
      <div>
       <div className="row">
          <div className="col-md-6">
              <div className="items shadow-lg">   
                <h3 className='mb-5'>{newUser ? 'Create an account' : 'Login'}</h3>

              <form  onSubmit={handleSubmit}>
              {newUser && <input name="name" className="form-control" onBlur={handleBlur} type="text" placeholder="Your Name"/>}
                <br/>
              <input className="form-control" type="text" onBlur={handleBlur} name="email" placeholder=" Email" required/>
              <br/>
              <input type="password" className="form-control" onBlur={handleBlur} name="password" placeholder=" Password" required/>
              <br/>
              <input className=" submit-btn" type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
              </form>
              <div className="row">
                <div className="col-md-6">
                <p><input type="checkbox"   id=""/>Remember me</p> 
                </div>
                <div className="col-md-6">
                <input type="checkbox"  onChange={() => setNewUser(!newUser)} name="newUser" id=""/> 
                  <label htmlFor="">Create new account</label>
              </div>
            </div>
                <p style={{color:'red'}}> {user.error}</p>
                {user.success && <p style={{color:'green'}}>User {newUser? 'Created' : 'logged In'} Successfully</p>}
                </div>
            </div>
        </div>
      
        <p className="mt-5 text-dark text-center">Or</p>

    {/* Google sign in start */}

        <div className="row " onClick={handleSignIn} style={{cursor:'pointer'}}>
          <div className="col-md-4 shadow-lg p-2 mt-1">
            <img src={google}  style={{width:'40px'}} alt=""/>
          </div>
          <div className="col-md-8 shadow-lg rounded p-2 mt-1">
              <p >Continue with google</p>
          </div>
        </div>

      {/* Google sign in End */}

      {/* Facebook sign in start */}

        <div className="row" onClick={handleFbLogin} style={{cursor:'pointer'}}>
          <div className="col-md-4 shadow-lg p-2 mt-1">
            <img src={fb}  style={{width:'50px'}} alt=""/>
          </div>
          <div className="col-md-8 shadow-lg rounded p-2 mt-1">
              <p >Continue with Facebook</p>
          </div>
        </div>

        {/* Facebook sign in */}
       </div>
    </section>
  );
}

export default Login;
