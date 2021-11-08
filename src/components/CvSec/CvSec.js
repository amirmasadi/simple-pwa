import "./cvSec.css";
import ProfilePic from "../../assets/img/utracker.jpg";
import Css from "../../assets/img/css-5.svg";
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
        <div>
          <img src={ProfilePic} alt="amir-asadi-pic" />
        </div>
        <div>
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae nemo qui aliquid accusantium sunt in doloremque
            praesentium est architecto possimus neque quas quaerat esse
            quibusdam, ut nostrum, non optio sapiente nesciunt tempora iure
            nulla sed repellendus! Magni sint, adipisci rerum doloribus nemo
            assumenda asperiores architecto recusandae, suscipit reprehenderit
            esse velit totam! Perferendis inventore soluta dolorem sunt magni,
            rerum tempore eum numquam, tenetur expedita veritatis quidem. Fugit
            eum natus molestiae.
          </p>
        </div>
        <div className="skills">
          <img src={Css} alt="amir-asadi-pic" />
          <img src={Html} alt="amir-asadi-pic" />
          <img src={Javascript} alt="amir-asadi-pic" />
          <img src={Photoshop} alt="amir-asadi-pic" />
          <img src={ReactPic} alt="amir-asadi-pic" />
        </div>
      </div>
      <div className="cv-sec-right"></div>
    </div>
  );
}
