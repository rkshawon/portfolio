import React, { useContext } from "react";
import "./Portfolio.css";
import "swiper/css";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>My Work</span>
      <div className="portfolio-slider">
        <section id="project" class="project">
          <div class="projectcontainer">
            <div class="p1">
              <div class="pright">
                <div class="imglink">
                  <img src={Ecommerce} alt="" />
                </div>
                <div class="link">
                  <a
                    href="https://github.com/rkshawon/e-shop"
                    target="_blank"
                    class="code"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href="https://cute-spacesuit.cyclic.app/"
                    target="_blank"
                    class="button"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>

              <div class="pleft">
                <div class="p">
                  <span style={{ color: darkMode ? "white" : "" }}>
                    EShop (Amazon Ecommerce site clone)
                  </span>
                  <p>
                    Ecommerce website similar to Amazon with the features like
                    Payment, Searching, Rating, Cart. Users can search products
                    based on the product's name. Stripe is used as a payment
                    gateway. JWT is used to secure user information. Firebase is
                    used to store images. Simple Admin panel to upload and
                    review products.
                  </p>
                </div>
                <div class="T">
                  <h3>Technology </h3>
                  <div class="techName">
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                    <h4>Javascrpt</h4>
                    <h4>React</h4>
                    <h4>Express</h4>
                    <h4>Nodejs</h4>
                    <h4>Mongodb</h4>
                    <h4>JWT</h4>
                    <h4>Stripe</h4>
                    <h4>Firebase</h4>
                    <h4>React Icon</h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="p1">
              <div class="pright">
                <div class="imglink">
                  <img src={MusicApp} alt="" />
                </div>
                <div class="link">
                  <a
                    href="https://github.com/rkshawon/wordpermin_api/tree/master"
                    target="_blank"
                    class="code"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href="https://vast-teal-chipmunk-vest.cyclic.app/"
                    target="_blank"
                    class="button"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>

              <div class="pleft">
                <div class="p">
                  <span style={{ color: darkMode ? "white" : "" }}>
                    Wordpermin (A website to test typing skill)
                  </span>
                  <p>
                    It’s a website where users can test their typing skill. Use
                    MongoDB Database to store user details. Login and
                    Registration system with server site and client site
                    validation. In the Dashboard users with the highest scores
                    are shown.
                  </p>
                </div>
                <div class="T">
                  <h3>Technology</h3>
                  <div class="techName">
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                    <h4>Javascrpt</h4>
                    <h4>React</h4>
                    <h4>Express</h4>
                    <h4>Nodejs</h4>
                    <h4>Mongodb</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="p1">
              <div class="pright">
                <div class="imglink">
                  <img src={HOC} alt="" />
                </div>
                <div class="link">
                  <a
                    href="https://github.com/rkshawon/mchat-server/tree/master"
                    target="_blank"
                    class="code"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href="https://mchat-api.herokuapp.com/"
                    target="_blank"
                    class="button"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>

              <div class="pleft">
                <div class="p">
                  <span style={{ color: darkMode ? "white" : "" }}>
                    MChat (Chat Application)
                  </span>
                  <p>
                    It sends real time messages and shows real time users using
                    Socket.io. Messages are saved in MongoDB Database. Fully
                    functional login registration system.
                  </p>
                </div>
                <div class="T">
                  <h3>Technology</h3>
                  <div class="techName">
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                    <h4>Javascrpt</h4>
                    <h4>React</h4>
                    <h4>Express</h4>
                    <h4>Nodejs</h4>
                    <h4>Mongodb</h4>
                    <h4>Socket.io</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
