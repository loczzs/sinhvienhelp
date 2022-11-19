import React from 'react'
import scss from "../scss/stylehead.module.scss"
import abc from "../../img/Logo.jpg"
 const Header = () => {
  return (
   <header id="head" className={scss.head}>
  <div className={scss.container}>
    <div className="row">
      <div className="col-sm-7">
        <a href="home.html">
          <div >
            <img src={`${abc}`}  />
          </div>
        </a>
      </div>
  
      <div className="col-sm-5">
        <div className={scss.headmenu}>
          <div className={scss.ani}>
            <a href="yeucau.html">Yêu cầu</a>
            <div className={scss.line} />
          </div>
          <div className={scss.ani}>
            <a href="danhsach.html">Danh sách </a>
            <div className={scss.line} />
          </div>
          <div className={scss.ani}>
            <a href="kienthuc.html">kiến thức </a>
            <div className={scss.line} />
          </div>
          <div className={scss.ani}>
            <a href="yeucau.html">liên hệ</a>
            <div className={scss.line} />
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header