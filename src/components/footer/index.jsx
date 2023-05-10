import { Component } from 'react';
import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from '../../assets/img/social-media';

export default class Footer extends Component {
    render() {
        const socialMedia = [
            { alt: "Facebook", img: Facebook, link: "#" },
            { alt: "Instagram", img: Instagram, link: "#" },
            { alt: "LinkedIn", img: LinkedIn, link: "#" },
            { alt: "Twitter", img: Twitter, link: "#" },
            { alt: "WhatsApp", img: WhatsApp, link: "#" }
        ]

        const company = [
            { title: "Beranda", id: "#hero" },
            { title: "Tentang Kami", id: "#aboutUs" },
            { title: "Artikel", id: "#article" }
        ]

        return (
            <footer className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <h4>Perusahaan</h4>
                    <ul className="list-unstyled">
                        {
                            company.map((link) => (
                                <li key={link.title}>
                                    <a href={link.id}>{link.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <h4>Social media</h4>
                    <ul className="social-media list-unstyled">
                        {
                            socialMedia.map(social => (
                                <li key={social.alt}>
                                    <a href="#!">
                                        <img src={social.img} alt={social.alt} />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="border-top pt-4">
                      <p className="text-muted">
                        &copy; {new Date().getFullYear()} PT Belajar Saham Sekarang. All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          )
    }
}
