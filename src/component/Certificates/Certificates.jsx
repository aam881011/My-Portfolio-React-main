import "./Certificates.scss";

const Certificates = () => {
  return (
    <section className="licence" id="licence">
      <div className="container">
        <div className="licence-title text-center">
          <h2>
            <i className="fas fa-graduation-cap"></i>
            Certificates
          </h2>
        </div>
        <ul className="timeline">
          <li>
            <div className="timebox">
              <h4>
                {" "}
                FRONT END DEVELOPER FREELANCE<span> 2022 - Now</span> 
              </h4>
              <p>
              Developed and maintained various websites and web applications using HTML, CSS, and JavaScript.
              Collaborated with clients to understand their requirements and provide solutions that met their needs
              </p>
            </div>
          </li>
          <li>
            <div className="timebox">
              <h4>
              COMPUTER,ROUTER, AND ACCESS POINT MAINTENANCE<span>2019 - 2021</span>
              </h4>
              <p>
              Provided computer, router, and access point maintenance services for various clients.
              Provided remote support to clients, troubleshooting issues over the phone or through remote access tools.
              </p>
            </div>
          </li>
          <li>
            <div className="timebox">
              <h4>
              WIRELESS NETWORKS AND SERVERS<span>2016 - 2021</span> 
              </h4>
              <p>
              I used to work as a wireless network technician and dealt with various types of wireless network devices.
              I also worked with various network management servers.My role involved programming, installation, maintenance, troubleshooting, ...
              </p>
            </div>
          </li>
          <li>
            <div className="timebox">
              <h4>
                <span>January - 2022</span>FREELANCING TRAINING IN CREATIVA MINYA
              </h4>
              <p>
              CREATIVA MINYA AND ATHAR ACCELERATOR 
              I learned how to create an account on freelancing sites, how to search for a client, and the advantages and disadvantages 
              of self-employment, and many others / <a href="https://drive.google.com/file/d/1svGPJK7G4VfrmY7HeVLtJlS2kwrXa8I0/view?usp=sharing">Certificate</a>  .
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
