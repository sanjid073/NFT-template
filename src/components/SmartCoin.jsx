export const SmartCoin = (props) => {
  return (
    <div id="smartCoin">
      <div className="nftProjects-background">
        <img src="/imgs/SmartCoin-background.png" alt="" />
      </div>
      <div className="container">
        <div className="smartCoin-title">
          <div>COMING 12/21</div>
          <img src="/imgs/$ASTRO COIN.png" alt="" />
        </div>
        <div className="smartCoin-text">
          ASTRO Coin is a GameFi cryptocurrency which is an evolution of DeFi
          crossed with Gamification. ASTRO is the official cryptocurrency of
          Happy Astronauts Metaverse on the Ethereum blockchain.
        </div>
        <div className="smartCoin-logo">
          <img src="/imgs/SmartCoin-logo.png" alt="" />
        </div>

        <div className=" m-btn text-center">
          <div className="smartCoin-button">
            <button className="btn">
              <img className="" src="/imgs/WHITEPAPER.png" alt="" />
            </button>
          </div>
          <div className="smartCoin-button">
            <button className="smartCoin-middle-button btn">
              <img src="/imgs/HOW TO BUY.png" alt="" />
            </button>
          </div>
          <div className="smartCoin-button">
            <button className="btn">
              <img src="/imgs/TOKENOMICS.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
