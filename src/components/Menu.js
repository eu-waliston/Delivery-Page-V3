import React from "react";
import styled from "styled-components";

const Menu = () => {
    return (
        <NAVBAR >
            <img src={require("./assets/logo.png")} alt="logo" className="logo animate__animated animate__fadeInLeft" />
            <div className="nav-item animate__animated animate__fadeInRight">
                <a href="#home-page" className="itens" id="nav-item-fundo">home</a>
                <a href="#about-us" className="itens" id="nav-item-fundo">about us</a>
                <a href="#contact-us" className="itens" id="nav-item-fundo">contact us</a>
            </div>
        </NAVBAR>
    )
}

const NAVBAR = styled.nav`
        overflow: hidden;
        position: fixed;
        /* Set the navbar to fixed position */
        top: 0;
        width: 100%;
    .logo {
        width: 200px;
        margin: 0;
        position: relative;
        top: -15px;
    }


    .nav-item {
        float: right;
        padding-right: 100px;
    }

    .itens {
        position: relative;
        margin-left: 50px;
        top: 60px;
        font-size: 22px;
        text-decoration: none;
        color: rgb(241, 239, 239);
        text-transform: uppercase;

    }

    .itens:hover {
        color: #2B90C7;
        transition: ease-in-out 0.4s;
    }

`

export default Menu;