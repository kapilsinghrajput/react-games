import React from 'react'
import './Games.css'
import Nav from './Nav'
import MopvieData from '../Data.json'


const Games = () => {




    return (
        <div>
        <Nav/>  
            <div className="movies_box">




                {
                    MopvieData.map((data , ind) => (

                        <div className="boxes" key={ind}>
                            <div className="title">{data.title}</div>
                            <img src={data.thumbnail} alt="img" />
                            <div className="dates">{data.release_date}</div>
                            <div className="ganer">{data.genre}</div>
                            <div className="golink"><a href={data.game_url}>play</a></div>

                        </div>

                    ))

                }

            </div>
        </div>
    )
}

export default Games
