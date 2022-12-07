import React from "react";
import img from "../../img/Rectangle 24.png";
import shape from "../../img/Shapebv.png";
import scss from "./style.module.scss";
import { useNavigate } from "react-router-dom";
const Post5 = () => {
  const navigate = useNavigate();
  return (
    <div>
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

      <div className={scss.blog}>
        <div className={scss.container}>
          <span style={{ marginBottom: "12px"}} className={scss.knowlegetextspan}>
            30 tháng 7, 2022
          </span>
          <h1 style={{ marginBottom: "24px" }} className={scss.h1css}>
            Hậu quả của sinh viên khi sập bẫy đa cấp
          </h1>
          <p className={scss.responp}>
            Sau bao nhiêu lâu ấp ủ dự án thì “mình” đã có thể cho ra một trang
            web với mục đích giúp đỡ các bạn sinh viên, đặc biệt là các bạn sinh
            viên năm nhất, mới bước chân lên chốn xa lạ này và cho bạn đấy, ừm
            chính bạn đấy :)
          </p>
          <div className={scss.blogtext}>
            <div className="col-sm-8">
              <b>Lý Do </b>
              <p style={{ marginBottom: 30, marginTop: 12 }} className="pcss">
                Lý do thì mình muốn giúp đỡ các bạn, các bạn giàu nứt vách thì
                mình không nói tới nha, mình chỉ đề cập đến các bạn nhà không
                mấy khá giả hoặc khó khăn khi đi tìm việc làm thêm ở chốn sài
                thành này. Mình biết các bạn muốn đi tìm một công việc để phụ
                giúp gia đình, hoặc không thì có thể tiêu xài gì thì mình chịu
                :v . Nhưng để tránh các công ty đa cấp làm mất tiền, mất thời
                gian của các bạn nên mình làm hẳn 1 trang web về công ty đa cấp
                này, xịn chưa hehe :D
              </p>
              <b>Tại sao làm hẳn trang chi cho mất công vậy nhỉ ?</b>
              <p style={{ marginBottom: 25 }}>
                Tại mình ngựa các bạn ạ :( . Các bạn có thể tìm thông tin các
                công ty đó trên facebook, các group này nọ, nhưng mình nghĩ sẽ
                tốn thời gian tìm kiếm, nên mình nghĩ đến việc làm hẵn 1 trang
                cho tìm kiếm dễ hơn, muốn tìm xem công ty đó có phải đa cấp
                không thì biết tìm ở đâu r đấy :v
              </p>
              <p style={{ marginTop: 20 }}>
                Các thông tin đều là mình tổng hợp lại, thu thập và đóng góp từ
                các bạn sinh viên khác nữa, chỉ dễ dàng tìm kiếm thôi, nên mọi
                thông tin mình không đảm bảo 100% , các bạn có thể tin hoặc
                không tin không sao cả, nhưng nếu bạn tin công ty đó thì nên cân
                nhắc thật kỹ có phải công ty đa cấp hay không? Không thì phiền
                phức lắm....hè
              </p>
              <b>Cảm ơn</b>
              <p>
                Thấy chữ “mình” ở phần mô tả khum? mình chém đấy :v . Thật ra
                mình không kham nổi hẳn 1 trang như này đâu, nhờ có vài người
                bạn giúp đỡ mình mới hoàn thành được trang web này. Thật sự chân
                thành cảm ơn những người bạn đã giúp đỡ mình. Các bạn cũng có
                thể giúp đỡ mình bằng cách giới thiệu web này cho các bạn của
                bạn, để né đa cấp thôi chứ gì đâu :v và nếu các bạn biết công ty
                đa cấp nào mà chưa có trên danh sách thì mạnh dạn gửi yêu cầu
                cho mình nha, mình rất cảm ơn đóng góp của bạn cho cộng đồng
                sinh viên, biết đâu điều bạn chia sẻ sẽ giúp chính bạn của bạn
                thì sao ^^
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post5;
