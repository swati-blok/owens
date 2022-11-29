import React, { Fragment } from "react";
import img2 from "D:/project/owens/src/Assests/Images/img2.png";
import "../Home/DropsCard.css";
import svg2 from "D:/project/owens/src/Assests/SVGs/Ethereum-logo.svg"
const ExploreCard = ()=>{
    return(
        <Fragment>
            <div className="card ec-card">
                <img className="ec-img" src={img2} alt="img"/>
                <div className="card-body p-0">
                    <h6 className="card-title title text-start" >Casino Play Game</h6>
                    <div className=" d-grid card-txt">
                        <label className="item1 text-start ">Gamer</label>
                        <div>
                            <label className="item2 pt-1">IsaEren </label>
                            <img src={svg2} className="rounded-pill text-end"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ExploreCard;