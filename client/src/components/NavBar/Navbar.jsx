import React from "react";
import axios from "axios"
import s from './Navbar.module.scss'
import { useState } from "react";
import { images } from './assets/assets'

const Navbar = () => {

  return <div className={s.container}>
    <div className={s.logoContainer}>
    <div className={s.brandLogo}>
          <h1>RECI – PIE</h1>
          <img src={images.logo} alt="logo" />
        </div>
    </div>

    <div className={s.optionsContainer}>
      <div className={s.options}>
        <img className={s.image} src={images.home} alt='home' />
        <p className={s.text}>Inicio</p>
      </div>
      <div className={s.options}>
        <img className={s.image} src={images.search} alt='home' />
        <p className={s.text}>Busqueda</p>
      </div>
      <div className={s.options}>
        <img className={s.image} src={images.explore} alt='home' />
        <p className={s.text}>Explorar</p>
      </div>
      <div className={s.options}>
        <img className={s.image} src={images.add} alt='home' />
        <p className={s.text}>Crear</p>
      </div>
      <div className={s.options}>
        <img className={s.image} src={images.userImg} alt='home' />
        <p className={s.text}>Perfil</p>
      </div>
    </div>

    <div className={s.LogOut}>
      <img className={s.image} src={images.logOut} alt='home' />
      <p className={s.text}>Cerrar Sesión</p>
    </div>


  </div>
}


export default Navbar;