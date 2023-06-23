import React from 'react'
import '../../src/Styles/Home.css'
import Avtar from '../Images/Jems.jpg'
import planet1 from '../Images/plant1.png'
import planet2 from '../Images/plant2.png'



const Home = () => {
  return (
    <div>
       <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <img src={planet1} alt="" class="plant" id="plant1"/>
          <img src={planet2} alt="" class="plant" id="plant2"/>
          <div class="m-3 text-center">
            <img src={Avtar} alt="Jems Yadav" class="rounded-circle img-thumbnail" width="200" height="200" />
            <h1>Jems Yadav</h1>
            <h2>Developer | Designer | Explorer</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 offset-lg-3 mt-4">
          <div class="list-group">
            <h3 href="#" class="list-group-item">Let's get connected</h3>
            <a href="/project" class="list-group-item list-group-item-action" target="_blank">
              <span class="icon-wrapper"><i class="fa-regular fa-folder fa-beat-fade"></i></span>
              Project
            </a>
            <a href="https://www.linkedin.com/in/jems-yadav-5aa550217/" class="list-group-item list-group-item-action" target="_blank">
              <span class="icon-wrapper"><i class="fab fa-linkedin"></i></span>
              LinkedIn
            </a>
            <a href="https://github.com/jemsyadav" class="list-group-item list-group-item-action" target="_blank">
              <span class="icon-wrapper"><i class="fab fa-github-square"></i></span>
              Github
            </a>
            <a href="mailto:jemsyadav54@gmail.com" class="list-group-item list-group-item-action" target="_blank">
              <span class="icon-wrapper"><i class="fas fa-envelope"></i></span>
              Email
            </a>
            <a href="https://twitter.com/JemsYadav212877" class="list-group-item list-group-item-action" target="_blank">
              <span class="icon-wrapper"><i class="fab fa-twitter-square"></i></span>
              Twitter
            </a>
            <a href="https://www.instagram.com/jemsyadav/?igshid=MzRlODBiNWFlZA%3D%3D" class="list-group-item list-group-item-action" target="_blank">
              <span class="icon-wrapper"><i class="fab fa-instagram"></i></span>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
