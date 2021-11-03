import React from 'react'
import { useHistory } from "react-router-dom";

import Button from '../components/uiElements/Button';
import Gloves from '../assets/boxing-gloves.png'
import './_Home.scss'

function Home() {
    const history = useHistory();

    return (

        <div className="Home">
            <div className="Home-info">
                <h1>Gloves for heavy hitters
                    <br /> by SuperPunch
                </h1>
                {/* <button onClick={() => history.push('/shop')}>Shop Now</button> */}
                <Button onClick={() => history.push('/shop')} text={'Shop Now'}/>
            </div>
            <div className="Home-glove"><img src={Gloves}></img></div>
            
        </div>
    )
}

export default Home
