import React from "react";
import BackGroundBluebtn from "../../components/button/btn";
import Nav from "../../components/homepagecomponents/nav";

const Home = () => {
  return (
    <>
      <section>
        <Nav />
      </section>
      <section>
        <div className="hero_section">
          <div className="hero">
            <div className="content">
              <h2 className="hero_heading">NFT Simplified</h2>
              <p className="hero_paragraph">
                Dummy is a shared liquidity NFT market smart contract the which
                is used by multiple websites to provide the users the best
                possible experience.
              </p>
              <BackGroundBluebtn/>
            </div>
            <div className="image_portion"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
