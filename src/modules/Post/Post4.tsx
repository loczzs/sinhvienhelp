import React from "react";
import img from "../../img/Rectangle 23.png";
import shape from "../../img/Shapebv.png";
import scss from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const Post4 = () => {
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
          <span
            style={{ marginBottom: "12px" }}
            className={scss.knowlegetextspan}
          >
            30 tháng 7, 2022
          </span>
          <h1 style={{ marginBottom: "24px" }} className={scss.h1css}>
            Hậu quả của sinh viên khi sập bẫy đa cấp
          </h1>
          <p className={scss.responp}>
            “Tân sinh viên, những tấm chiếu chưa trải, cất cánh bay thoát ly sự
            bảo hộ của gia đình, mang trong mình ước mơ, nhiệt huyết xây dựng
            chân trời cho bản thân, vô tình rơi vào “tầm ngắm” của các đối tượng
            đa cấp và sập bẫy lúc nào chẳng hay…
          </p>
          <div className={scss.blogtext}>
            <div className="col-sm-8">
              <b>Tại sao sinh viên “sập bẫy” đa cấp? </b>
              <p
                style={{ marginBottom: 30, marginTop: 10 }}
                className={scss.pcss}
              >
                Một thực tế chúng ta phải thừa nhận là đa số các sinh viên luôn
                là đối tượng đông đảo được các công ty đa cấp để mắt tới. Vâng,
                chính các bạn, là những “con mồi” của những “kẻ đi săn” đầy
                chiêu trò, thủ đoạn. Sau đây, mình xin chỉ ra vài lí do khiến
                sinh viên các bạn trở thành “tầm ngắm” của các đối tượng đa cấp:
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  <b>Tâm lý làm giàu</b>: Tiền có thể không mua được hạnh phúc
                  nhưng nếu không có tiền thì sống sao? Các bạn sinh viên, điển
                  hình phần lớn ra thành phố trọ học, vì mong muốn kiếm được
                  thêm thu nhập, trang trải phần nào chi phí thuê trọ, học tập,
                  ăn uống nên nhu cầu tìm kiếm việc làm là điều hiển nhiên. Mặt
                  khác mức sống ở thành phố khá cao, chi phí đắt đỏ, các bạn
                  muốn mua gì, chi gì cũng phải tính toán, và các bạn bắt đầu
                  ước mơ về tương lai giàu sang, thôi thúc bản thân kiếm tiền
                  mau chóng.
                </li>
                <li>
                  <b>Nhẹ dạ cả tin, thiếu hiểu biết</b>: Vẫn là câu nói cũ, sinh
                  viên là những tấm chiếu chưa trải, là những chú cừu ngây thơ
                  rơi vào bầy sói. Các bạn lần đầu rời xa vòng tay gia đình, bắt
                  đầu trải nghiệm một cuộc sống mới, đối diện những cám dỗ của
                  thành phố phồn hoa và dễ dàng vô tình bước chân vào “bẫy”.
                  Nóng lòng muốn kiếm tiền để hưởng thụ cuộc sống, muốn đi làm
                  để kiếm thêm kinh nghiệm, thêm thói tò mò thích khám phá,
                  nhưng lại thiếu kiến thức, thiếu hiểu biết, nhẹ dạ cả tin vào
                  những lời có “cánh”, nên sinh viên dễ lừa gạt cũng vì vậy.
                </li>
                <li>
                  <b>Áp lực đồng trang lứa</b>: Phải khẳng định rằng, chúng ta
                  luôn nhìn thế giới bên ngoài để đánh giá và định hướng cho
                  cuộc sống bản thân. Các bạn sinh viên cũng vậy thôi, các bạn
                  thấy bạn bè mình làm gì, mặc gì, ăn chơi ra sao,... các bạn
                  thấy mình tụt hậu, lạc quẻ, và bắt đầu có ham muốn mau chóng
                  vươn lên, thể hiện bản thân. OK, đó có thể là điều tốt nhưng
                  cái sai ở đây là các bạn không kìm hãm được cái “tham” của bản
                  thân, để nó vượt quá giới hạn, các bạn trở nên “ngu muội”, dễ
                  dàng bị mờ mắt bởi những cái lợi trước mắt, không quan tâm đến
                  hệ lụy sau này
                </li>
              </ul>
              <p style={{ marginBottom: "25px" }}>
                “Mật ngọt chết ruồi”, các công ty đa cấp vô cùng thấu hiểu tâm
                lý các bạn, họ cho các bạn nếm thử những “miếng bánh” thơm ngon,
                dụ dỗ các bạn sa lưới. Núp bóng dưới các hình thức đa cấp bán
                hàng hóa, đa cấp dự án, đa cấp tiền tệ, đa cấp khóa học - đào
                tạo,... thực hiện tuyển dụng trên mạng xã hội với mức lương
                khủng, nhiều quyền lợi hấp dẫn, làm ít hưởng nhiều, các bạn dễ
                dàng bị dụ dỗ, lôi kéo làm việc cho chúng
              </p>
              <b>Hậu quả của sinh viên khi sập bẫy đa cấp</b>
              <p style={{ marginTop: "20px" }}>
                “Con mồi” đã sập “bẫy”, các công ty đa cấp “săn mồi” thành công,
                giờ đây “kẻ khóc người cười”, tiêu tốn công sức tiền bạc cho đa
                cấp các bạn nhận được gì?
              </p>
              <ul>
                <li>
                  <b>Nợ nần</b>: Dù đa cấp núp bóng dưới hình thức nào, người
                  tham gia vẫn phải “cống” tiền cho chúng. “Đầu tư càng nhiều
                  thu lợi càng khủng”, đánh vào tâm lý ngồi không cũng được
                  hưởng lộc, chúng dụ dỗ các bạn đặt cọc, mua hàng của chúng,
                  đầu tư dự án để tích lời, và đến lúc các bạn muốn rút lui thì
                  vốn không còn, lời không có cuối cùng còn phải gánh những
                  khoản nợ không rõ tên. Thậm chí chúng còn giữ chân các bạn
                  bằng cách động viên: “Em đã bỏ số vốn lớn vậy rồi mà định rút
                  lui hay sao?”, rồi nói ngon ngọt khiến các bạn cầm cố xe máy,
                  laptop, điện thoại… hoặc vay tiền lãi suất cao để có tiền đầu
                  tư đa cấp… Nợ chất thêm nợ, người đau khổ cuối cùng là chính
                  các bạn mà thôi!!!
                </li>
                <li>
                  <b>Bỏ học</b>: Những title “Hàng loạt sinh viên mất tích vì…”
                  cũng không còn xa lạ, vì ham muốn kiếm tiền, tiêu tốn thời
                  gian cho đa cấp, các bạn sinh viên học tập sa sút, rớt môn, nợ
                  môn... Lại thêm tác động tâm lý, những lời khích tướng như:
                  “Đại học để làm gì, xong rồi lương cũng ba cọc ba đồng, hãy
                  học cách làm giàu ngay từ bây giờ”, “Sau bốn năm đại học cũng
                  thất nghiệp”... khiến các bạn kích động, thôi thúc bỏ học để
                  đi làm kiếm tiền.
                </li>
                <li>
                  <b>Áp lực tâm lý</b>: Sau khi “sập bẫy”, các bạn mới biết
                  những lời hoa mỹ bấy lâu chỉ là lừa đảo, nào có chuyện “ngồi
                  mát ăn bát vàng”, để kiếm lại tiền bạn phải đi mời gọi, chèo
                  kéo, dụ dỗ khách hàng mua những sản phẩm không nhãn mác, nguồn
                  gốc, xuất xứ không rõ ràng mà giá cả “thổi phồng” cao ngất
                  ngưởng, đồng thời tiếp nối công việc của nhà tuyển dụng lôi
                  kéo càng nhiều “nạn nhân” càng tốt. Không đạt được chỉ tiêu
                  các bạn hoang mang, lo lắng, bỏ bê việc học, và khi các bạn
                  nhận ra lừa đảo và muốn rút lui thì đã quá trễ, các bạn chẳng
                  còn gì ngoài tiền mất tật mang, nợ nần chồng chất, thất vọng
                  tràn trề, học hành sa sút, thậm chí bị bạn bè, người thân “từ
                  mặt” vì biết bán hàng đa cấp, hệ quả đâm ra stress, có người
                  đã từng tự tử nhưng may mắn cấp cứu kịp thời…
                </li>
                <li>
                  <b>Vô tình trở thành kẻ lừa đảo</b>: Một khi tham gia vào hệ
                  thống đa cấp thì rất khó để dứt ra được, thành ra “đâm lao thì
                  phải theo lao”, và từ lúc nào bản thân các bạn trở thành kẻ
                  lừa đảo tiếp tục đi lừa người khác thế chỗ, tiếp tay cho mạng
                  lưới đa cấp nhân rộng. Nguy hiểm hơn, khi bị đòi nợ, xiết nợ
                  có bạn sẽ nghĩ quẩn hoặc làm liều và kéo theo các nạn nhân là
                  chính những người thân, gia đình của các bạn.
                </li>
                <li>
                  <b>Tốn thời gian</b> : Việc bạn đã bỏ học đã đành, đành này
                  lại bỏ thời gian vào các công ty đa cấp thì thứ bạn nhận được
                  là gì ? trong khi nếu bạn cố gắng vs động lực như thế ở các
                  công ty bình thường, ko ít thì nhiều cũng lên làm lead rồi :)
                </li>
              </ul>
              <p>
                Cái gọi là lừa đảo nào có phân biệt tốt xấu, đáng sợ hơn là mặc
                dù biết đó là hành vi lừa đảo mà vẫn đâm đầu lao vào. Hi vọng
                những điều mình vừa nêu trên sẽ là hồi chuông cảnh tỉnh cho các
                bạn, đừng vì tham vọng làm giàu của bản thân mà bước chân vào
                chiếc “bẫy” khôn lường của đa cấp để dẫn đến những hệ lụy nghiêm
                trọng cho bản thân, gia đình và xã hội!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post4;
