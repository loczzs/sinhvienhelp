import React, { useState, useEffect } from "react";
import scss from "./request.module.scss";
import { useForm, SubmitHandler,Resolver } from "react-hook-form";

import { AppDispatch, RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import ctyAPI from "../../apis/ctyAPI";
import { showModal, closeModal } from "../../components/MainSlices/MainSlices";
import { useNavigate } from "react-router-dom";
import loading from "../../img/Shape.png";
const Request: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { radius } = useSelector((state: RootState) => state.main);
  const [buttonLoading, setButton] = useState(false);
  type FormValues = {
    id: null | string;
    name: string;
    address: string;
    type: string;
    info: string;
    desc: string;
    email: string;
    bonus: string;
  };
  // const resolver: Resolver<FormValues,any> = async (values) => {
  //   return {
  //     values: values.name ? values : {},
  //     errors: !values.name
  //       ? {
  //         name: {
  //             type: 'required',
  //             message: 'không được để trống.',
  //           },
  //         }
  //       : {},
  //   };
  // };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({mode:"onTouched"})
  ;
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    data = { ...data, info: data.name + " " + data.address, id: null };
    try {
      setButton(true);
      // await ctyAPI.requestCty(data)
      setTimeout(() => {
        dispatch(showModal(true));
      }, 1000);

      // reSetform()
      // console.log(data);
    } catch {}
  };

  const handleCLose = () => {
    dispatch(closeModal(false));
    reSetform();
  };

  function reSetform() {
    setValue("name", "");
    setValue("address", "");
    setValue("bonus", "");
    setValue("desc", "");
    setValue("email", "");
    setValue("info", "");
    setValue("type", "tất cả");
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className={scss.title}>
        <h1>Yêu Cầu Thêm</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section className={scss.formcon}>
          <div className={scss.formitem}>
            <p className={scss.spancss}>Tên Công Ty</p>
            <div className={scss.incss}>
              <input
              {...register("name", {
                required:true
                
              })}
                id="tencty"
                type="text"
                placeholder="Nhập tên công ty"
              />
            </div>
            {errors?.name && <p className="text-danger">không được để trống</p>}
            
          </div>
          <div className={scss.formitem}>
            <p className={scss.spancss}>Địa chỉ</p>
            <div className={scss.incss}>
              <input
                {...register("address", {
                  required:true
                  
                })}
                id="diachicty"
                type="text"
                placeholder="Nhập địa chỉ công ty"
              />
            </div>
            {errors?.address && <p className="text-danger">không được để trống</p>}
      
          </div>
          <div className={scss.formitem}>
            <p className={scss.spancss}>
              Thông tin thêm
              <span style={{ color: "#b1b5c4" }}>(không bắt buộc)</span>
            </p>
            <div className={scss.incss}>
              <input
                {...register("bonus")}
                id="bonuscty"
                type="text"
                placeholder="Dấu hiệu để nhận biết công ty"
              />
            </div>
            <span style={{ color: "red", display: "none" }} id="spdiachicty" />
          </div>
          <div className={scss.formitem}>
            <p className={scss.spancss}>chọn tỉnh thành</p>
            <div className={scss.incss}>
              <select
                {...register("type",{
                  validate: (value) => value !== "tất cả",
                })}
                id="chontinh"
                className={scss.yeucauselect}
              >
                <option value="tất cả">chọn tỉnh thành</option>
                <option value="TP.HCM">Tp.Hồ Chí Minh</option>
                <option value="HN">Hà Nội</option>
              </select>
            </div>
            {errors.type?.type === "validate" && <p className="text-danger">vui lòng chọn tỉnh thành</p>}
           
          </div>
          <div className={scss.formitem}>
            <p className={scss.spancss}>Email</p>
            <div className={scss.incss}>
              <input
                {...register("email",{
                  required: {
                    value: true,
                    message: "không được để trống",
                  },
                  pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "email không đúng định dạng",
                },
                })}
                id="emailyc"
                type="text"
                placeholder="Nhập email của bạn"
              />
            </div>
            {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            
          </div>
          <div className={scss.formitemz}>
            <p className={scss.spancss}>Trải nghiệm của bạn</p>
            <div className={scss.incssz}>
              <textarea
                {...register("desc")}
                placeholder="Chia sẻ về các mánh khóe, chiêu trò của công ty đa cấp dùng để dụ dỗ bạn"
                style={{ width: "100%", height: "100%", resize: "none" }}
                id="nameTextarea"
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
            <span style={{ color: "red", display: "none" }} id="spmota" />
          </div>
          <p className={scss.stylep}>
            * Bạn có thể up ảnh/video lên google drive, sau đó copy link dán
            vào, để chúng mình duyệt nhanh hơn
          </p>
          <div className={scss.rules}>
            <p>
              Khi gửi yêu cầu này,bạn đã đồng ý với
              <a
                onClick={() => {
                  navigate("/rules");
                }}
                style={{
                  borderBottom: "1px solid black",
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "5px",
                }}
              >
                điều khoản sử dụng của Sinh Vien Help
              </a>
            </p>
            <p>
              yêu cầu của bạn sẽ được duyệt sau 12-24 tiếng <br />
              các yêu cầu điền đúng đầy đủ thông tin như ảnh sẽ được duyệt nhanh
              hơn
            </p>
          </div>
          {/* <p style="margin-bottom: 0px;">các yêu cầu điền đúng đầy đủ thông tin như ảnh sẽ được duyệt nhanh hơn</p> */}
          {buttonLoading ? (
            <button id="changebutton">
              Đang gửi{" "}
              <img
                src={loading}
                className={radius ? scss.loading1 : scss.loading}
              />
            </button>
          ) : (
            <button id="changebutton">Yêu cầu thêm</button>
          )}
        </section>
      </form>
      {radius ? (
        <div className={scss.modalzzz}>
          <div id="modalcon" className={scss.modalcon}>
            <div
              onClick={() => {
                handleCLose();
                setButton(false);
              }}
              style={{ cursor: "pointer" }}
              className="w-100 mb-3"
            >
              <div style={{ textAlign: "right" }}>
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </div>
            </div>
            <div className={`${scss.circle} mb-3`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.4444L9.26035 17L19 7"
                  stroke="#30B38C"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={scss.modaltext}>
              <h3>Đã gửi yêu cầu</h3>
              <p>
                cảm ơn bạn đã gửi yêu cầu, chúng tôi sẽ xem xét yêu cầu trong
                12-24 tiếng
              </p>
              <div
                onClick={() => {
                  handleCLose();
                  setButton(false);
                }}
                className={scss.modalbutton}
              >
                <button className={scss.but1}>Quay lại</button>
                <a>
                  <button
                    onClick={() => {
                      navigate("/");
                      dispatch(closeModal(false));
                      setButton(false);
                    }}
                    className={scss.but2}
                  >
                    Trang chủ
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Request;
