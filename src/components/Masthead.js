import React from "react";
import avaterImage from "../Images/avataaars.svg";

const Masthead = () => {
  return (
    <div class="masthead bg-success text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/*<!-- Masthead Avatar Image-->*/}
                <img class="masthead-avatar mb-5" src={avaterImage} alt="avater" />
                {/*<!-- Masthead Heading-->*/}
                <h1 class="masthead-heading text-uppercase mb-0">Kensuke Saiki</h1>
                {/*<!-- Icon Divider-->*/}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/*<!-- Masthead Subheading-->*/}
                <p class="masthead-subheading font-weight-light mb-0">Cloud Integration - FullStack Developer</p>
            </div>
    </div>
  );
};

export default Masthead;