import { Component } from "react";
import Logo from '../../assets/img/stock.png'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top px-5 mb-3 navbar-style">
                <span>
                    <img src={Logo} className="image me-2"/>
                    <a className="navbar-brand fs-3" href="#">PT Belajar Saham Bersama</a>
                </span>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#hero">Beranda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#aboutUs">Tentang Kami</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#article">Artikel</a>
                    </li>
                </ul>
            </nav>
        )
    }
}