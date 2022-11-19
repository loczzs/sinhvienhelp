import React from "react";
import scss from "../scss/stylehead.module.scss"
import Logo from "../../img/Logo2.jpg"
import icon1 from "../../img/Vector.png"
import icon2 from "../../img/Line2.png"
const Footer = () => {
  return (
    <section className={`${scss.footer} mt-3`}>
      <div className={scss.container}>
        <div className="row">
          <div className={`${scss.f1} col-sm-6`}>
            <a href="home.html">
              <img className={scss.img} src={`${Logo}`} />
            </a>
            <p>
              SinhVienHelp là trang web của sinh viên và dành cho các bạn sinh
              viên, thoải mái trao đổi vào giúp đỡ nhau!
            </p>
          </div>
          <div className={`${scss.f2} col-sm-2`}>
            <h6 >Hỗ trợ</h6>
            <a >Yêu cầu</a>
            <a >Kiến thức</a>
            <a >thắc mắc</a>
            <a >Điều khoản</a>
            
          </div>
          <div className={`${scss.f2} col-sm-2`}>
            <h6 className="refsp">cộng đồng</h6>
            <a href="#">Facebook</a>
          </div>
          <div className={`${scss.f2} col-sm-2`}>
            <h6 className="refsp">liên lạc</h6>
            <a href="yeucau.html">góp ý</a>
            <a>Email</a>
          </div>
        </div>
        <div className={scss.footline}>
          <img className={scss.ab} src={`${icon2}`} />
          <img src={`${icon1}`} />
          {/* <i class="fa-brands fa-hire-a-helper"></i> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
