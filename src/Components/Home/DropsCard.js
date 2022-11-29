import React, { Fragment } from "react";
import bluetick from "D:/project/owens/src/Assests/SVGs/bluetick.svg";
import cd_icon from "D:/project/owens/src/Assests/SVGs/cdicon1.svg";
import "../Home/DropsCard.css";
const DropCard =({Card_img, Card_title})=>{
    return(
        <Fragment>
            <div className="card">
                <img src={Card_img}  className="dp-card-img"/>
                <div className="card-body p-0">
                    <div className="d-flex">
                        <h6 className="card-title title" >Casino Play Game</h6>
                        <img src={bluetick} className="bt" alt="bt"/>
                    </div>
                    <div className="d-flex items">
                        <span className="item text-start ">4 items</span>
                        <div className="d-flex text-end">
                            <img src={cd_icon} className="rounded-pill"/>
                            <span className="item pt-1">IsaEren </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default DropCard;