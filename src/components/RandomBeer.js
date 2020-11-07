import React from "react";
import axios from "axios";
import Header from "./Header";

class RandomBeer extends React.Component {

    state= {
        randomBeer: {}
    }

    getBeer = () => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then( response =>{
            console.log('random response', response.data)
            this.setState({randomBeer: response.data});
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
                <h3>{this.state.randomBeer.name}</h3>
                <img src={this.state.randomBeer.image_url} alt="image" style={{ width: "50px" }} />
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.attenuation_level}</p> 
                <p>{this.state.randomBeer.description}</p> 
                <p>{this.state.randomBeer.contributed_by}</p> 

            </>
        )
    }
}

export default RandomBeer;