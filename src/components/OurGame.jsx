export const OurGame = (props) => {
  return (
    <div id="about" className="container">
      <div className="row game-section">
        <div className="col-xs-12 col-sm-12 col-md-6 ourGame-header">
          <div className="ourgame-title">
            <img alt="" className="game-title" src="/imgs/OUR GAME.png" />
            <img
              style={{ width: "100%", marginTop: "10px" }}
              src="/imgs/Happy-Astronauts-Text-Logo.png"
              alt=""
            />
          </div>
          <div className="engin-logo">
            <img alt="" src="/imgs/1200px-Unreal_Engine_Logo 1.png" />
          </div>
          {props.data
            ? props.data.map((d, i) => (
                <div className="ourgame-text" key={i}>
                  {d.text1}
                  <br />
                  {d.text2}
                  {d.text3}
                  {d.text4}
                </div>
              ))
            : "loading"}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6" style={{ marginTop: 20 }}>
          <div className="play-title">
            <img src="/imgs/Play to Earn - GameFi_.png" alt="" />
          </div>
          <div className="play-center">
            <div className="play-bg img-responsive" alt="">
              {" "}
              <img
                className="play-video"
                src="/imgs/Alternate Realities Davis3D Justin Davis.png"
                alt=""
              />
              <img alt="" className="play-item" src="/imgs/play-button.png" />
            </div>
            <div className="ourgame-icon">
              <img alt="" src="/imgs/Xbox.png" />
              <img alt="" src="/imgs/playstation.png" />
              <img alt="" src="/imgs/pc.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="ourGame-footer">
        <img
          src="/imgs/The first Open world metaverse with Multiple Gaming modes,  and.png"
          alt=""
        />
      </div>
    </div>
  );
};
