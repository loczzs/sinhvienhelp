import React from "react";
import scss from "../scss/style.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { getList, upCheck } from "../../slices/ListCtySlice";
import { AppDispatch, RootState } from "../../../../store";
import { useSelector, useDispatch } from "react-redux";
import { Cty } from "../../../../interface/data";
import Button from "react-bootstrap/Button";
import { searchList } from "../../slices/searchSlice";
import img39 from "../../../../img/Frame 39.png";

const Carousel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
 
  const { listSearch, result } = useSelector(
    (state: RootState) => state.search
  );
  // console.log(listSearch);

  
  useEffect(() => {
    dispatch(getList());
  }, []);
  var car2:string[]=[]
  var carz = JSON.parse(localStorage.getItem("Cartidsv") as any) || [];
  
  
  

  const [cart, setCart] = React.useState<string[]>(carz);
  localStorage.setItem("Cartidsv", JSON.stringify(cart));

  const handleUp = (cty: Cty) => {
    dispatch(upCheck(cty));
  };

  const handleCart = (id: string) => {
    setCart([...cart, id]);
  };
  // console.log(length);

  const handlesearch = (e: any) => {
    if (e.key !== "Enter") return;

    var value: string = e.target.value;

    // console.log(typeof value);
    dispatch(searchList(value));
  };
  return (
    <section id="sos" className={result === "" ? scss.carousel : scss.carousel2  }>
      <div id="carousel-text" className={scss.carouseltext}>
        <p>Sinh Viên Help</p>
      </div>
      <div className={scss.consearch}>
        <div className={scss.consearchzz}>
          <div className={scss.search}>
            <div>
              <input
                id="txtSearch"
                type="text"
                placeholder="tìm theo tên hoặc địa chỉ"
                onKeyPress={handlesearch}
              />
            </div>
          </div>
          <div className={scss.searchzz}>
            <SearchOutlined style={{ fontWeight: "900" }} />
          </div>
        </div>
        <div className={scss.spsearch}>
          {result ===""? <span></span> : <span id="spsearch">
            Có <span style={{ fontWeight: 600 }}>{listSearch.length}</span> kết
            quả trùng khớp với tìm kiếm của bạn
          </span>}
        </div>
      </div>
      <div>
        {result === "" ? (
          <div></div>
        ) : result.length === 0 ? (
          <div id="search-faill" className={scss.searchfaill}>
            <div className={scss.searchimg}>
              <img src={img39} />
            </div>
            <div className={scss.searchfailltext}>
              <p>
                Chúng tôi không tìm thấy dữ liệu bạn tìm kiếm trong danh sách
                hiện có của chúng tôi.
              </p>
              <p>
                Có thể bạn công ty bạn tìm kiếm chưa được thêm vào hệ thống hoặc
                không phải là công ty đa cấp
              </p>
              <p>
                Nếu bạn nghi ngờ xem có thể xem
                <a
                  style={{ color: "black" }}
                  className="me-1 ms-1"
                  href="kienthuc.html"
                >
                  Kiến thức
                </a>
                để xác định chính xác hơn
              </p>
              <p>
                Nếu bạn chắc chắn là công ty đa cấp có thể
                <a
                  style={{ color: "black" }}
                  className="me-1 ms-1"
                  href="yeucau.html"
                >
                  gửi yêu cầu
                </a>
                cho chúng tôi
              </p>
            </div>
          </div>
        ) : (
          <section id="blog" className={scss.blog}>
            <div className={scss.containerblog}>
              <div className={scss.bloginfo}>
                <div className={scss.info}>
                  <div className={scss.abc}>
                    <div className={scss.flexcss}>
                      <span>Thông tin</span>
                    </div>
                  </div>
                  <div id="blog-home" className={scss.abc}>
                    {listSearch
                      ?.map((cty) => {
                        let colors = "#777E91";
                        let click: boolean = false;
                        for (var i = 0; i < cart.length; i++) {
                          if (cart[i] === cty.id) {
                            colors = "blue";
                            click = true;
                          }
                        }
                        return (
                          <div key={cty.id} className={scss.flexcss2}>
                            <div className={scss.texblog}>
                              <h6>{cty.name}</h6>
                              <span>{cty.address}</span>
                            </div>
                            <div className={scss.iconblog}>
                              <div className="check">
                                <OverlayTrigger
                                  //  onEntering={entering}
                                  overlay={
                                    <Tooltip>
                                      <div>số người kiểm chứng</div>
                                    </Tooltip>
                                  }
                                >
                                  <span className="d-inline-block">
                                    <Button
                                      disabled={click}
                                      onClick={() => {
                                        handleCart(cty.id);
                                        handleUp(cty);
                                      }}
                                      className={scss.dis}
                                      style={{
                                        backgroundColor: "transparent",
                                      }}
                                    >
                                      <svg
                                        style={{
                                          backgroundColor: "transparent",
                                          color: colors,
                                          marginBottom: "3px",
                                          transition: "all 500ms",
                                        }}
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="check"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                </OverlayTrigger>
                                <span>{cty.check}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })
                      .reverse()}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Carousel;
