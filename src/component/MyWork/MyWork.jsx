import { useState } from "react";
import Box from "./Box";
import Data from "./Data";
import "./MyWork.scss";
// import img15 from "./../../assets/Project images/1.jpg";
// import img16 from "./../../assets/Project images/1.jpg";
// import img17 from "./../../assets/Project images/1.jpg";
// import img18 from "./../../assets/Project images/1.jpg";
// import img19 from "./../../assets/Project images/1.jpg";
// import img20 from "./../../assets/Project images/1.jpg";
import img21 from "./../../assets/Project images/21.png";

const MyWork = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [Pro, setPro] = useState(Data); // uncommented this line

  const filter = (catItem) => {
    setSelectedFilter(catItem);
    if (catItem === "All") {
      setPro(Data);
    } else {
      const result = Data.filter((curData) => {
        return curData.dataProject === catItem;
      });
      setPro(result);
    }
  };

  const DataProjects = Data.map((item) => {
    return (
      <Box
        link={item.link}
        img={item.img}
        title={item.title}
        text={item.text}
        text2={item.text2}
        text3={item.text3}
        text4={item.text4}
        key={item.id}
      />
    );
  });

  // const [Pro, setPro] = useState(Data);
  // const filter = (catItem) => {
  //   const result = Pro.filter((curData) => {
  //     return curData.dataProject === catItem;
  //   });
  //   setPro(result);
  // };

  return (
    <div className="myWork">
      <section className="gallery" id="gallery">
        <div className="headWork">
          <h2>
            <i className="fas fa-th-large d-block" aria-hidden="true"></i>
            Projects
          </h2>
        </div>
        <div className="container">
          <div className="gallery-work">

            {/*
             <div className="workNav">
              <input
                type="radio"
                name="radio-set-1"
                id="item-type-all"
                className="item-type-all d-none"
                checked="checked"
              /> 
              <label htmlFor="item-type-all" className="label-type-all">
                All
              </label>
             <input
                type="radio"
                name="radio-set-1"
                id="item-type-1"
                className="item-type-1 d-none"
                // onClick={() => filter("React")}
              /> 
              <label htmlFor="item-type-1" className="label-type-1">
                React
              </label>
               <input
                type="radio"
                name="radio-set-1"
                id="item-type-2"
                className="item-type-2 d-none"
              /> 
              <label htmlFor="item-type-2" className="label-type-2">
                JavaScript
              </label>
            </div> 
            */}

            {/* <div class="row g-0 ">
              <div class="col-sm-6 col-md-3">
                <a href="#img1" class="gallery-link">
                  <img src={img21} alt="" />
                  <div class="gallery-hover">
                    <i class="fas fa-search-plus"></i>
                  </div>
                </a>
                <div class="gallery-overlay" id="img1">
                  <div class="row ">
                    <div class="col-md-6">
                      <div class="overlay-img">
                        <img src={img21} alt="" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="overlay-text">
                        <h4>تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب</h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <i class="fas fa-tags"></i>
                          </li>
                          <li class="list-inline-item">
                            <a href="">After Effect, </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="">Video Editing, </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="">Photoshop</a>
                          </li>
                        </ul>
                        <p>
                          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                          لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
                          للنص أو شكل توضع الفقرات
                        </p>
                        <a href="#" class="btn">
                          زيارة المشروع
                        </a>
                        <a href="#page" class="close">
                          X
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="boxesProjects">{DataProjects}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyWork;
