import React from "react";
import Header from "./Header"
import axios from "axios"
import BeerDetails from "./BeerDetails";
import { Link } from "react-router-dom"

class Beers extends React.Component {

    state = {
        beersList: []
    }


    getBeers = () => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log("la réponse est :", response.data)
                this.setState({ beersList: response.data })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getBeers()
    }

    render() {
        return (
            <>
                <Header />
                {this.state.beersList.map((beer, index) => {
                    return (
                        <>
                        <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }}>
                                <h3>{beer.name}</h3>
                                <img src={beer.image_url} alt="image" style={{ width: "50px" }} />
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                        </Link>

                        </>
                    )
                })}
            </>
        )
    }
}

export default Beers;