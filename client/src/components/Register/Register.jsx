import React from "react";
import axios from "axios"
import s from './Register.module.scss'
import { useState } from "react";

import foodImg from './assets/image.svg'
import logo from './assets/Logo.png'
const Register = () => {


  return (
    <div className={s.container}>
      <div className={s.leftContainer}>
        <img src={foodImg} alt="food" className={s.image} />
      </div>


      <div className={s.rightContainer}>
        <div className={s.brandLogo}>
          <h1>RECI – PIE</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.formContainer}>
          <div className={s.innerFormDiv}>
            <input type="text"></input>
            <input type="text"></input>
            <label className="lab">
              vegano
              <input type="checkbox" />
            </label>
          </div>

          <div className={s.innerFormDiv}>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;