import "./CustomerReviews.scss";
import Carousel from "react-bootstrap/Carousel";
import img2 from "./../../assets/slider/1.jpg";
import img3 from "./../../assets/slider/2.jpg";
import img4 from "./../../assets/slider/3.jpg";
import img5 from "./../../assets/slider/4.jpg";

const CustomerReviews = () => {
  return (
    <div class="testimonials" id="testimonials">
      <div class="testimonials-title text-center">
        <h3>آراء العملاء</h3>
      </div>

      <Carousel className="">
        <Carousel.Item>
          <img className="rounded-circle m-auto" src={img2} alt="First slide" />
          <Carousel.Caption>
            <h4>
              محمد هاني <span> - مصمم ويب بشركة جوجل</span>
            </h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="rounded-circle" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h4>
              يوسف احمد
              <span>- مصمم ويب بشركة جوجل</span>
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="rounded-circle" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h4>
              خالد يوسف
              <span>- مصمم ويب بشركة جوجل</span>
            </h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="rounded-circle" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h4>
              احمد محسن
              <span>- مصمم ويب بشركة جوجل</span>
            </h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomerReviews;
