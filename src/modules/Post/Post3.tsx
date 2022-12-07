import React from "react";
import img from "../../img/Rectangle 21.png";
import shape from "../../img/Shapebv.png";
import scss from "./style.module.scss";
import { useNavigate } from "react-router-dom";
const Post3 = () => {
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
             
              className={`${scss.responpost} col-sm-4`}
            >
              <div>
                <h1 className={scss.h1css}>Bài viết khác</h1>
                <div onClick={() => {
                      navigate("/know/post1");
                    }} className={scss.knowlegetext}>
                  <span className={scss.knowlegetextspan}>
                    30 tháng 7, 2022
                  </span>
                  <a style={{ textDecoration: "none" }} className="an">
                    <h1>Tóm tắt:Cách nhận biết một công ty đa cấp</h1>
                  </a>
                  <p >
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
            Đa cấp là gì? Kinh doanh đa cấp chân chính và bất chính
          </h1>
          <p className={scss.responp}>
            “Đa cấp” hay “Kinh doanh đa cấp”, những cụm từ mà khi được nghe
            chúng ta nghĩ ngay “lừa đảo”. Dẫu biết lừa đảo nhưng rất nhiều người
            vẫn trở thành “con mồi béo bở” và rơi vào “cái bẫy” vô hình của “đa
            cấp”, đặc biệt là các bạn sinh viên...
          </p>
          <div className={scss.blogtext}>
            <div className="col-sm-8">
              <b>Đa cấp là gì? Kinh doanh đa cấp là gì?</b>
              <p
                style={{ marginBottom: "30px", marginTop: "30px" }}
                className={scss.pcss}
              >
                Đa cấp được hiểu là một kênh hay một chiến lược phân phối hàng
                hóa thông qua hệ thống gồm nhiều người tham gia và được chia
                thành các cấp, các nhánh khác nhau.
              </p>
              <p style={{ marginBottom: "30px" }} className={scss.pcss}>
                Multi-Level Marketing (MLMs) - Kinh doanh đa cấp, còn biết đến
                là tiếp thị đa cấp, bán hàng đa cấp, cơ bản là một hình thức bán
                hàng, một phương thức phân phối sản phẩm/ hàng hóa đến tay người
                tiêu dùng. Theo khoản 1, điều 3 Nghị định 40/2018/NĐ-CP đã quy
                định: “Kinh doanh theo phương thức đa cấp là hoạt động kinh
                doanh sử dụng mạng lưới người tham gia gồm nhiều cấp, nhiều
                nhánh, trong đó, người tham gia được hưởng hoa hồng, tiền thưởng
                và lợi ích kinh tế khác từ kết quả kinh doanh của mình và của
                những người khác trong mạng lưới.”
              </p>
              <p style={{ marginBottom: "30px" }}>
                Đơn giản, đây là một hình thức bán hàng nhưng có dạng phân phối
                đặc biệt hơn, khi mà hàng hóa trực tiếp từ nhà cung cấp đến tay
                người tiêu dùng qua việc tiếp thị. Ví dụ, thông thường, bạn muốn
                mua thứ gì bạn có thể ra chợ, siêu thị hay tạp hóa để mua. Nhưng
                có người đến giới thiệu sản phẩm cho bạn và bạn mua sản phẩm đó,
                đây chính là bán hàng đa cấp. Qua giá thỏa thuận, sản phẩm thành
                công giao tới tay bạn, người trung gian sẽ nhận được hoa hồng,
                càng nhiều sản phẩm được bán người đó nhận được càng nhiều tiền,
                và công ty thu càng nhiều lợi nhuận.
              </p>
              <p style={{ marginBottom: "30px" }}>
                Những người làm trung gian bán sản phẩm còn được gọi nhà phân
                phối, mỗi cá thể trong hệ thống bán hàng trên đều được gọi là
                một nhà phân phối. Ban đầu chỉ có vài nhà phân phối, nhưng dần
                dà mỗi người lại tuyển vài ba người trở thành nhân viên cấp
                dưới, những người cấp dưới họ lại tiếp tục tuyển thêm người, cứ
                như vậy số lượng nhà phân phối càng ngày càng tăng theo cấp số
                nhân, và gọi là “đa cấp” cũng vì vậy. Nhà phân phối ở cấp càng
                cao thì được hưởng mức hoa hồng càng nhiều, đồng thời họ còn
                được hưởng thêm hoa hồng từ các đơn hàng bán được của những nhà
                phân phối cấp dưới. Vậy, không bán được hàng kiếm đâu hoa hồng,
                kiếm đâu lãi cho công ty, và làm gì có chuyện “ngồi mát ăn bát
                vàng”, “đầu tư càng nhiều thu lợi càng khủng” như các công ty đa
                cấp lừa đảo đã rêu rao để dụ “con mồi” vào “bẫy”.
              </p>
              <p style={{ marginBottom: "30px" }}>
                Chốt lại, bán hàng đa cấp là một hình thức kinh doanh đã được
                các nước trên thế giới và Việt Nam thông qua và cho phép hoạt
                động chính thức. **Nhưng**, vì mục đích vụ lợi cá nhân, hình
                thức kinh doanh này bị biến tướng với nhiều hình thái khác nhau
                và ngày nay, nhắc đến “đa cấp” nghĩ ngay “lừa đảo”.
              </p>
              <b>Thế nào là kinh doanh đa cấp chân chính?</b>
              <p style={{ marginTop: "10px" }}>
                Đa cấp bản chất không xấu, nhưng ở Việt Nam, đa cấp bị biến
                tướng trở thành vấn nạn lừa đảo đáng báo động. Xem Nghị định
                40/2018/NĐ-CP về Quản lý hoạt động kinh doanh theo phương thức
                đa cấp để hiểu thêm thông tin về bán hàng đa cấp. Tóm gọn lại,
                một doanh nghiệp bán hàng đa cấp chân chính, phải thực hiện đúng
                chức năng bán hàng, đáp ứng các tiêu chí cơ bản như:
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  <b>Có sản phẩm tốt</b>: Sản phẩm tốt là sản phẩm đảm bảo chất
                  lượng, mang đến giá trị sử dụng thực sự cho người tiêu dùng,
                  đặc biệt giá cả phù hợp với giá trị của sản phẩm. ;
                </li>
                <li>
                  <b>Đào tạo nhà phân phối tốt</b>: Đào tạo nhà phân phối tốt:
                  Nhà phân phối là những người giúp doanh nghiệp giới thiệu và
                  bán hàng cho người tiêu dùng. Do đó, muốn bán hàng hiệu quả,
                  phải đào tạo kỹ càng cho nhà phân phối để họ hiểu về sản phẩm
                  và có kỹ năng bán hàng tốt.
                </li>
                <li>
                  <b>Bán hàng là chính yếu, tuyển dụng là thứ yếu</b>: Một công
                  ty bán hàng đa cấp chân chính trước hết phải là công ty thực
                  hiện việc bán hàng một cách thực sự. Bán hàng là hoạt động
                  chính, mục tiêu cuối cùng là bán được nhiều hàng nhất để thu
                  lợi nhuận.
                </li>
              </ul>
              <p style={{ marginBottom: "25px" }}>
                Việc tuyển dụng cũng chỉ nhằm phục vụ cho mục tiêu bán hàng.
                Doanh nghiệp bán hàng đa cấp chân chính phải tồn tại dựa trên
                doanh thu từ hoạt động bán hàng, chứ không phải “ăn chặn”, “lừa
                lọc” từ những người được tuyển dụng.
              </p>
              <p>
                Chắc các bạn đã phần nào nắm rõ bản chất chân chính của “đa cấp”
                hay “kinh doanh đa cấp” là gì. Thực tế, tính đến năm 2022, chỉ
                có 22 doanh nghiệp bán hàng đa cấp được cấp phép nhưng đa cấp
                lừa đảo vẫn mọc lên như nấm và rất ít bị “sờ gáy”.
              </p>
              <b>Kinh doanh đa cấp bất chính - lừa đảo</b>
              <p style={{ marginTop: "20px" }}>
                Hiểu nôm na về đa cấp chân chính đã đủ, đây mới là nội dung
                chính mà Sinhvienhelp hướng tới, về đa cấp mà chúng ta đều biết,
                đa cấp là lừa đảo. Như trên đề cập, bản chất vốn có của bán hàng
                đa cấp là không xấu, nhưng chẳng biết tự bao giờ, đa cấp đã bị
                mặc định là lừa đảo, phạm pháp. Đã là lừa đảo thì phải “chạy
                ngay đi” chứ đứng đó tự chui vô tròng thì “tiền mất tật mang”
                chẳng hay.
              </p>
              <p style={{ marginBottom: "20px" }}>
                “Bạn có muốn được giàu sang không? Bạn học để làm gì?”
              </p>
              <p style={{ marginBottom: "20px" }}>
                “Nếu bạn không tự xây ước mơ cho mình, người khác sẽ thuê bạn
                xây ước mơ cho họ”
              </p>
              <p style={{ marginBottom: "20px" }}>
                “Tôi tin là bạn sẽ thành công! Bạn xứng đáng như thế vì bạn có
                thể bất chấp tất cả để thành công”
              </p>
              <p style={{ marginBottom: "20px" }}>
                “Bây giờ bạn là ai không quan trọng! Quan trọng là 5 năm sau bạn
                là ai!!!”
              </p>
              <p style={{ marginBottom: "20px" }}>
                “Chúng tôi không ép buộc các bạn tham gia! Nếu các bạn sợ thành
                công, sợ giàu có, thì đừng tham gia!”...vv
              </p>
              <p style={{ marginTop: "15px" }}>
                Vâng, các bạn quen chứ, rất chuyên nghiệp phải không ạ, kịch bản
                muôn thuở của các hội nhóm đa cấp, nghe viển vông nhưng mà rất
                thuyết phục. Mọi sự tệ hại cũng đều từ lòng tham của con người
                mà ra, họ thấu hiểu tâm lý của các bạn, họ vẽ ra viễn cảnh tươi
                đẹp “không làm mà vẫn có ăn”, “ném tiền qua cửa sổ”, gợi mở về
                những câu chuyện "người thật việc thật", các "thiên tài khởi
                nghiệp", làm giàu nhanh chóng, không cần làm gì mà mỗi tháng thu
                nhập hàng chục, hàng trăm triệu… Và “bùm”, những chú cừu non sa
                vào lưới lúc nào chẳng hay, bạn đóng tiền cho họ, tiêu tốn thời
                gian cho họ, và bạn thu lại được gì? Ồ bạn chợt nhận ra mình bị
                lừa đảo, bạn muốn rút lui nhưng chẳng những không lấy lại được
                tiền mà ngược lại mắc thêm nợ, thậm chí còn bị đe dọa cùng sự
                biến mất đầy bí ẩn của các công ty đa cấp. Các bạn sinh viên à,
                các bạn vừa rời khỏi vòng tay gia đình, là những tấm chiếu chưa
                trải, đừng vì tò mò hay ước muốn làm giàu nhanh chóng để bản
                thân sa lưới, hãy tỉnh táo trước đa cấp, đa cấp đáng sợ hơn “red
                flag” hay đối phương “ghost” bạn trong một mối quan hệ rất rất
                nhiều.
              </p>
              <p>
                Một số hoạt động lừa đảo dễ thấy của các công ty đa cấp như:
              </p>
              <ul>
                <li>
                  <b>Sản phẩm không tốt</b>: Là sản phẩm kém chất lượng, không
                  có giá trị sử dụng nhưng lại độn giá rất cao. Thậm chí là sản
                  phẩm ảo, không thể nhìn thấy hoặc không tồn tại (điển hình các
                  sàn forex, tiền ảo).
                </li>
                <li>
                  <b>Tuyển dụng là hoạt động chính</b>: Sản phẩm đã kém chất
                  lượng hoặc không có thực, thì sao bán được. Vậy nên công ty
                  mới phải đi “lùa gà”, dùng lời ngon tiếng ngọt dụ dỗ, lôi kéo,
                  đánh vào tâm lý mong muốn làm giàu của “con mồi”, áp dụng mô
                  hình tháp ảo, kiếm tiền từ việc kêu gọi đầu tư, trích hoa hồng
                  từ những khoản đóng góp của những người gia nhập, chứ không
                  chú trọng doanh thu bán hàng. Và điều hiển nhiên, không tuyển
                  dụng được đồng nghĩa công ty phá sản.
                </li>
                <li>
                  <b>Hứa hẹn những khoản lợi nhuận hấp dẫn</b>: “Đầu tư càng
                  nhiều thu lợi càng khủng”, “làm giàu không khó”, chỉ cần đóng
                  xxx đồng sẽ thu lại lợi nhuận y% trong thời gian ngắn, mời
                  càng nhiều người tham gia càng thu được nhiều hoa hồng… Các
                  diễn viên chuyên nghiệp của công ty đa cấp đã vẽ ra một thiên
                  đường thu nhập trong mơ, hứa hẹn chân thành về tương lai giàu
                  có để dẫn dụ, lôi kéo “con mồi” sa “bẫy”.
                </li>
                <li>
                  <b>Người tham gia phải đóng tiền</b>: Sau khi “lùa gà” thành
                  công, người tham gia trở thành cấp dưới của họ và phải đóng
                  một khoản tiền với lý do khoản này dùng để mua sản phẩm, phí
                  hoạt động, tiền đặt cọc, hay đầu tư để sinh lời … nhưng thực
                  chất, tiền thu từ người cấp dưới sẽ là thu nhập của người cấp
                  trên.
                </li>
              </ul>
              <p>
                Bài viết đến đây là kết thúc, tuy hơi dài nhưng rất cảm ơn các
                bạn đã chịu khó đọc đến cuối cùng, và chúc mừng các bạn đã tiếp
                thu thêm kiến thức về đa cấp một cách chi tiết và đầy đủ nhất.
                Mọi thắc mắc và sự đóng góp xin gửi về …
              </p>
              <p>
                P/S: Mình muốn nói với các bạn một điều: đọc Luật, hãy đọc Luật,
                đọc để “sáng mắt ra”, đọc để có cái nhìn đa chiều hơn về đa cấp.
                Chúng ta có thể không đánh đồng mọi công ty đa cấp đều xấu nhưng
                cái xấu dễ bề bị lên án và đánh giá, cái bản chất vốn có tốt đẹp
                bị dìm xuống và quên lãng. Mọi người thường nhìn vào bề nổi,
                nhìn vào sự đánh giá của xã hội, và gắn mác “lừa đảo” cho “đa
                cấp”. Nên đừng ai thắc mắc có đa cấp chính thống mà tại sao nghe
                đến “đa cấp” là phải né lẹ nha!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post3;
