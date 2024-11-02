import "./main_header_style.css";
import icon from "../logo_image/ICON.png";

function Main_Header() {
  return (
    <div className="main_header">
      <img className="header_icon" src={icon} alt="header_icon"></img>
      <h4 className="service_name">SPORTS HOLIC</h4>
      <h4 className="header_intro">K리그의 모든 것</h4>
    </div>
  );
}

export default Main_Header;
