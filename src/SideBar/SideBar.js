import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './colors/colors';
import './SideBar.css';

import React from 'react'


const SideBar = ({ChangeHandler}) => {

  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
            {/* <h1>🛒</h1> */}
        </div>
        <Category ChangeHandler={ChangeHandler}/>
        <Price ChangeHandler={ChangeHandler}/>
        <Colors ChangeHandler={ChangeHandler}/>
    </section>

    </>
  );
}

export default SideBar;