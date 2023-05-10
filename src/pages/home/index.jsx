import { Component } from "react";
import Hero from "./hero";
import Article from "./article";
import AboutUs from "./aboutUs";

export default class Home extends Component {
    render() {
        return(
            <div className="body">
                <Hero />
                <main className="container mx-10 my-5">
                    <AboutUs />
                    <Article />
                </main>
            </div>
        )
    }
}