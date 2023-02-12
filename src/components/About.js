import React from "react";
import styled from "styled-components";

const AboutUs = () => {
    return (
        <SECTION id="about-us">
           
    <h1 class="about-h1" data-aos="fade-up" data-aos-duration="3000">About us</h1>
    <img src={require("./assets/logo.png")} alt="" class="about-img" data-aos="fade-up" data-aos-duration="3000"/>
    <p class="msg" data-aos="fade-up" data-aos-duration="3000">Your Neighborhood. Delivered.®</p>
    <p class="dv" data-aos="fade-up" data-aos-duration="3000">delivery.com lets people order online from their
        favorite local <br/>
        restaurants, liquor stores, grocery stores, and laundry and dry cleaning providers.</p>

    <ul class="BusinessDetails__List__Main" data-aos="fade-up" data-aos-duration="3000">

        <li class="BusinessDetails__List" data-aos="flip-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <i class="bi bi-people-fill"></i>
            <h3 class="info">3 MILLION+ USERS</h3>
            <p class="indo-p">order online</p>
        </li>

        <li class="BusinessDetails__List" data-aos="flip-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <i class="bi bi-shop"></i>
            <h3 class="info">19,000+ MERCHANTS</h3>
            <p class="indo-p">grow their businesses</p>
        </li>

        <li class="BusinessDetails__List" data-aos="flip-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <i class="bi bi-geo-alt"></i>
            <h3 class="info">2,400+ CITIES</h3>
            <p class="indo-p">even more on the way</p>
        </li>

        <li class="BusinessDetails__List" data-aos="flip-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <i class="bi bi-clipboard-check"></i>
            <h3 class="info">30MM ORDERS</h3>
            <p class="indo-p">and counting</p>
        </li>


    </ul>
        </SECTION>
    )
}
const SECTION = styled.section`

    height: 100vh;
    background-color: rgb(27, 36, 37);


.about-h1 {
    text-align: center;
    position: relative;
    color: #2B90C7;
    top: 15%;
    font-size: 40px;
    text-transform: capitalize;
}

.msg {
    margin-bottom: 15px;
    font-weight: bolder;
}

.msg,
.dv {
    position: relative;
    top: -5%;
    text-align: center;
    color: #2B90C7;
}

.about-img {
    position: relative;
    top: 5%;
    left: 37%;
}

.BusinessDetails__List__Main {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(4, 230px);
    align-items: center;
    background-color: #2b90c731;
    width: 1000px;
    position: relative;
    left: 23%;
    top: 5%;

    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.507);
}

.BusinessDetails__List {
    position: relative;
    text-align: center;
    padding: 20px;
    left: 30px; 
    color: #2B90C7; 
}


.bi {
    position: relative;
    left: 5%;
    font-size: 50px;
    color: #2B90C7;
}

`
export default AboutUs;