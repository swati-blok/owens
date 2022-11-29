import React, { Fragment } from "react";
import DropCard from "../../Components/Home/DropsCard";
import ViewAll from "../../Components/Home/ViewAll";
import "../Homepage/Homepage.css";
import svg1 from "D:/project/owens/src/Assests/SVGs/svg1.svg";
import img from "D:/project/owens/src/Assests/Images/heroimage.jpg";
import img1 from "D:/project/owens/src/Assests/Images/img1.png";
import ExploreCard from "../../Components/Home/ExploreCard";
import image7 from "D:/project/owens/src/Assests/Images/image7.png"
import CategoriesCard from "../../Components/Home/CategoriesCard";
import img4 from "D:/project/owens/src/Assests/Images/img4.png";
import img3 from "D:/project/owens/src/Assests/Images/img3.png";
import Footer from "../../Components/Footer";
const Homepage = () =>{
    return(
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <section className="hero-section">
                        <div className="hero d-grid">
                            <div className="nft text-start">
                                <h1 className="nft-heading">NFT Simplified</h1>
                                <p className="nft-des">Dummy is a shared liquidity NFT market smart contract the which is used by multiple websites to provide the users the best possible experience.</p>
                                <div className="d-flex btn-grp">
                                    <button className="btn btn-primary rounded-pill text-center gs-btn">Get Started</button>
                                    <button className="btn  vm-btn">View Market</button>
                                </div>
                                <div className="view d-flex">
                                    <h6 className="view-no d-flex">7.8K+<span className="vw-name">Collection</span></h6>
                                    <h6 className="view-no d-flex">1.6K+<span className="vw-name">Artworks</span></h6>
                                    <h6 className="view-no d-flex">3.2K+<span className="vw-name">Auction</span></h6>
                                </div>
                            </div>
                            <div className="hero-image">
                                <img src={img} className="h-img" />
                            </div>
                        </div>
                    </section>
                    <section className="upcoming-drops">
                        <div className="d-grid drops">
                            <div className=" d-flex .col-6">
                                <h3 className="drop-heading">Upcoming Drops</h3>
                                <div className="pt-4 ps-4">
                                    <button className="btn vw-btn"><span className="v-btn">286+</span></button>
                                </div>
                                
                            </div>
                            <div className=".col-4 text-end pe-4">
                                 <ViewAll z/>
                            </div>
                        </div>
                        <div className="drop-cards d-flex">
                            <DropCard 
                            Card_img={img1}
                            />
                            <DropCard 
                            Card_img={img1}
                            />
                            <DropCard 
                            Card_img={img1}
                            />
                        </div>
                    </section>
                    <section className="upcoming-drops">
                        <div className="d-grid drops">
                            <div className=" d-flex .col-6">
                                <h3 className="drop-heading">Explore</h3>
                            </div>
                            <div className=".col-4 text-end pe-4">
                                <div className="d-flex">
                                    <div className="ps-4">
                                        <img src={svg1} alt="svg" className="drop-svg pe-2" />
                                        <span className="svg-name">Artworks (1250)</span>
                                    </div>
                                    <div className="ps-4">
                                        <img src={svg1} alt="svg" className="drop-svg" />
                                        <span className="svg-name">War Game</span>
                                    </div>
                                    <div className="ps-4">
                                        <img src={svg1} alt="svg" className="drop-svg" />
                                        <span className="svg-name">Cricket 2022</span>
                                    </div>
                                    <div className="ps-4 ms-4 text-end pe-2">
                                 <ViewAll/>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid exp-card">
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                        </div>
                        </section>
                        <section className="stc">
                            <div className="st-coll d-grid">
                                <div className="coll-txt">
                                    <h3 className="col-heading">Start your own collection today</h3>
                                    <p className="col-description text-start">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                                    <div className="col-button">
                                        <button className="col-btn text-start">Start Collecting</button>
                                    </div>
                                </div>
                                <div className="coll-img">
                                    <img className="c-img" src={image7} alt="col-img" />
                                </div>
                            </div>
                        </section>
                        <section className="upcoming-drops">
                        <div className="d-grid drops">
                            <div className=" d-flex .col-6">
                                <h3 className="drop-heading">Categories</h3>
                            </div>
                            <div className=".col-4 text-end pe-4">
                                 <ViewAll />
                            </div>
                        </div>
                                                   {/*===============================================================*/}
                        <div className="">
                           
                        </div>
                        </section>
                        <section className="news-letter">
                            <div className="news d-grid ">
                                <div className="news-txt ps-5 text-start ms-4">
                                    <h3 className="col-heading">Subscribe to our Newsletter</h3>
                                    <p className="col-description ">Newsworthy headlines and noteworthy transactions from across the metaverse,  delivered straight to your inbox every week.</p>
                                    <div className="email ">
                                        <input type="text" placeholder="Enter your email address" className="email-form" />
                                        <button className="email-btn btn">Subscribe</button>
                                    </div>
                                </div>
                            <img src={img3} className="nw-img" alt="news-image"/>
                            </div>
                           
                          
                        </section>
                        <section className="footer">
                        <Footer />
                        </section>
                </div>
            </div>
        </Fragment>
    )
}
export default Homepage;