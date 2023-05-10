import { Component } from "react";
import { FirstPicture, SecondPicture, ThirdPicture, FourthPicture } from "../../assets/img";
import Title from "../../components/title";
import TruncatedText from "../../components/text";

export default class Article extends Component {
    render() {
        const articles = [
            { img: FirstPicture, title: "5 Tips untuk Pemula dalam Berinvestasi Saham", desc: "Artikel ini memberikan tips-tips penting bagi pemula yang ingin memulai investasi saham. Dari memahami risiko hingga memilih saham yang tepat, artikel ini akan membantu anda memulai investasi dengan lebih percaya diri." },
            { img: SecondPicture, title: "Cara Membaca Laporan Keuangan Perusahaan", desc: "Artikel ini menjelaskan bagaimana cara membaca laporan keuangan perusahaan secara mudah dan efektif. Dengan memahami laporan keuangan, anda akan dapat membuat keputusan investasi yang lebih baik." },
            { img: ThirdPicture, title: "Mengenal Jenis-jenis Investasi Saham", desc: "Artikel ini akan membahas jenis-jenis investasi saham yang ada, mulai dari saham biasa hingga saham preferen. Dengan memahami jenis-jenis saham, anda dapat memilih investasi yang sesuai dengan kebutuhan dan tujuan finansial anda." },
            { img: FourthPicture, title: "Strategi Investasi Jangka Panjang dengan Saham", desc: "Artikel ini membahas strategi investasi jangka panjang dengan saham, mulai dari diversifikasi portofolio hingga memilih saham dengan potensi pertumbuhan yang baik. Dengan mengikuti strategi yang tepat, anda dapat mencapai tujuan finansial jangka panjang anda melalui investasi saham." }
        ]

        return(
            <>
                <div id="article">
                    <Title title="Artikel Saham & Cryptocurrency"/>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        articles.map(article => (
                            <div className="col" key={article.title}>
                                <div className="card border-0 mb-3">
                                <img src={article.img} className="card-img-top card-image" alt="Picture" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>{article.title}</strong></h5>
                                    <TruncatedText maxChar={150} text={article.desc} />
                                </div>
                                </div>
                            </div>
                        ))
                    }

                    
                </div>
            </>
        )
    }
}