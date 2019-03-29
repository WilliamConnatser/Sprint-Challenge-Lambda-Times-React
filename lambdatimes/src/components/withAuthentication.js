import React, {Component} from 'react'

export default Content => CallToAction => class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        console.log(localStorage.getItem('username'))
        if(localStorage.getItem('username') !== null) {
            this.setState({loggedIn: true})
        }
    }

    render() {

        return (
            <div>
                {this.state.loggedIn
                    ? <Content/>
                    : <CallToAction/>
}
            </div>

        )
    }
}
