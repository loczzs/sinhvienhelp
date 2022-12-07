import React from "react";
import scss from "../scss/stylehead.module.scss";
import Logo from "../../img/Logo2.jpg";
import icon1 from "../../img/Vector.png";
import icon2 from "../../img/Line2.png";
import { useNavigate } from "react-router-dom";
import { RightOutlined ,DownOutlined } from "@ant-design/icons";
import { useState } from "react";
const Footer: React.FC  = () => {
  const navigate = useNavigate();
  const[drop1,setDrop1] = React.useState<boolean>(false)
  const[drop2,setDrop2] = React.useState<boolean>(false)
  const[drop3,setDrop3] = React.useState<boolean>(false)

  return (
    <section className={`${scss.footer} mt-3`}>
      <div className={scss.container}>
        <div className="row ">
          <div className={`${scss.f1} col-sm-6`}>
            <a onClick={() => navigate("/")}>
              <img className={scss.img} src={`${Logo}`} />
            </a>
            <p>
              SinhVienHelp là trang web của sinh viên và dành cho các bạn sinh
              viên, thoải mái trao đổi vào giúp đỡ nhau!
            </p>
          </div>

          <div className={`${scss.refooter1} col-sm-6 d-flex`}>
            <div className={`${scss.f2} col-sm-4`}>
              <h6>Hỗ trợ</h6>
              <a  onClick={() => {
                  navigate("/request");
                }}>Yêu cầu</a>
              <a  onClick={() => {
                  navigate("/know");
                }}>Kiến thức</a>
              <a
                onClick={() => {
                  navigate("wonder");
                }}
              >
                thắc mắc
              </a>
              <a
                onClick={() => {
                  navigate("rules");
                }}
              >
                Điều khoản
              </a>
            </div>
            <div className={`${scss.f2} col-sm-4`}>
              <h6 className="refsp">cộng đồng</h6>
              <a href="#">Facebook</a>
            </div>
            <div className={`${scss.f2} col-sm-4`}>
              <h6 className="refsp">liên lạc</h6>
              <a href="yeucau.html">góp ý</a>
              <a>Email</a>
            </div>
          </div>

          <div className={scss.refooter}>
            <div onClick={()=>setDrop1(!drop1)}>
              <div style={{ cursor: "pointer" }} id="a1">
                <div style={{ cursor: "pointer" }} className={scss.repfoot}>
                  <span>Hỗ trợ</span>
                 {drop1 ? <DownOutlined /> : <svg
                 
                 viewBox="64 64 896 896"
                 focusable="false"
                 data-icon="right"
                 width="1.25em"
                 height="1.25em"
                 fill="currentColor"
                 aria-hidden="true"
               >
                 <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
               </svg>}
                </div>
              </div>
             {drop1 ? <div id="re1" className={scss.refa}>
                <a >Yêu cầu</a>
                <a >Kiến thức</a>
                <a>thắc mắc</a>
                <a>Điều khoản</a>
              </div> :  ""}
            </div>

            <div onClick={()=>setDrop2(!drop2)}>
              <div style={{ cursor: "pointer" }} id="a2">
                <div className={scss.repfoot}>
                  <span>cộng đồng</span>
                  {drop2 ? <DownOutlined /> : <svg
                 
                 viewBox="64 64 896 896"
                 focusable="false"
                 data-icon="right"
                 width="1.25em"
                 height="1.25em"
                 fill="currentColor"
                 aria-hidden="true"
               >
                 <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
               </svg>}
                </div>
              </div>
             {drop2 ?  <div id="re2" className={scss.refa}>
                <a>Facebook</a>
              
              </div>:""}
            </div>

            <div onClick={()=>setDrop3(!drop3)}>
              <div style={{ cursor: "pointer" }} id="a3">
                <div className={scss.repfoot}>
                  <span>liên lạc</span>
                  {drop3 ? <DownOutlined /> : <svg
                 
                 viewBox="64 64 896 896"
                 focusable="false"
                 data-icon="right"
                 width="1.25em"
                 height="1.25em"
                 fill="currentColor"
                 aria-hidden="true"
               >
                 <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
               </svg>}
                </div>
              </div>
             {drop3? <div id="re3" className={scss.refa}>
                <a>góp ý</a>
                <a href="">Email</a>
              </div>:""}
            </div>






          </div>
        </div>
        <div  className={scss.footline}>
          <img className={scss.ab} src={`${icon2}`} />
          <img src={`${icon1}`} />
          {/* <i class="fa-brands fa-hire-a-helper"></i> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
