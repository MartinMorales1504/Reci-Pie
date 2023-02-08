import React from "react";
import axios from "axios"
import s from './Explore.module.scss'
import { useState } from "react";
import Navbar from "../NavBar/Navbar";


const Explore = () => {

  return <div className={s.container}>
    <Navbar></Navbar>
    <div className={s.exploreContainer}></div>

  </div>
}

export default Explore;