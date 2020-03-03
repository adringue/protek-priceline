import React from 'react';
import './headstyle.css';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            headerContent: "Defalt this is /"
        };

    }

    componentDidMount() {
        console.log("whats up")
    };

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(nextProps.local.path)
        if (nextProps.location.pathname == "/cars") {
            this.setState({
                headerContent: `this is /cars route
                ewknkwenknmkqekqekk qefeqkneknknck
                `
            })
        } else if (nextProps.location.pathname == "/flight") {
            this.setState({
                headerContent: "This is the /flights route"
            })
        }

    }


    render(){
        return(
            <div className= "header">
                <p className="adj-header-font-size">
                {
                    this.state.headerContent
                }
                </p>
                {/*{*/}
                {/*    this.props.match.path == "/" ?*/}
                {/*        <div>*/}
                {/*            this is just /*/}
                {/*        </div>*/}

                {/*        :*/}

                {/*        this.props.match.path == "cars" ?*/}
                {/*            <div>*/}
                {/*                this is /cars hahaha*/}
                {/*            </div>*/}
                {/*            :*/}
                {/*            <div>*/}
                {/*                this is /flights wowowow*/}
                {/*            </div>*/}

                {/*}*/}

            </div>  


        );
    }
}

export default Header;
