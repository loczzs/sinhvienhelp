import React from "react";
import scss from "../scss/style.module.scss";
import { CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getList, upCheck } from "../../slices/ListCtySlice";
import { AppDispatch, RootState } from "../../../../store";
import { useSelector, useDispatch } from "react-redux";
import { Cty } from "../../../../interface/data";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { type } from "os";

const Listcty: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { listCty, isLoading, error } = useSelector(
    (state: RootState) => state.lisCty
  );

  const listFilter = listCty?.filter((cty, index) => {
    return index > listCty.length - 7;
  });
  useEffect(() => {
    dispatch(getList());
  }, []);
  // const entering = (e: any) => {
  //   e.children[0].style.borderTopColor = "green ";
  //   e.children[1].style.backgroundColor = "green";
  // };

 var carz = JSON.parse(localStorage.getItem("Cartidsv") as any ) || [];

  const [cart, setCart] = React.useState<string[]>(carz);
  localStorage.setItem("Cartidsv", JSON.stringify(cart));
  
  

  const handleUp = (cty: Cty) => {
    dispatch(upCheck(cty));
    
  };



  const handleCart = (id: string) => {
    setCart([...cart, id]);
   
    
  };
  // console.log(cart);

  return (
    <section id="blog" className={scss.blog}>
      <div className={scss.containerblog}>
        <h1>Danh Sách Mới</h1>
        <p>Nơi mình liên tục cập nhật các danh sách cho mọi người</p>
        <div className={scss.bloginfo}>
          <div className={scss.info}>
            <div className={scss.abc}>
              <div className={scss.flexcss}>
                <span>Thông tin</span>
              </div>
            </div>
            <div id="blog-home" className={scss.abc}>
              {listFilter
                ?.map((cty) => {
                  let colors = "#777E91";
                  let click:boolean = false;
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
                                disabled ={click}
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
                                    backgroundColor:"transparent",
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

export default Listcty;
