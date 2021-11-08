import "./blogSec.css";
import projData from "../../assets/projData";
import { useState } from "react";

export default function BlogSec() {
  const [pData, setPData] = useState(projData);

  let d = new Date();
  let t = d.toDateString().split(" ");

  return (
    <div className="blog-sec">
      <div className="blogs-wrapper">
        {pData.map((blog) => (
          <div key={blog.id} className="blog-items">
            <img src={blog.img} alt="blog-img" />
            <div>
              <small>
                {t[1] + " " + t[3] + " "}
                <span>{" " + blog.subject}</span>
              </small>
              <h3>{blog.name}</h3>
              <span>{blog.desc.substring(0, 50)}...</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
