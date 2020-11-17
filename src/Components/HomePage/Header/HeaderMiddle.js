import React from 'react';
import './Header.scss'

const HeaderMiddle = () => {
    return (
        <div className="container" style={{ height: '450px'}}>
            <div className="d-flex justify-content-center pt-5">
                <h1 className="text-uppercase pt-5 mt-5">find your house rent</h1>
            </div>
            <div className="d-flex justify-content-center pt-3">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button style={{ cursor: 'pointer', backgroundColor: '#275a53' }}  className="btn my-2 my-sm-0 text-white px-4" type="submit">Find Now</button>
                </form>
            </div>
        </div>
    );
};

export default HeaderMiddle;