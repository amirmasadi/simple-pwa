import "./cvSec.css";
import Css from "../../assets/img/css-6.svg";
import Html from "../../assets/img/html5.svg";
import Javascript from "../../assets/img/javascript.svg";
import Photoshop from "../../assets/img/photoshop-cc.svg";
import ReactPic from "../../assets/img/react.svg";

export default function CvSec() {
  return (
    <div className="cv-sec">
      <div className="cv-sec-left">
        <div>
          <h1>Amir Asadi</h1>
          <h3>Web Developer</h3>
        </div>
        <div className="about">
          <div>
            <h3>contact</h3>
            <p>you can use live chat sections to contact me</p>
            <p>a.m.asadi2001@gmail.com</p>
            <p>Iran, tehran, damavand</p>
          </div>

          <div>
            <h3>About Me</h3>
            <p>
              Hard-working web developer with a flair for creating elegant
              solutions in the least amount of time. Developed an ecommerce
              webapp, customer web portal, documentary launch website, and
              donations webapp for a local charity. Passionate about software
              architecture and cloud computing. Regular attendee of web
              developer meetups and hackathons.
            </p>
          </div>

          <div>
            <h3>Skills</h3>
            <ul>
              <li>
                <p>
                  Full stack web developer responsible for end-to-end web app
                  development and creative cloud engineering. Led three teams of
                  five employees each.
                </p>
              </li>
              <li>
                <p>
                  Prototyped an average of 25 new product features per year.
                </p>
              </li>
              <li>
                <p>
                  Boosted user experience scores by 55% over company-wide
                  previous best.
                </p>
              </li>
              <li>
                <p>
                  Drove best practice implementation for 22 employees across
                  multiple departments. Decreased rework by 23% and costs by
                  15%.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="skills">
        <div>
          <img src={Css} alt="amir-asadi-pic" />
          <h4>CSS</h4>
        </div>
        <div>
          <img src={Html} alt="amir-asadi-pic" />
          <h4>HTML</h4>
        </div>
        <div>
          <img src={Javascript} alt="amir-asadi-pic" />
          <h4>JvaScript</h4>
        </div>
        <div>
          <img src={Photoshop} alt="amir-asadi-pic" />
          <h4>PhotoShop</h4>
        </div>
        <div>
          <img src={ReactPic} alt="amir-asadi-pic" />
          <h4>ReactJs</h4>
        </div>
      </div>
    </div>
  );
}
