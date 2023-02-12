import React from "react";
import styled from "styled-components";

const ContactUs = () => {
    return (
        <CONTACT__SECTION id="contact-us">
            <h1 class="ct-h1" data-aos="fade-up" data-aos-duration="3000">
                What we're all about
            </h1>
            <p class="ct-p" data-aos="fade-up" data-aos-duration="3000">
                We believe in delivering the very best <br/> experience to each and every customer.
            </p>
            <button class="btn-contact" data-aos="fade-up" data-aos-duration="3000">Contact Us</button>

            <div id="last-side">

                <div class="side-S">
                    <p class="fs" data-aos="fade-up" data-aos-duration="3000">We work hard and have fun, too.</p>
                    <h1 class="fd" data-aos="fade-up" data-aos-duration="3000">A few of our favorite things:</h1>
                </div>
                <ul class="block--things">


                    <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2Fabout-us%2FCulture%2Bsection%2Bphotos%2FCulture%2Bphoto%2B1.png"
                            alt="" />
                            <p class="side-text">NYC waterfront views</p>
                    </li>

                    <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2Fabout-us%2FCulture%2Bsection%2Bphotos%2FCulture%2Bphoto%2B2.png"
                            alt="" />
                            <p class="side-text">Free food</p>
                    </li>

                    <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2Fabout-us%2FCulture%2Bsection%2Bphotos%2FCulture%2Bphoto%2B3.png"
                            alt="" />
                            <p class="side-text">Happy hours</p>

                    </li>
                    <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2Fabout-us%2FCulture%2Bsection%2Bphotos%2FCulture%2Bphoto%2B4.png"
                            alt="" />
                            <p class="side-text">Team outings</p>
                    </li>
                </ul>
            </div>
        </CONTACT__SECTION>


    )
}
const CONTACT__SECTION = styled.section`

    height: 100vh;
    background-color: rgb(27, 36, 37);


    .ct-h1 {
        position: relative;
        text-align: center;
        top: 17%;
        font-size: 40px;
        color: #2B90C7;
        font-weight: bold;
        text-transform: capitalize;
    }

    .ct-p {
        position: relative;
        text-align: center;
        top: 22%;
        color: #2B90C7;
        font-size: 20px;
    }

    .side-S {
        color: #2B90C7;
        text-align: center;
        position: relative;
        top: 350px;
    }

    .btn-contact {
        position: relative;
        top: 30%;
        left: 47%;
        height: 50px;
        width: 120px;
        background-color: rgb(27, 36, 37);
        border: rgb(27, 36, 37);
        border-radius: 5px;
        font-weight: bold;
        color: #2B90C7;
        text-transform: uppercase;
        background-color: #fff;

        &:hover {
            transition: all 0.7s;
            background-color: #237baa;
            color: #fff;
            cursor: pointer;
        }
    }

    .block--things {
        display: grid;
        grid-template-columns: repeat(4, 280px);
        list-style: none;
        text-align: center;
        color: #2B90C7;
        text-transform: uppercase;
        row-gap: 20px;
        column-gap: 10px;
        position: relative;
        margin-top: 20%;
        margin-left: 18.5%;
    }

    li img {
        border-radius: 10px;
        border: 10px solid white;
        /* width: 300px; */
    }
`

export default ContactUs;