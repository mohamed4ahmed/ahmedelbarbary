import React, { useState, useEffect } from "react";
import avatar from "../../assets/img/chan-dung-edit.png";
import avatarIcon from "../../assets/img/avatar.webp";
import "./styles.css";
import { Link } from "react-router-dom";
import Greeting from "../../components/greeting";
import { FaArrowCircleUp } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const Information = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div className="app">
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>

          <div className="intro-wrapper1">
            <div className="nav-wrapper">
              <div className="nav-wrapper-left__dots-wrapper">
                <div className="browser-dot dot-1"></div>
                <div className="browser-dot dot-2"></div>
                <div className="browser-dot dot-3"></div>
              </div>
            </div>

            <div className="information">
              <img src={avatar} alt="avatar" />
              <h2>Ahmed Abdelkader ElBarbary </h2>

              <div className="social">
                <Link to="/portfolio">
                  <div className="icon">
                    <img src={avatarIcon} alt="website" />
                  </div>
                  <p>Portfolio</p>
                  <div className=""></div>
                </Link>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.raqyahsteel.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/domain--v1.png"
                      alt="website"
                    />
                  </div>
                  <p>Raqyah Steel</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="mailto:a.elbarbary47@gmail.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/gmail-new.png"
                      alt="email"
                    />
                  </div>
                  <p>Email</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+201093440386"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/egypt-circular.png"
                      alt="phoneegy"
                    />
                    <img
                      src="https://img.icons8.com/ios/50/000000/apple-phone.png"
                      alt="phone"
                    />
                  </div>
                  <p>Phone Number EGY</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+966540600567"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/saudi-arabia.png"
                      alt="phoneksa"
                    />
                    <img
                      src="https://img.icons8.com/clouds/100/000000/apple-phone.png"
                      alt="phonenum"
                    />
                  </div>
                  <p>Phone Number KSA</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.twitter.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/twitter.png"
                      alt="twitter"
                    />
                  </div>
                  <p>Twitter</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/Raqyah/"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/dusk/64/000000/facebook-new--v2.png"
                      alt="facebook"
                    />
                  </div>
                  <p>Facebook</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/messages/t/1669933166642974"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluency/50/000000/facebook-messenger--v2.png"
                      alt="messenger"
                    />
                  </div>
                  <p>Messenger</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.instagram.com/aitco_4_decor/"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/instagram-new--v3.png"
                      alt="instagram"
                    />
                  </div>
                  <p>Instagram</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  // rel="noopener noreferrer"
                  // target="__blank"
                  href="whatsapp://send?text=Welcome-I-happy-to-send-your-message&phone=+0536606915"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/whatsapp.png"
                      alt="whatsapp"
                    />
                  </div>
                  <p>WhatsApp</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://haraj.com.sa/users/ahmed%20elbrbry"
                >
                  <div className="icon">
                    <img
                      src="https://i0.wp.com/www.ibtdi.com/wp-content/uploads/2015/07/58wG22zJ-1.png?fit=1024%2C1024&ssl=1"
                      alt="haraj"
                    />
                  </div>
                  <p>Haraj</p>
                  <div className=""></div>
                </a>
              </div>

              <Greeting />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Information;
