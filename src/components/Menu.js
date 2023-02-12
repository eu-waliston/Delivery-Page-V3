import React from "react";
import styled from "styled-components";

const Menu = () => {
    return (
        <NAVBAR className="nav-item animate__animated animate__fadeInRight">
            <img src={require("./assets/logo.png")} alt="logo" className="logo animate__animated animate__fadeInLeft" />
            <a href="#home-page" class="itens" id="nav-item-fundo">home</a>
            <a href="#about-us" class="itens" id="nav-item-fundo">about us</a>
            <a href="#contact-us" class="itens" id="nav-item-fundo">contact us</a>
        </NAVBAR>
    )
}

const NAVBAR = styled.div`
    .logo {
        width: 200px;
        margin: 0;
        position: relative;
        top: -15px;
    }

    .menu {
        overflow: hidden;
        position: fixed;
        /* Set the navbar to fixed position */
        top: 0;
        width: 100%;
        /* Full width */
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
        color: var(--text-color);
        text-transform: uppercase;

    }

    .itens:hover {
        color: var(--font-color);
        transition: ease-in-out 0.4s;
    }

`

export default Menu;