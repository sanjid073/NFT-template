export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
           {/* <a className='navbar-brand page-scroll' href='#page-top'> */}
           <img style={{cursor:"pointer", width: "250px", marginTop:"20px"}} src="/imgs/Happy-Astronauts-Text-Logo.png" alt=""/>
          {/* </a>{' '} */}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="page-scroll">
              <a className="header-nav" href="#mintStage">
                MINTING STAGE
              </a>
            </li>
            <li>
              <a className="header-nav" href="#about">
                Game
              </a>
            </li>
            <li>
              <a className="header-nav" href="#loadmap">
                ROADMAP
              </a>
            </li>
            <li>
              <a className="header-nav" href="#smartCoin">
                $ASTRO
              </a>
            </li>
            <li>
              <a className="header-nav" href="#UpComingEvent">
                MULTIVERSE
              </a>
            </li>

            <li>
              <a href="#" className="page-scroll mint-now-button">
                <img src="/imgs/Mint Now.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
