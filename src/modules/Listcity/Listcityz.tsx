import React from "react";
import scss from "./style.module.scss";
import { useEffect, useState } from "react";
import { upCheck } from "./slices/listslice";
import { AppDispatch, RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { Cty } from "../../interface/data";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { DownOutlined } from "@ant-design/icons";
import { getfilterList } from "./slices/listslice";
import { keyFilter } from "./slices/listslice";
const Listcityz: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { listCty, isLoading, error } = useSelector(
    (state: RootState) => state.filter
  );
  const handlecallFilter =(key:string)=>{
        dispatch(keyFilter(key))
  }
  const [setit,setSetit]= React.useState<string>("Lọc theo tỉnh")

  useEffect(() => {
    dispatch(getfilterList(""));
  }, []);

  var cart: string[] | string = [];
  cart = JSON.parse(localStorage.getItem("Cartidsv") || "[]");
  const handleUp = async (cty: Cty) => {
    try {
      await dispatch(upCheck(cty));
      localStorage.setItem("Cartidsv", JSON.stringify([...cart, cty.id]));
    } catch (error) {
      alert(error);
    }
  };
  const [filtercity, setFiltercity] = useState<boolean>(false);
  const handleFilter = (filter: string) => {
    dispatch(getfilterList(filter));
  };
  return (
    <section id="blog" className={scss.blog}>
      <div className={scss.containerblog}>
        <h1>Danh sách công ty</h1>
        <div className={scss.bloginfo}>
          <div className={scss.info}>
            <div className={scss.abc}>
              <div className={scss.flexcss}>
                <span>Thông tin</span>
                <div className={scss.dropdow}>
                  <div id="closechange" className={scss.droptitle}>
                    <div id="soszz">
                      <button
                        onClick={() => {
                          setFiltercity(!filtercity);
                          
                        }}
                        className="btn"
                      >
                        {setit}
                        <svg
                          className="ms-1"
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L7 7L13 1"
                            stroke="#353E50"
                            stroke-width="1.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      {/* <i onclick="loczz()" id="soszz" style="display: none;" class="fa-solid fa-x"></i> */}
                    </div>
                  </div>
                  {filtercity ? (
                    <div id="loclist" className={scss.list}>
                      <div
                        onClick={() => {
                          handleFilter("");
                          setFiltercity(!filtercity);
                          setSetit("Lọc theo tỉnh")
                        }}
                      >
                        <button id="1zs" value="tất cả">
                          Tất cả
                        </button>
                      </div>
                      <div
                        onClick={() => {
                          handleFilter("TP.HCM");
                          setFiltercity(!filtercity);
                          setSetit("TP.HCM")
                          
                        }}
                      >
                        <button id="2zs" value="TP.HCM">
                          Tp.Hồ Chí Minh
                        </button>
                      </div>
                      <div
                        onClick={() => {
                          handleFilter("HN");
                          setFiltercity(!filtercity);
                          setSetit("HN")
                        }}
                      >
                        <button id="3zs" value="HN">
                          Hà Nội
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div id="blog-home" className={scss.abc}>
              {listCty
                ?.map((cty) => {
                  let colors = "#777E91";
                  let click: boolean = false;

                  for (var i = 0; i < cart.length; i++) {
                    if (cart[i] === cty.id) {
                      colors = "#0080f7";
                      click = true;
                    }
                  }

                  return (
                    <div key={cty.id} className={scss.flexcss2}>
                      <div className={scss.texblog}>
                        <h6 style={{wordBreak:"break-word"}}> {cty.name}</h6>
                        <span style={{wordBreak:"break-word"}}>{cty.address}</span>
                      </div>
                      <div className={scss.iconblog}>
                        <div className={scss.check}>
                          <OverlayTrigger
                            //  onEntering={entering}
                            overlay={
                              <Tooltip>
                                <div>số người kiểm chứng</div>
                              </Tooltip>
                            }
                          >
                            <span >
                              <Button
                             
                                disabled={click}
                                onClick={() => {
                                  handleUp(cty);
                                }}
                                className={scss.dis}
                                style={{
                                  backgroundColor: "transparent",
                                  border: "none",
                                  paddingRight:"0px",

                                  paddingLeft:"0px",
                                  
                                  
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
  );
};

export default Listcityz;
