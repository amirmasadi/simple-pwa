import { useEffect, useState } from "react";
import projData from "../../assets/projData";
import "./proJsec.css";
export default function ProjSec() {
  const [search, setSearch] = useState("");
  const [pData, setPData] = useState(projData);

  let d = new Date();
  let t = d.toDateString().split(" ");

  function searchFunc() {
    if (search !== "") {
      const searchedData = pData.filter((data) =>
        data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      setPData(searchedData);
      console.log(searchedData);
    } else {
      setPData(projData);
    }
  }
  useEffect(() => {
    searchFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="proj-sec">
      <input
        type="input"
        name="name"
        id="name"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="proj-con">
        {pData.map((proj) => (
          <div key={proj.id} className="projItem">
            <img src={proj.img} alt="" />
            <div>
              <h3>
                {proj.name}
                <p>{t[1] + " " + t[3]}</p>
              </h3>
              <span>{proj.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
