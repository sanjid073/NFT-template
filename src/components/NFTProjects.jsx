export const NFTProjects = (props) => {
  return (
    <div id="nftProjects">
      <div className="nftProjects-background">
        <img src="/imgs/nftPeojectsBackground.png" alt="" />
      </div>
      <div className="nftProjects-title">
        <img src="/imgs/NFT PROPERTIES.png" alt="" />
      </div>
      <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
        <div className="col-xs-12 col-md-6 nftProjects1-display" style={{}}>
          <img
            src="/imgs/nft-projects-left-nontext.png"
            alt=""
            style={{ zIndex: -1, position: "absolute",marginRight: "15%" }}
          />
          {props.data
            ? props.data.map((d, i) => (
                <div className="nftProjects-text-item" style={{marginRight:"18%"}}>
                  <div className="nftProjects-text" key={i}>
                    {d.text1}
                    <h3 style={{marginLeft:"24%", display:"inline"}}>39</h3>
                  </div>
                  <div className="nftProjects-text" key={i}>
                    {d.text2}
                    <h3 style={{marginLeft:"34%", display:"inline"}}>100</h3>
                  </div>
                  <div className="nftProjects-text" key={i}>
                    {d.text3}
                    <h3 style={{marginLeft:"47%", display:"inline"}}>136</h3>
                  </div>
                  <div className="nftProjects-text" key={i}>
                    {d.text4}
                    <h3 style={{marginLeft:"30%", display:"inline"}}>18</h3>
                  </div>
                  <div className="nftProjects-text" key={i}>
                    {d.text5}
                    <h3 style={{marginLeft:"30%", display:"inline"}}>69</h3>
                  </div>
                  <div className="nftProjects-text" key={i}>
                    {d.text6}
                    <h3 style={{marginLeft:"55%", display:"inline"}}>76</h3>
                  </div>
                  <div className="nftProjects-text" key={i}>
                    {d.text7}
                    <h3 style={{marginLeft:"47%", display:"inline"}}>136</h3>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="col-xs-12 col-md-6 nftProjects2-display" style={{}}>
          <img
            src="/imgs/nft-projects-nontext.png"
            alt=""
            style={{ zIndex: -1, position: "absolute",marginLeft: "15%" }}
          />
          {props.data
            ? props.data.map((d, i) => (
                <div
                  className="nftProjects-text-item"
                  style={{ marginLeft: "28%" }}
                >
                  <div className="nftProjects-text" key={i}>
                  <h3 style={{marginRight:"6%",marginLeft:"-10%", display:"inline"}}>60</h3>
                    {d.text8}
                  </div>
                  <div className="nftProjects-text" key={i}>
                  <h3 style={{marginRight:"6%",marginLeft:"-10%", display:"inline"}}>76</h3>
                    {d.text9}
                  </div>
                  <div className="nftProjects-text" key={i}>
                  <h3 style={{marginRight:"6%",marginLeft:"-11%", display:"inline"}}>110</h3>
                    {d.text10}
                  </div>
                  <div className="nftProjects-text" key={i}>
                  <h3 style={{marginRight:"6%",marginLeft:"-10%", display:"inline"}}>45</h3>
                    {d.text11}
                  </div>
                  <div className="nftProjects-text" key={i}>
                  <h3 style={{marginRight:"6%",marginLeft:"-10%", display:"inline"}}>42</h3>
                    {d.text12}
                  </div>
                  <div className="nftProjects-text" key={i}>
                    <h3 style={{marginRight:"6%",marginLeft:"-10%", display:"inline"}}>18</h3>
                    {d.text13}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
      {props.data
        ? props.data.map((d, i) => (
            <div className="nftProjects-footer">
              <div className="address">{d.verifyAddress}</div>
              <a href="" className="addressText">{d.verifyAddresstext}</a>
            </div>
          ))
        : "loading"}
    </div>
  );
};
