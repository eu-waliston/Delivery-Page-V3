import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FOOTER id="footer">

            <iframe width="642" height="450" src="https://www.youtube.com/embed/cNOKQIw81SE" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen class="frames">
            </iframe>


            <ul className="footer__list_1">
                <li className="footer__itens">Company</li>
                <li className="footer__itens">About</li>
                <li className="footer__itens">Brands & Contries</li>
                <li className="footer__itens">Investor Relations</li>
            </ul>

            <ul className="footer__list_2">
                <li className="footer__itens">News</li>
                <li className="footer__itens">Blog</li>
                <li className="footer__itens">Newsroom</li>
            </ul>

            <ul className="footer__list_3">
                <li className="footer__itens">Get in Touch</li>
                <li className="footer__itens">Contact</li>
                <li className="footer__itens">Careers</li>
            </ul>

            <p className="copyes">Copyright &copy; WF-Delivrety </p>

            <ul className="footer__list_4">
                <li className="footer__itens">Find us on :</li>
                <i className="bi bi-whatsapp"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-linkedin"></i>
            </ul>
        </FOOTER>
    )
}

const FOOTER = styled.section`

    background-color: rgb(27, 36, 37);
    height: 105vh;

    #grid--list--footer {
        display: grid;
        grid-template-columns: repeat(3, 350px);
        clear: both;
    }
    .frames {
        position: relative;
        float: right;
        top: 37%;
        right: 5%;
    }


    .footer__list_1, .footer__list_2, .footer__list_3,.footer__list_4{
        color: #2B90C7;
        list-style: none;
        cursor: pointer;
        font-size: 20px;
    } 

    .footer__list_1 {
        position: relative;
        margin-left: 15%;
        font-weight: bold;
        text-transform: capitalize; 
        
    }

    .footer__list_2 {
        position: relative;
        margin-left: 27%;
        margin-top: -22%;
        font-weight: bold;
        text-transform: capitalize; 
    }

    .footer__list_3 {
        position: relative;
        margin-left: 35%;
        margin-top: -30%;
        font-weight: bold;
        text-transform: capitalize;
    }

    .footer__list_4 {
        position: relative;
        margin-left: 15%;
        margin-top: 5%;
        text-transform: capitalize;

        li {
         
            font-weight: bold;
        }

        i {
            color: #2B90C7;
            font-size: 50px;
            position: relative;
            top: 35px;
            margin-right: 10px;
        }
    }


    .copyes {
        position: relative;
        color: #2B90C7;
        font-size: bold;
        text-transform: uppercase;
        clear: both;
        text-align: center;
        top: 42%;
    }
`

export default Footer;