import { Component } from "react";

export default class Title extends Component {
    render() {
        return(
            <div className="row mb-4">
                <div className="col">
                    <h1 className="text-center title-color"><strong>{this.props.title}</strong></h1>
                </div>
            </div>
        )
    }
}