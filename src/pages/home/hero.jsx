import { Component } from "react";
import StockBg from "../../assets/img/stock-bg.jpg"

export default class Hero extends Component {
    render() {
        return (
            <div id="hero" className="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={StockBg} className="d-block w-100" alt="Trading monitor" />
                        <div className="carousel-caption d-none d-md-block py-5">
                            <h1>Selamat datang di PT Belajar Saham Sekarang!</h1>
                            <p>Kami hadir untuk membantu anda memahami seluk beluk investasi saham dan memberikan edukasi yang terbaik agar anda dapat menjadi investor yang sukses.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}