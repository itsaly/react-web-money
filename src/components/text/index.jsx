import { Component } from "react";

export default class TruncatedText extends Component {
    state = {
        showFullText: false
    }

    toggleFullText = () => {
        this.setState({
            showFullText: !this.state.showFullText
        })
    }

    render() {
        return(
            <>
                <p className="card-text truncate">
                    {
                        this.state.showFullText ? this.props.text : `${this.props.text.slice(0, this.props.maxChar)}...`
                    }
                </p>
                <a className="link-opacity-75-hover" onClick={this.toggleFullText}>{ this.state.showFullText ? 'Tampilkan lebih sedikit' : 'Selengkapnya' }</a>
            </>
        )
    }
}