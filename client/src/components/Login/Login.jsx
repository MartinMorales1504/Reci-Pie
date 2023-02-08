import React from "react";
import axios from "axios"
import s from './Login.module.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "../Slider/Slider";

import { setUserLocalStorage, getLocalStorage } from "../../handlers/localStorage";

import logo from './assets/Logo.png'
import foodImg from "./assets/Food.svg"
import foodImg2 from "./assets/Food2.jpg"
import foodImg3 from "./assets/Food3.jpg"
import foodImg4 from "./assets/Food4.jpg"



const images = [foodImg, foodImg2, foodImg3, foodImg4]

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const logUser = async (email, password) => {
    let user = await axios.get(`/users/login?email=${email}&password=${password}`)
    setUserLocalStorage(user)
    console.log(user.data)
  }

  return (
    <div className={s.container}>
      {/* LEFT CONTAINER */}
      <div className={s.leftContainer}>
        <div className={s.brandLogo}>
          <h1>RECI – PIE</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.inputButtonContainer}>
          <input type="text" placeholder="Correo electrónico" onChange={event => { setEmail(event.target.value) }}></input>
          <input type="password" placeholder="Contraseña" onChange={event => { setPassword(event.target.value) }}></input>
          <button className={s.loginButton} onClick={event => logUser(email, password)}>Iniciar sesión</button>
          <div className={s.forgotPw}>
            <p>Olvidaste tu contraseña?</p>
          </div>
          <button className={s.registerButton} onClick={event => navigate('./register')}>Registrarse</button>
          <span onClick={event => navigate('./explore')}>Explorar Recetas sin Registrarse</span>
        </div>
      </div>


      {/* RIGHT CONTAINER */}
      <div className={s.rightContainer}>
        <div className={s.topMessageContainer}>
          <h1>Qué comer hoy: platos fáciles que puedes hacer con lo que tienes en la nevera</h1>

          <p>Una nueva forma de compartir tus comidas preferidas con tus amigos! <br />
            Podrás compartir recetas dando los pasos a seguir para que el resto pueda prepararlas </p>
        </div>

        <div className={s.imgBtnContainer}>
          <Slider imagenes={images} />
        </div>
      </div>
    </div>
  )
}

export default Login;