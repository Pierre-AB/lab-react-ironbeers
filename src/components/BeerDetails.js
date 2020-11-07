import React from "react";

class BeerDetails extends React.Component {
   
   
    render(){
        return(
            <>
              <h1>{this.props.beer.name}</h1> 

            </>
        )
    }
}

export default BeerDetails;