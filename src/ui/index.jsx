import { Component } from "react";
import '../assets/global.css';
import Navbar from "../components/navbar";
import Home from "../pages/home/index";
import Footer from "../components/footer";

export default class Layout extends Component {
    render() {
        return(
            <>
                <Navbar />
                <Home />
                <Footer />
            </>
        )
    }
}