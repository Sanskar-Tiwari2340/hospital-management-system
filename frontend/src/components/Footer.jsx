import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "24 Hours",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "24 Hours",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "24 Hours",
    },
    {
      id: 4,
      day: "Thursday",
      time: "24 Hours",
    },
    {
      id: 5,
      day: "Friday",
      time: "24 Hours",
    },
    {
      id: 6,
      day: "Saturday",
      time: "24 Hours",
    },
    {
      id: 7,
      day: "Sunday",
      time: "24 Hours",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>999-999-9989</span>
            </div>
            <div>
              <MdEmail />
              <span>zeecare@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Naini, Prayagraj</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
