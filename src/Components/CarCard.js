import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './carCard.css'

export default function CarCard(props) {
    return (
        <>
            <div className="carCard">
                <div className="carTitle">
                    <div className="text">
                        <h4>{props.name}</h4>
                        <p>{props.category}</p>
                    </div>
                    <div className="icon">

                        {props.status ? <FavoriteIcon id="liked" /> : <FavoriteBorderIcon />}

                    </div>
                </div>
                <div className="carMain">
                    <div className="carImage">
                        <img src={props.carImage} alt="" />
                    </div>
                    <div className="carFeatures">
                        <div className="features">
                            <LocalGasStationIcon />
                            <span>90L</span>
                        </div>
                        <div className="features">
                            <TimeToLeaveIcon />
                            <span>Manual</span>
                        </div>
                        <div className="features">
                            <PeopleAltIcon />
                            <span>2 People</span>
                        </div>
                    </div>
                </div>
                <div className="carAction">
                    <div className="prize">
                        <h4>{props.prize} / <span>Day</span></h4>
                        <p>{props.oldPrize}</p>
                    </div>
                    <div className="button">
                        <button>Rent Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}
