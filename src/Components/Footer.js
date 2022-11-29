import React, { Fragment } from "react";
import "../Components/styles/Footer.css";
import logo from "../Assests/Images/owenslogo.png";
const Footer =()=>{
    return(
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <footer>
                        <div className="footer-section d-grid">
                            <div className="logo-sec">
                                <img src={logo} className="com-logo" />
                                <p className="foot-des text-start">There are many variations of passages of Lorem Ipsum available, but by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                            <div className="d-grid ft-content">
                                <div className="d-grid ft-sc ps-4">
                                    <h3 className="sc-txt text-start ">Join our community</h3>
                                    <div className="social">social</div>
                                </div>
                                <div className="d-grid ft-list ">
                                    <div className="col-sm-4 col-md-3 footer-content ">
                                        <h3 className="footHeading text-start ">More</h3>
                                        <ul className="footSubHeading text-start">
                                            <li className="footTxt">FAQs</li>
                                            <li className="footTxt">Help & support</li>
                                            <li className="footTxt">Terms of service</li>
                                            <li className="footTxt">Privacy policy</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 col-md-3 footer-content ">
                                        <h3 className="footHeading text-start ">My Accounts</h3>
                                        <ul className="footSubHeading text-start">
                                            <li className="footTxt">Profile</li>
                                            <li className="footTxt">Favorites</li>
                                            <li className="footTxt">My collections</li>
                                            <li className="footTxt">Settings</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 col-md-3 footer-content ">
                                        <h3 className="footHeading text-start ">Market Place</h3>
                                        <ul className="footSubHeading text-start">
                                            <li className="footTxt">Marketplace</li>
                                            <li className="footTxt">Live Drop</li>
                                            <li className="footTxt">All NFTs</li>
                                            <li className="footTxt">Collections</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*==============================================================*/}
                        <div className="d-grid term">
                            <div className="text-start">
                                <label className="term-con">@2022 Owens.market  | All rights reserved</label>
                             
                            </div>
                            <div className="text-end">
                                <label className="term-con">Proivacy Policy</label>
                                <label className="term-con ps-4">Terms & Agreements</label>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;