import React from 'react';

const Footer = () => {
  return (
    <footer
      class="footer set_bg"
      style={{ backgroundImage: "url('assets/img/footer-bg.jpg')" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="footer__widget">
              <h6>WORKING HOURS</h6>
              <ul>
                <li>Monday - Friday: 08:00 am – 08:30 pm</li>
                <li>Saturday: 10:00 am – 16:30 pm</li>
                <li>Sunday: 10:00 am – 16:30 pm</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="footer__about">
              <div class="footer__logo">
                <a href="#">
                  <img src="assets/img/footer-logo.png" alt=""></img>
                </a>
              </div>
              <p>
                Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
              <div class="footer__social">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="footer__newslatter">
              <h6>Subscribe</h6>
              <p>Get latest updates and offers.</p>
              <form action="#">
                <input type="text" placeholder="Email"></input>
                <button type="submit">
                  <i class="fa fa-send-o"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <p class="copyright__text text-white">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{' '}
                <i class="fa fa-heart" aria-hidden="true"></i> by{' '}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
            <div class="col-lg-5">
              <div class="copyright__widget">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
