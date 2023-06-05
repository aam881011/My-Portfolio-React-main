import "./AboutMe.scss";
import img1 from "./../../assets/profile.jpg";

const AboutMe = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="overlay text-center">
            <div className="personel">
              <img src={img1} alt="" />
            </div>
            <h1>
              Mohamed Dahy<span> - Front End Developer</span>
            </h1>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/mohamed-dahy/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/profile.php?id=100013633185442"
                  target="_blank"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
            {/* <h2>Phone: 01210250215</h2> */}
            <div className="aboutMe">
              <p>
                A Front-End developer with 1y experience in React JS & Next JS
                framework, designing and developing attractive, interactive and
                responsive user interfaces that provides top-notch UX.
              </p>
              <p>
                I’m constantly working on improving my technical and personal
                skills and always striving to learn something new every day as
                my passion is front-end development since I graduated and as I
                love sharing my experience with others, I started my own Youtube
                channel.
              </p>
              <p>
                I look forward to working within an environment where I can
                learn, impact my team and help in achieving the company goals.
              </p>
            </div>
            <h2> Lives in Cairo, Egypt</h2>
            <br />
            <a href="#" className="cv" download="">
              <span>Download CV </span>
              <i className="fas fa-download"></i>
            </a>
            {/* <br /> */}
            {/* <br /> */}
            {/* <br /> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default AboutMe;
