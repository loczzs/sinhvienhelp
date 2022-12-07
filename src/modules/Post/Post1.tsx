import React from "react";
import scss from "./style.module.scss";
import img from "../../img/Rectangle 332.png";
import shape from "../../img/Shapebv.png";
import { useNavigate } from "react-router-dom";
const Post1: React.FC = () => {
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

      <div style={{ marginBottom: 12 }} className="title">
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
                <div className={scss.knowlegetext}>
                  <h1>Bài viết khác</h1>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.blog}>
        <div className={scss.container}>
          <span
            style={{ marginBottom: "20px" }}
            className={scss.knowlegetextspan}
          >
            30 tháng 7, 2022
          </span>
          <h1 style={{ marginBottom: "24px" }} className={scss.h1css}>
            Cách nhận biết một công ty đa cấp
          </h1>
          <div className="blog-text">
            <div className="col-sm-8 ">
              <p className={scss.pcss}>
                Đa cấp có lẽ là một từ đã quen thuộc và là nỗi sợ của mỗi sinh
                viên, tuy nhiên “mật ngọt chết ruồi” đôi khi chúng ta nghe những
                lời mời gọi, những từ ngữ giải thích từ những “chuyên gia” đa
                cấp:
              </p>
              <p className={scss.pcss}>
                - Đa cấp có đa cấp this đa cấp that - Công ty anh/chị là đa cấp
                chính thống, em làm gì thấy công ty đa cấp nào mà thuê mặt bằng
                đường ABCXYZ không ? - Làm thời gian linh hoạt làm vài tiếng mỗi
                ngày, cam kết thu nhập xx.000.000VND - Không cần bằng cấp lương
                X.000.000VND, được đào tạo
              </p>
              <p>
                Đối với các bạn sinh viên thiếu kiến thức thì có thể sẽ dính
                ngay, tác hại thì tùy mức độ, có người thì mất vài triệu có
                người thì nghe theo lời dụ dỗ, lôi kéo người thân tham gia vào,
                có người thì bỏ cả đại học để đi làm việc cho chúng.
              </p>
              <p>
                tuy nhiên, đa cấp thì cũng được nhà nước công nhận xem tại đây
                và công ty đa cấp chính thống đó là *mwa*, nhưng đối với mình
                khi lập web này ra mình đều quy về 1 loại đa cấp duy nhất, đa
                cấp là đa cấp, nó chỉ tốn thời gian và tiền bạc của các bạn.
              </p>
              <p>
                Sau đây là một vài cách cá nhân mình biết để nhận biết có phải
                đa cấp hay không? Dài dòng đã đủ, mình vào vấn đề.
              </p>
              <li>
                Liên hệ thông qua tin nhắn: Đa số HR không rãnh để nhắn tin cho
                các bạn thông qua zalo hay facebook, thậm chí là telegram. Họ
                không bao giờ liên lạc trực tiếp thông qua facebook của bạn để
                mời gọi ( vì họ biết bạn làm được gì đâu, trừ khi bạn làm trong
                các ngành thiết kế và bạn đã post một số sản phẩm nhất định)
              </li>
              <p style={{ marginTop: "10px" }}>
                <svg
                style={{marginBottom:"2px"}}
                  className="me-1 "
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="black"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 4L21 12L13 20"
                    stroke="black"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Nền tảng đáng tin cậy khi nhận việc chỉ có <b> Linked in.</b>.
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  Việc nhẹ lương cao: làm gì có việc j nhẹ lương cao đâu các
                  bạn, nếu có thì đứa khác nó ăn hết r và nếu có thì họ mọi dòng
                  họ, họ hàng làm cho giàu cả nhà, làm gì đến lượt các bạn, luôn
                  nhớ -
                  <b>
                    Số tiền bạn nhận được tưng ứng với công sức, chất xám bạn bỏ
                    ra
                  </b>
                </li>
                <li>
                  Không cần bằng cấp: thế bạn bỏ thời gian ra học làm gì? Các
                  “bạn” đa cấp thường mời gọi là làm marketing, chứ thực chất là
                  sale và mời gọi người khác. Một công ty mà cả phòng đều là
                  marketer thì hoạt động, duy trì như nào? không HR thì ai kết
                  lương cho mấy bạn?
                </li>
                <li>
                  Bỏ tiền túi: không có tiền mới đi làm, mà còn bắt đóng tiền?
                  các công ty không có quy định đóng bất cứ khoản phí nào nên
                  các bạn lưu ý. Tuy nhiên có những công ty đa cấp không bắt bạn
                  đóng phí, chỉ cần bạn làm việc cho họ, và mời gọi người khác.
                </li>
                <li>
                  “Môi trường làm việc năng động”: nguyên đám ngồi trong 1 bàn
                  để “làm việc” lâu lâu thì tung hô nhau “- mọi người ơi, em vừa
                  bán được đơn hàng 3tr, - oh, giỏi thế *vỗ tay*”
                </li>
                <li>
                  Show các cuộc chơi: Nó đó, thay vì tập trung vào “em làm được
                  gì cho cty chúng tôi” thì họ show ra các cuộc ăn chơi, đi du
                  lịch để dễ đem bạn vào tròng hơn.
                </li>
                <li>
                  Dạy đi đứng, bắt tay: Làm ơn, không ai rãnh dạy này đâu. Kỹ
                  năng mềm chỉ có khi bạn trải rách cái chiếu hoặc tự học và rèn
                  luyện, cty bình thường chỉ chú trọng quan tâm bạn làm được gì
                  thôi, bạn biết lý do tại sao mấy ông anh IT thường xuề xòa,
                  mắt gấu trúc nhưng vẫn lương nghìn đô không?
                </li>
                <li>
                  Hỏi thăm gia đình: tui đi làm hay gia đình tui đi làm? Có gì
                  để mà nói đâu, nên dạy bắt tay với đi đứng, hỏi thăm chuyện
                  gia đình cho xong buổi đầu buổi 2 ấy mà
                </li>
                <li>
                  Giới thiệu bạn bè: một vị trí thì cần vài người làm đã đủ, tại
                  sao lại giới thiệu thêm? thực chất ở ngoài các bạn còn phải đi
                  “xin” việc, trải qua các vòng CV, Phỏng vấn, có thể có thêm
                  Test để pass vào.
                </li>
                <li>
                  Nhân viên mời gọi: trừ khi bạn đã biết ng bạn này rất rõ, chứ
                  không chừng có thể đa cấp, chứ đa phần là HR mời gọi, hoặc các
                  headhunter
                </li>
                <li>
                  Vào công ty dễ dàng: nếu vào dễ thế thì không đến lượt bạn
                  đâu,như đã nói ở trên, bạn cần bảng CV thật đẹp, hoặc trừ khi
                  bạn thủ khoa các trường đại học thì họ tự mời bạn. Hiện tại
                  nhu cầu công việc rất cao, bạn không cố gắng để làm đẹp CV để
                  vào phỏng vấn thì chỉ có cái nịt.
                </li>
              </ul>
              <p>
                Sinh viên là những con cừu non chưa trải chiếu, nhất là các bạn
                năm nhất mới lên, đừng vì những lời mời lương cao các kiểu mà
                chạy theo, tốn công 12 năm học
              </p>
              <p>Bonus: Các câu hỏi nên tự hỏi khi nhận được lời mời:</p>
              <ul>
                <li>
                  Tại sao lại mời mình? - Mình đi học r về, ăn ở không thì có gì
                  để biết tới mình mà mời
                </li>
                <li>
                  Lương cao nhưng có yêu cầu dễ quá không ? - Dễ thì chắc gì tới
                  lượt mình
                </li>
                <li>
                  Làm công việc này có giúp ích được gì không, qua cty khác thì
                  họ có nhận mình không? - Chỉ đi rủ rê, mời gọi người khác, thì
                  qua cty khác sẽ họ đồng ý mình sao ?
                </li>
              </ul>
              <p>
                Bonus: Các điều nên làm khi nhận được, cái bonus cuối cùng rồi,
                ráng đọc đi
              </p>
              <ul>
                <li>
                  Check mã số thuế : các cty đa cấp, rất khó bạn tìm được MST,
                  kiểm tra kỹ tên người đại diện
                </li>
                <li>
                  Môi trường làm việc như thế nào: như ở trên thì bạn xác định,
                  cty bình thường tuyển người làm các việc chuyên môn của họ,
                  nên đôi khi công việc rất chán.
                </li>
                <li>Check công ty có trên web Sinhvienhelp không</li>
              </ul>
              <p>
                Hết rồi! Tuy hơi dài nhưng sẽ có bài tóm tắt lại, nếu bạn có ý
                kiến nào muốn đóng góp thì liên hệ mình thông qua abc@abc.com.
                Mọi đóng góp của bạn đều rất hoan nghênh vì biết đâu nó sẽ giúp
                đỡ được chính bạn bè của bạn thì sao ^^
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post1;
