import { Link } from "react-router-dom";
import "./pageHeader.css";
export default function PageHeader(props: any) {
  return (
    <div className="page-header mx-5 py-2 ">
      <h1 style={{fontSize:30}}>{props.headerText}</h1>
      {props.showButton && (
        <Link to={props.target} className="btn ">
          {props.btnText}
        </Link>
      )}
    </div>
  );
}
