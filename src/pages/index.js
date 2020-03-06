import React from "react"
import {Link} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Form, Button} from 'react-bootstrap'
import alpaca from './alpaca-cute.jpeg'
import "./styles.css"

function AlpacaBar() {
    return (
        <div className="alpacaBar">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Alpacify</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Text>
        <Link to="/profile/">Alpaca Profile</Link>
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

function Title(props) {
    return (
        <div className="alpacaTitle">
        <h1 className="index_title">{props.children}</h1>
        </div>
    )
}

function AboutText
() {
    return (
        <div className="aboutText">
          <p>Daniel’s Alpaca Farm raises alpacas and sells artisan alpaca products in their farm store (sweaters, yarn, lotions). 
            The farm has noticed that sponsoring or “adopting” animals is a popular way for farms to increase revenue, 
            and for urban dwellers to connect with animals that they don’t have the time or space to care for themselves.
            </p>
        </div>
    )
}


export default () => {
    return (
    <div>
        <AlpacaBar />
        <Title>Sponsor an Alpaca</Title>
        <img src={alpaca} style={{width: "20%", height: "10%", padding: "0px" }} />
        <AboutText />

        <div>
            <div className="container">
                <div className="row">
                    <footer class="footer blue">
                        <p>Copyright Daniel's Alpaca Farm 2020 | <a href="https://www.paypal.com/us/webapps/mpp/ua/acceptableuse-full">PayPal Acceptable Use Policy</a>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    </div>
    )
}
