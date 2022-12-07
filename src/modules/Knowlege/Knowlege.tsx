import React,{ useState,useEffect } from "react";
import scss from "./style.module.scss";
import img1 from "../../img/kt1z.png";
import img2 from "../../img/ktz2.png";
import img3 from "../../img/ktz3.png";
import img4 from "../../img/ktz4.png";
import img5 from "../../img/ktz5.png";
import { useNavigate } from "react-router-dom";
const Knowlege = () => {
  const navigate = useNavigate();
  useEffect(()=>{
  
   
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
 

},[])
  return (
    <div style={{ marginTop: "80px" }}>
      <h1 className={scss.newtitle}>Kiến thức</h1>
      <section className={scss.newknowlege}>
        <div className={scss.containernew}>
          <div className="row">
            <div
              onClick={() => {
                navigate("post1");
              }}
              className={`${scss.knowlegeitem} col-sm-6 d-flex `}
            >
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img1} />
              </div>
              <div className={scss.knowlegetext}>
                <span>30 tháng 7, 2022</span>
                <a className={scss.an}>
                  <h1>Cách nhận biết một công ty đa cấp</h1>
                </a>
                <p>
                  Đa cấp có lẽ là một từ đã quen thuộc và là nỗi sợ của mỗi sinh
                  viên, tuy nhiên “mật ngọt chết ruồi”...
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("post2");
              }}
              className={`${scss.knowlegeitem} col-sm-6 d-flex `}
            >
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img2} />
              </div>
              <div className={scss.knowlegetext}>
                <span>30 tháng 7, 2022</span>
                <a className={scss.an}>
                  <h1>
                    Danh sách công ty bán hàng đa cấp được cấp phép ở Việt Nam
                  </h1>
                </a>
                <p>
                  Chúng ta đã thảo luận nhiều về đa cấp lừa đảo, nay mình cung
                  cấp thêm cho các bạn thông tin các...
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("post3");
              }}
              className={`${scss.knowlegeitem} col-sm-6 d-flex `}
            >
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img3} />
              </div>
              <div className={scss.knowlegetext}>
                <span>30 tháng 7, 2022</span>
                <a className={scss.an}>
                  <h1>
                    Đa cấp là gì? Kinh doanh đa cấp chân chính và bất chính
                  </h1>
                </a>
                <p>
                  Dẫu biết lừa đảo nhưng rất nhiều người vẫn trở thành “con mồi
                  béo bở” và rơi vào “cái bẫy” vô hình của “đa cấp”...
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("post4");
              }}
              className={`${scss.knowlegeitem} col-sm-6 d-flex `}
            >
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img4} />
              </div>
              <div className={scss.knowlegetext}>
                <span>30 tháng 7, 2022</span>
                <a className={scss.an}>
                  <h1>Hậu quả của sinh viên khi sập bẫy đa cấp</h1>
                </a>
                <p>
                  Tân sinh viên, những tấm chiếu chưa trải, cất cánh bay thoát
                  ly sự bảo hộ của gia đình, mang trong mình...
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("post5");
              }}
              className={`${scss.knowlegeitem} col-sm-6 d-flex `}
            >
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img5} />
              </div>
              <div className={scss.knowlegetext}>
                <span>30 tháng 7, 2022</span>
                <a className={scss.an}>
                  <h1>Tại sao lại có SinhVienHelp? Mục đích ra đời</h1>
                </a>
                <p>Một chút và đôi lời về SinhVienHelp của bọn mình</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Knowlege;
