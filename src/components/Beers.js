import React from "react";
import Header from "./Header"
import axios from "axios"
import BeerDetails from "./BeerDetails"

class Beers extends React.Component {

    state = {
        beersList: []
    }


  getBeers = ()=> {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
        console.log("la réponse est :", response.data)
        this.setState({beersList: response.data})
    })
    .catch(error => console.log(error))
  } 

  componentDidMount(){
      this.getBeers()
    } 

    render(){
        return(
            <>
              <Header />
              {this.state.beersList.map((beer, index) => {
                  return(
                    <BeerDetails beer={beer}/>
                  )
              })} 


            </>
        )
    }
}

export default Beers;