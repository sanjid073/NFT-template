export const MintStage = (props) => {
  return (
    <div id="mintStage" className="text-center">
      <div className="container">
        <div className="mintingstage-title">
          <img src="/imgs/MINTING STAGES.png" alt="" />
        </div>
        <div className="row text-center mt-5">
          <div className="col-md-4 mintStage-img">
            <img width="110%" src="/imgs/stage_1.png" alt="" />

            <div className="mintingstagetext-item">
              <div className="mintingstagetext">
                <ul>
                  <li>Founders shoulder patch</li>
                  <li>Founders Metaverse NFT Badge</li>
                  <li>$ASTRO Coin Airdrop+</li>
                  <li>HA Insider Group Access</li>
                  <li>Closed Beta Access</li>
                  <li>Auto Whitelist/VIP Access</li>
                </ul>
              </div>
            </div>
            <div className="mintingstagebtn">
              <button className="btn">
                <img alt="" src="/imgs/sold_out.png" />
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mintStage-img">
              <img width="110%" src="/imgs/stage_2.png" alt="" />
            </div>
            <div className="mintingstagetext-item">
              <div className="mintingstagetext">
                <ul>
                  <li>Discover Metaverse NFT Badge</li>
                  <li>$ASTRO Coin Airdrop+</li>
                  <li>Closed Beta Access</li>
                  <li>Auto Whitelist/VIP Access</li>
                  <li style={{ visibility: "hidden" }}></li>
                  <li style={{ visibility: "hidden" }}></li>
                </ul>
              </div>
            </div>
            <div className="mintingstagebtn">
              <button className="btn">
                <img alt="" src="/imgs/mint_now.png" />
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mintStage-img">
              <img width="110%" src="/imgs/stage_3.png" alt="" />
            </div>
            <div className="mintingstagetext-item">
              <div className="mintingstagetext">
                <ul>
                  <li>Explorer Metaverse NFT Badge</li>
                  <li>Closed Beta Access</li>
                  <li>Auto Whitelist/VIP Access</li>
                  <li style={{ visibility: "hidden" }}></li>
                  <li style={{ visibility: "hidden" }}></li>
                  <li style={{ visibility: "hidden" }}></li>
                </ul>
              </div>
            </div>
            <div className="getwhitelisted">GET WHITELISTED</div>
            <div className="mintingstagebtn">
              <button className="btn">
                <img alt="" src="/imgs/join_discord.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
