export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div>
          <div className="container">
            <div className="row">
              <div className="header-title">
                <h1 className="title">
                  10,000 OG
                  <br />
                  ASTRONAUTS
                  <br />
                  MINTING NOW!
                </h1>
                <br />
                <h3>
                  EXPLORE,BUILD,BATTLE,FARM,
                  <br />
                  AND STAKE IN GAME TO BE
                  <br />
                  AWARDED IN $ASTRO COIN!
                </h3>
              </div>
              <div className="header-icon">
                <a href="">
                  <img src="/imgs/facebook-button.png" alt="" />
                </a>
                <a href="">
                  <img src="/imgs/twitter-button.png" alt="" />
                </a>
                <a href="">
                  <img src="/imgs/discord-button.png" alt="" />
                </a>
                <a href="">
                  <img src="/imgs/youtube-button.png" alt="" />
                </a>
                <a href="">
                  <img src="/imgs/instragram-button.png" alt="" />
                </a>
                <a href="">
                  <img src="/imgs/last-buttton.png" alt="" />
                </a>
              </div>
              {/* <div className="header-man">
                <img src="/imgs/header-man.png" alt="" />
              </div> */}
              <div className="intro-text">
                <button>
                  <img
                    className="header-button"
                    src="/imgs/Mint Now Black.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
