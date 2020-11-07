import React from "react";
import axios from "axios";
import Header from "./Header";

class BeerDetails extends React.Component {

    state= {
        beer: {}
    }

    getBeer = () => {
        const { params } = this.props.match;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then( response =>{
            this.setState({beer: response.data});
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    componentDidMount(){
        this.getBeer()
    }
 
    render() {
        return (
            <>
                <Header/>
                 <h3>{this.state.beer.name}</h3>
                <img src={this.state.beer.image_url} alt="image" style={{ width: "50px" }} />
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.attenuation_level}</p> 
                <p>{this.state.beer.description}</p> 
                <p>{this.state.beer.contributed_by}</p> 

            </>
        )
    }
}

export default BeerDetails;