export const Footer = (props) => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row d-flex justify-content-center align-item-center">
          <div className="col-md-4 footer-text">
            <h3 className="mb-5">JOIN OUR NEWSLETTER</h3>
            <p className="text-muted">
              Subscribe to our newsletter to get info on contests, giveaways,
              community meetups, ways to get involved, upcoming releases, and
              more!
            </p>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="col-md-4 footer-logo text-center">
            <img src="/imgs/logo.png" alt="" />
          </div>
          <div className="col-md-4 ">
            <div className="footer-text-2">
              <h3 className="">AVAILABLE ON</h3>
              <img src="/imgs/Layer 6.png" alt="" />
              <img src="/imgs/Layer 7.png" alt="" />
              <img src="/imgs/Group 34.png" alt="" />
            </div>
          </div>
        </div>
        <div className="footer-base">
          <img src="/imgs/footer-base.png" alt="" />
          <div className="row footer-info">
            <div className="col-md-6">
              <div className="left-footer-info">
                <img src="/imgs/logo.png" alt="" width="10%" />
                <p>© Copyrights, 2021 Happy Astronauts</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-footer-info">
                <div className="footer-icon">
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-facebook-square"></i>
                  <i class="fab fa-pinterest-p"></i>
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
