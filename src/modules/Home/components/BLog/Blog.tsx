import React from "react";
import img1 from "../../../../img/kt1z.png";
import img2 from "../../../../img/ktz2.png";
import img3 from "../../../../img/ktz3.png";
import img4 from "../../../../img/ktz4.png";
import img5 from "../../../../img/ktz5.png";
import scss from "../scss/style.module.scss";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section id="new-knowlege" className={scss.newknowlege}>
      <div className={scss.container}>
        <h1 style={{ fontWeight: 600 }}>Kiến thức mới</h1>
        <p>
          Nơi mình sẽ cập nhật kiến thức các nội dung <br />
          về công ty
        </p>
   


        <div className={scss.knowlege}>
       
          <div onClick={()=> navigate("know/post1")} className={`${scss.knowlegeitem} col-sm-6`}>
            <a >
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img1} />
              </div>
            </a>
            <div className={scss.knowlegetext}>
              <a href="baiviet1.html">
                <span>30 tháng 7, 2022</span>
              </a>
              <a href="baiviet1.html">Cách nhận biết một công ty đa cấp</a>
              <p>
                Đa cấp có lẽ là một từ đã quen thuộc và là nỗi sợ của mỗi sinh
                viên, tuy nhiên “mật ngọt chết ruồi”...
              </p>
            </div>
          </div>




         
          <div  onClick={()=> navigate("know/post2")} className={`${scss.knowlegeitem} col-sm-6`}>
            <a >
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img2} />
              </div>
            </a>
            <div className={scss.knowlegetext}>
              <a href="baiviet2.html">
                <span>30 tháng 7, 2022</span>
              </a>
              <a href="baiviet2.html">
                Danh sách công ty bán hàng đa cấp được cấp phép ở Việt Nam
              </a>
              <p>
                Chúng ta đã thảo luận nhiều về đa cấp lừa đảo, nay mình cung cấp
                thêm cho các bạn thông tin các...
              </p>
            </div>
          </div>




          <a href="baiviet3.html"></a>
          <div className={`${scss.knowlegeitem} col-sm-6`}>
            <a href="baiviet3.html">
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img3} />
              </div>
            </a>
            <div className={scss.knowlegetext}>
              <a href="baiviet3.html">
                <span>30 tháng 7, 2022</span>
              </a>
              <a href="baiviet3.html">
                Đa cấp là gì? Kinh doanh đa cấp chân chính và bất chính
              </a>
              <p>
                Dẫu biết lừa đảo nhưng rất nhiều người vẫn trở thành “con mồi
                béo bở” và rơi vào “cái bẫy” vô hình của “đa cấp”...
              </p>
            </div>
          </div>


          
          <a href="baiviet4.html"></a>
          <div className={`${scss.knowlegeitem} col-sm-6`}>
            <a href="baiviet4.html">
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img4} />
              </div>
            </a>
            <div className={scss.knowlegetext}>
              <a href="baiviet4.html">
                <span>30 tháng 7, 2022</span>
              </a>
              <a href="baiviet4.html">
                Hậu quả của sinh viên khi sập bẫy đa cấp
              </a>
              <p>
                Tân sinh viên, những tấm chiếu chưa trải, cất cánh bay thoát ly
                sự bảo hộ của gia đình, mang trong mình...
              </p>
            </div>
          </div>





          <a href="baiviet5.html"></a>
          <div className={`${scss.knowlegeitem} col-sm-6`}>
            <a href="baiviet5.html">
              <div className={scss.knowlegeimg}>
                <img height="100%" src={img5} />
              </div>
            </a>
            <div className={scss.knowlegetext}>
              <a href="baiviet5.html">
                <span>30 tháng 7, 2022</span>
              </a>
              <a href="baiviet5.html">
                Tại sao lại có SinhVienHelp? Mục đích ra đời
              </a>
              <p>
                Tân sinh viên, những tấm chiếu chưa trải, cất cánh bay thoát ly
                sự bảo hộ của gia đình, mang trong mình...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
