import React from "react";
import axios from "axios"
import s from './Login.module.scss'
import { useState } from "react";

import logo from './assets/Logo.png'
import foodImg from "./assets/Food.svg"
import foodImg2 from "./assets/Food2.jpg"
import foodImg3 from "./assets/Food3.jpg"
import foodImg4 from "./assets/Food4.jpg"

import arrow from './assets/Arrow.svg'


const images = [foodImg, foodImg2, foodImg3, foodImg4]

const Login = () => {

  const [imgIndex, setimgIndex] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const passImgRight = (imgIndex) => {
    if (!images[imgIndex+1]) {
      setimgIndex(0)
    } else {
      setimgIndex(imgIndex + 1)
    }
    return images[imgIndex]
  }

  const passImgLeft = (imgIndex) => {
    if(imgIndex === 0) {
      setimgIndex(images.length - 1) 
    } else {
      setimgIndex(imgIndex - 1)
    }
  }

  const logUser = async (email, password) => {
    let user = await axios.get(`/users/login?email=${email}&password=${password}`)
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

          <button className={s.registerButton}>Registrarse</button>
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
          <img className={s.leftArrow} src={arrow} alt="arrow" onClick={event => passImgLeft(imgIndex)}/>
          <div className={s.imgContainer}>
            <img className={s.foodImg} src={images[imgIndex]} alt="some food"></img>
          </div>
          <img className={s.rightArrow} src={arrow} alt="arrow"  onClick={event => passImgRight(imgIndex)}/>
        </div>
      </div>
    </div>
  )
}

export default Login;