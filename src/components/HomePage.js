import React from "react";
import { Link } from "react-router-dom"
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <Link to="/beers" style={{ textDecoration: 'none' }}>
                    <img src="https://www.ici-londres.com/data/img/fotolia_105422729_subscription_monthly_m-160803-162047.jpg" alt="NewBeer" />
                    <h1>All Beers</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas alias ducimus nobis, maxime neque eaque exercitationem perferendis numquam quibusdam quisquam tenetur doloremque provident quae nesciunt, eos corporis. Nostrum, ex possimus!</p>
                </Link>

                <Link to="/randomBeers" style={{ textDecoration: 'none' }}>
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/cf/34/ea/bottled-beer-range.jpg" alt="randomBeer" />
                    <h1>Random Beers</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas alias ducimus nobis, maxime neque eaque exercitationem perferendis numquam quibusdam quisquam tenetur doloremque provident quae nesciunt, eos corporis. Nostrum, ex possimus!</p>
                </Link>

                <Link to="/newBeer" style={{ textDecoration: 'none' }}>
                    <img src="https://www.guide-irlande.com/wp-content/uploads/2013/12/pinte-e1568710691789-480x300.jpg" alt="NewBeer" />
                    <h1>New Beer</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas alias ducimus nobis, maxime neque eaque exercitationem perferendis numquam quibusdam quisquam tenetur doloremque provident quae nesciunt, eos corporis. Nostrum, ex possimus!</p>
                </Link>
            </>
        )
    }
}

export default HomePage;