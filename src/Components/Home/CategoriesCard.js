import React, { Fragment } from "react";
import "../Home/DropsCard.css";
const CategoriesCard = (cat_img, card_type)=>{
    return(
        <Fragment>
            <div className="card">
                <div className="card-body">
                    <img className="cat-img" src={cat_img} alt="cat-img"/>
                    <div className="card-type">{card_type}</div>
                </div>
            </div>
        </Fragment>
    )
}
export default CategoriesCard;