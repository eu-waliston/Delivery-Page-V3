import React from "react";
import styled from "styled-components";
import Types from "./Types";


const Home = () => {
    return (
        <HOME>
            <TYPED__BRAND>
                <Types className="typed-line"/>
            </TYPED__BRAND>

            <img
                className="animate__animated animate__bounce  animate__infinite  animate__slow 2s"
                src={require("./assets/g8204.png")}
                alt="cellphone"
                id="imagem-principal"
            />
        </HOME>
    )
}


const HOME = styled.div`

    width: 100%;
    height: 100vh;
    background-color: rgb(27, 36, 37);
    overflow: hidden;

    #imagem-principal {
        position: relative;
        width: 30%;
        float: right;
        margin-top: -8%;
        margin-right: 6%;
    }
`

const TYPED__BRAND = styled.div `
    height: 100px;
    width: 1040px;

    font-size: 30px;
    color: #2B90C7;
    font-weight: 500;
    padding-left: 15%;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    font-weight: bolder;
    margin-top: 20%;
    
` 


export default Home;