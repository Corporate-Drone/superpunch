import React from 'react'
import { useHistory } from "react-router-dom";

import Button from '../components/uiElements/Button';
import Ali from '../assets/ali-bright.png'
import './_Home.scss'

function Home() {
    const history = useHistory();

    return (

        <div className="Home">
            <div className="Home-info">
                <h1>Gloves for heavy hitters
                    <br /> by SuperPunch
                </h1>
                <Button onClick={() => history.push('/shop')} text={'Shop Now'} />
            </div>
            <div className="Home-Ali"><img  alt="ali vs liston" src={Ali}></img></div>

        </div>
    )
}

export default Home
