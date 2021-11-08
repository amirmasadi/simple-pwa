import "./avatar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ParamContext } from "../../DataProvider";

export default function Avatar({ name, id, subTitle }) {
  const myParam = useContext(ParamContext);
  return (
    <Link
      className={`chat-header ${id === myParam && "selected"}`}
      to={!subTitle && `/${id}`}
    >
      <span>{name[0]}</span>
      <div>
        <h4>{name}</h4>
        <span>{subTitle && subTitle}</span>
      </div>
    </Link>
  );
}
