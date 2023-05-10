import { Component } from "react";
import Title from "../../components/title";
import { About, Vision, Mission } from '../../assets/img/icon/index'
import TruncatedText from "../../components/text";

export default class AboutUs extends Component {
    render() {

        const aboutCards = [
            { img: About, title: "Tentang Perusahaan", desc: "PT Belajar Saham Sekarang merupakan platform edukasi investasi saham yang didirikan pada tahun 2015. Kami berkomitmen untuk memberikan edukasi yang mudah dipahami bagi seluruh orang, mulai dari yang belum pernah berinvestasi hingga investor yang sudah berpengalaman. Kami memiliki tim ahli yang siap membantu anda memahami seluk beluk investasi saham dengan cara yang mudah dan efektif. Melalui layanan kami, kami berharap dapat meningkatkan literasi keuangan di Indonesia dan membantu setiap orang mencapai kebebasan finansial." },
            { img: Vision, title: "Visi Perusahaan", desc: "Visi PT Belajar Saham Sekarang adalah menjadi platform edukasi investasi saham terdepan dan terpercaya di Indonesia, yang mampu membantu setiap orang untuk mencapai kebebasan finansial. Kami berkomitmen untuk terus memperkuat layanan kami dan mengembangkan solusi yang inovatif untuk membantu pelanggan kami mencapai tujuan finansial mereka. Kami juga ingin menjadi agen perubahan dalam meningkatkan literasi keuangan dan membantu masyarakat Indonesia memahami manfaat dari investasi saham." },
            { img: Mission, title: "Misi Perusahaan", desc: "Misi PT Belajar Saham Sekarang adalah memberikan edukasi investasi saham yang mudah dipahami bagi setiap orang, membantu setiap orang untuk mencapai kebebasan finansial melalui investasi saham yang tepat, memberikan pelayanan yang terbaik dan memuaskan bagi seluruh pelanggan kami, serta terus berinovasi dan mengembangkan diri untuk memenuhi kebutuhan pasar dan meningkatkan kualitas edukasi yang kami berikan. Kami percaya bahwa dengan memberikan edukasi investasi yang berkualitas, kami dapat membantu meningkatkan literasi keuangan di Indonesia dan membantu setiap orang mencapai tujuan finansial mereka." }
        ]

        return(
            <div className="py-5" id="aboutUs">
                <Title title="Tentang PT Belajar Saham Bersama"/>
                <div className="card mb-5 border-0">
                    <div className="row g-0 about-us py-5 ps-4">
                        <div className="row">
                            {
                                aboutCards.map(about => (
                                    <div className="col-sm-4" key={about.title}>
                                        <div className="card border-0">
                                        <div className="card-body">
                                            <div>
                                                <img className="image" src={about.img} />
                                            </div>
                                            <h4 className="card-title"><strong>{about.title}</strong></h4>
                                            <TruncatedText maxChar={200} text={about.desc} />
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}