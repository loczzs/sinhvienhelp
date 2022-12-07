import React from "react";
import img from "../../img/Rectangle 333.png";
import shape from "../../img/Shapebv.png";
import scss from "./style.module.scss";
import { useNavigate } from "react-router-dom";
const Post2 = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "80px" }}>
      <a
        onClick={() => {
          navigate("/know");
        }}
        style={{ textDecoration: "none" }}
      >
        <div className={`${scss.container} ${scss.sos} `}>
          <span className={scss.spcss}>
            <i className={scss.icss}>
              <img src={shape} />
            </i>
            Quay lại
          </span>
        </div>
      </a>

      <div style={{ marginBottom: "12px" }} className="title">
        <div className={scss.container}>
          <div className="row">
            <div className={`${scss.colz} col-sm-8`}>
              <img width={"100%"} src={img} />
            </div>
            <div
              style={{ borderLeft: " 1px solid #E6E8EC " }}
              className={`${scss.responpost} col-sm-4`}
            >
              <div>
                <div>
                <h1 className={scss.h1css}>Bài viết khác</h1>
                  <div
                    onClick={() => {
                      navigate("/know/post1");
                    }}
                    className={scss.knowlegetext}
                  >
                   
                    <span className={scss.knowlegetextspan}>
                      30 tháng 7, 2022
                    </span>
                    <a style={{ textDecoration: "none" }} className="an">
                      <h1>Tóm tắt:Cách nhận biết một công ty đa cấp</h1>
                    </a>
                    <p>
                      Đa cấp có lẽ là một từ đã quen thuộc và là nỗi sợ của mỗi
                      sinh viên, tuy nhiên “mật ngọt chết ruồi”...
                    </p>
                  </div>
                  <div className={scss.knowlegetext}>
                    <span className={scss.knowlegetextspan}>
                      30 tháng 7, 2022
                    </span>
                    <a style={{ textDecoration: "none" }} className="an">
                      <h1>Tại sao lại có SinhVienHelp? Mục đích ra đời</h1>
                    </a>
                    <p>Một chút và đôi lời về SinhVienHelp của bọn mình</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className={scss.blog}>
        <div className={scss.container}>
          <span
            style={{ marginBottom: "12px" }}
            className={scss.knowlegetextspan}
          >
            30 tháng 7, 2022
          </span>
          <b>
         
            <h1 style={{ marginBottom: "24px" }} className={scss.h1css}>
              Danh sách công ty bán hàng đa cấp được cấp phép ở Việt Nam
            </h1>
          </b>
          <div className={scss.blogtext}>
            <div className="col-sm-8">
              <p className={scss.pcss}>
                Chúng ta đã thảo luận nhiều về đa cấp lừa đảo, nay mình cung cấp
                thêm cho các bạn thông tin các công ty bán hàng đa cấp chính
                thống, được cấp phép và không có vé ngồi trong danh sách đen của
                Sinhvienhelp.
              </p>
              <p className={scss.pcss}>
                Các công ty, doanh nghiệp hoạt động kinh doanh theo phương thức
                đa cấp chân chính phải được đăng ký theo quy định của Theo Nghị
                định số 40/2018/NĐ-CP ngày 12 tháng 3 năm 2018 của Chính phủ về
                quản lý hoạt động kinh doanh theo phương thức đa cấp.
              </p>
              <p>
                Hiện nay, chỉ có 22 doanh nghiệp bán hàng đa cấp (BHĐC) đang
                hoạt động theo quy định của Nghị định số 40/2018/NĐ-CP. Cụ thể:
              </p>
              <div className={scss.list}>
                <b >
                  1. Công ty TNHH Phong Cách Sống Kim Cương Việt Nam
                </b>
                <p >
                  Địa chỉ: 227 Nguyễn Đình Chính, phường 11, quận Phú Nhuận, TP.
                  Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động pHĐC: 047/QLCT-GCN</p>
                <p >Ngày cấp: 21/07/2015</p>
                <p >Ngày gia hạn: 20/07/2020</p>
              </div>
              <div className={scss.list}>
                <b >
                  2. Công ty TNHH Unicity Marketing Việt Nam
                </b>
                <p >
                  Địa chỉ: 227 Nguyễn Đình Chính, phường 11, quận Phú Nhuận, TP.
                  Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 007/QLCT-GCN</p>
                <p >Ngày cấp: 22/12/2014</p>
                <p >Ngày gia hạn: 20/12/2019</p>
              </div>
              <div className={scss.list}>
                <b >3. Công ty TNHH Total Swiss Việt Nam </b>
                <p >
                  Địa chỉ: số 89 Xuân Hồng, Phường 12, Quận Tân Bình, TP. Hồ Chí
                  Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 022/QLCT-GCN</p>
                <p >Ngày cấp: 10/02/2015</p>
                <p >Ngày gia hạn: 09/02/2020</p>
              </div>
              <div className={scss.list}>
                <b >
                  4. Công ty TNHH MTV Thương mại Dịch vụ Hoằng Đạt
                </b>
                <p >
                  Địa chỉ: Số 18, đường số 3, khu dân cư Cityland, Phường 5,
                  Quận Gò Vấp, TP. Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 027/QLCT-GCN</p>
                <p >Ngày cấp: 14/02/2015</p>
                <p >Ngày gia hạn : 12/02/2020</p>
              </div>
              <div className={scss.list}>
                <b >5. Công ty TNHH GCOOP Việt Nam </b>
                <p >
                  Địa chỉ: B17-17 Vinhomes Gardenia, phường Cầu Diễn, quận Nam
                  Từ Liêm, TP. Hà Nội
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 03/CN-CT</p>
                <p >Ngày cấp: 20/11/2019</p>
              </div>
              <div className={scss.list}>
                <b >6. Công ty TNHH Siberian Health Quốc tế </b>
                <p >
                  Địa chỉ: Tầng 2, tòa nhà HH-N01 Gold Season, 47 Nguyễn Tuân,
                  phường Thanh Xuân Trung, quận Thanh Xuân, TP. Hà Nội.
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 025/QLCT-GCN</p>
                <p >Ngày cấp: 12/02/2015</p>
                <p >Ngày gia hạn: 11/02/2020</p>
              </div>
              <div className={scss.list}>
                <b >
                  7. Công ty TNHH Kyowon The Orm Việt Nam Địa chỉ: Số 38/1
                  Nguyễn Văn Trỗi, phường 15, quận Phú Nhuận, TP. Hồ Chí Minh
                </b>
                <p >
                  Địa chỉ: Số 38/1 Nguyễn Văn Trỗi, phường 15, quận Phú Nhuận,
                  TP. Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 04/CN-CT</p>
                <p >Ngày cấp: 27/11/2020</p>
                <p  />
              </div>
              <div className={scss.list}>
                <b >8. Công ty TNHH Thương Mại Lô Hội </b>
                <p >GCN đăng ký hoạt động BHĐC: 014/QLCT-GCN</p>
                <p >
                  Địa chỉ: 199 Nam Kỳ Khởi Nghĩa, P7, Quận 3, TP Hồ Chí Minh
                </p>
                <p >ngày cấp: 31/12/2014</p>
                <p >Ngày gia hạn : 30/12/2019</p>
              </div>
              <div className={scss.list}>
                <b >9. Công ty TNHH Best World Việt Nam </b>
                <p >
                  Địa chỉ: 152 + 150/4 Đường Võ Thị Sáu, Phường 08, Quận 3, TP.
                  Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 033/QLCT-GCN</p>
                <p >Ngày cấp: 08/02/2021</p>
                <p >Ngày gia hạn : 04/03/2020</p>
              </div>
              <div className={scss.list}>
                <b >
                  10. Công ty TNHH Elken International Việt Nam{" "}
                </b>
                <p >
                  Địa chỉ: Số 117, đường Điện Biên Phủ, phường Đa Kao, Quận 1,
                  TP. Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 019/QLCT-GCN</p>
                <p >Ngày cấp: 28/01/2015</p>
                <p >Ngày gia hạn: 16/12/2019</p>
              </div>
              <div className={scss.list}>
                <b >
                  11. Công ty TNHH Người Lái xe Mặt Trời Việt Nam
                </b>
                <p >
                  Địa chỉ: Tầng 2, Tòa nhà Lam Giang, Số 167-173 Trần Hưng Đạo,
                  Quận 1, TP. Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 046/QLCT-GCN</p>
                <p >Ngày cấp: 15/07/2015</p>
                <p >Ngày gia hạn: 05/06/2020</p>
              </div>
              <div className={scss.list}>
                <b >
                  12. Công ty TNHH Nu Skin Enterprises Việt Nam{" "}
                </b>
                <p >
                  Địa chỉ: Tầng 2, Số 280, đường Nam Kỳ Khởi Nghĩa, Phường Võ
                  Thị Sáu, Quận 3, TP. Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 016/QLCT-GCN</p>
                <p >Ngày cấp: 15/01/2015</p>
                <p >Ngày gia hạn: 14/01/2020</p>
              </div>
              <div className={scss.list}>
                <b >
                  13. Công ty Cổ phần Tập đoàn Liên kết Việt Nam
                </b>
                <p >
                  Địa chỉ: Lô C16/D21 Khu đô thị mới Cầu Giấy, Phố Dịch Vọng
                  Hậu, phường Dịch Vọng Hậu, quận Cầu Giấy, TP. Hà Nội
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 009/QLCT-GCN</p>
                <p >Ngày cấp: 25/12/2014</p>
                <p >Ngày gia hạn: 18/12/2019</p>
              </div>
              <div className={scss.list}>
                <b >14. Công ty TNHH MTV Herbalife Việt Nam </b>
                <p >
                  Địa chỉ: Số 26 đường Trần Cao Vân, Phường 06, Quận 3, TP. Hồ
                  Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 020/QLCT-GCN</p>
                <p >Ngày cấp: 05/02/2015</p>
                <p >Ngày gia hạn : 04/02/2020</p>
              </div>
              <div className={scss.list}>
                <b >15. Công ty TNHH Amway Việt Nam </b>
                <p >
                  Địa chỉ: Số 18 VSIP II-A, đường 30, KCN Việt Nam - Singapore
                  II-A, xã Vĩnh Tân, Thị xã Tân Uyên
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 002/QLCT-GCN</p>
                <p >Ngày cấp: 17/10/2014</p>
                <p >Ngày gia hạn : 06/06/2019</p>
              </div>
              <div className={scss.list}>
                <b >16. Công ty TNHH Homeway Việt Nam </b>
                <p >
                  Địa chỉ: 204/131/12, An Dương Vương, Phường 16, Quận 8, TP. Hồ
                  Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 055/QLCT-GCN</p>
                <p >Ngày cấp: 29/09/2015</p>
                <p >Ngày gia hạn: 25/09/2020</p>
              </div>
              <div className={scss.list}>
                <b >17. Công ty TNHH Thiên sư Việt Nam </b>
                <p >
                  Địa chỉ: Lô XN23, Khu công nghiệp Đại An, Phường Tứ Minh,
                  Thành phố Hải Dương, tỉnh Hải Dương
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 008/QLCT-GCN</p>
                <p >Ngày cấp: 23/12/2014</p>
                <p >Ngày gia hạn : 10/12/2019</p>
              </div>
              <div className={scss.list}>
                <b >18. Công ty TNHH MTV Thương Mại Mỹ Lợi</b>
                <p >
                  Địa chỉ: 345/2 Trần Hưng Đạo, Phường Cầu Kho, Quận 1, TP. Hồ
                  Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 061/QLCT-GCN</p>
                <p >Ngày cấp: 02/12/2015</p>
                <p >Ngày gia hạn: 01/12/2020</p>
              </div>
              <div className={scss.list}>
                <b >19. Công ty TNHH MTV New Image Việt Nam </b>
                <p >
                  Địa chỉ: Tầng 4, số 4 Nguyễn Đình Chiểu, Phường Đao Kao, Quận
                  1, TP. Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 032/QLCT-GCN</p>
                <p >Ngày cấp: 27/02/2014</p>
                <p >Ngày gia hạn : 12/02/2020</p>
              </div>
              <div className={scss.list}>
                <b >
                  20. Công ty TNHH Perfect Global (Việt Nam){" "}
                </b>
                <p >
                  Địa chỉ: Tòa nhà Agrex Tower, số 58, đường Võ Văn Tần, Phường
                  6, Quận 3, TP. Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 021/QLCT-GCN</p>
                <p >Ngày cấp: 10/02/2015</p>
                <p >Ngày gia hạn : 07/02/2020</p>
              </div>
              <div className={scss.list}>
                <b >21. Công ty TNHH Seacret </b>
                <p >
                  Địa chỉ: Tầng 4, Tòa nhà số 227B, Cách Mạng Tháng Tám, Phường
                  12, Quận 10, TP. Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 02/CN-CT</p>
                <p >Ngày cấp: 18/11/2019</p>
                <p  />
              </div>
              <div className={scss.list}>
                <b >22. Công ty TNHH Oriflame Việt Nam </b>
                <p >
                  Địa chỉ: số 100-102 Nguyễn Văn Trỗi, Phường 8, Quận Phú Nhuận,
                  TP. Hồ Chí Minh
                </p>
                <p >GCN đăng ký hoạt động BHĐC: 01/CN-CT</p>
                <p >Ngày cấp: 13/11/2019</p>
                <p  />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "12px" }}>
            <p>
              Như vậy, loại trừ những cái tên trong danh sách trên, các công ty
              đa cấp đều là lừa đảo, các công ty đa cấp trái phép sẽ được
              Sinhvienhelp liên tục cập nhật, hãy truy cập …. để biết thêm thông
              tin. Cuối cùng, nếu có ý kiến đóng góp, hãy gửi mail về địa chỉ …
              Sự đóng góp của các bạn là trong những động lực giúp mình phát
              triển trang web Sinhvienhelp trở nên hữu ích cho cộng đồng đặc
              biệt là những “con mồi béo bở” như các bạn :&gt;
            </p>
          </div>
          <p style={{ marginBottom: "0px" }}>
            Nguồn: Bộ Công Thương - Cục Cạnh tranh và Bảo vệ Người tiêu dùng
          </p>
          <span>Website:http://vcca.gov.vn</span>
        </div>
      </div>
    </div>
  );
};

export default Post2;
