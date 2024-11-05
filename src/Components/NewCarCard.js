import React from 'react'
import carImage from '../images/car1.png';


export default function NewCarCard(props) {
    return (
        <>
            <div className="newCarCard ">
                <div className="info">
                    <h1>{props.title}</h1>
                    <p>{props.context}</p>
                    <button>Rental Car</button>
                </div>
                <img src={props.carImage} alt="car" srcset="" />

            </div>

        </>
    )
}
