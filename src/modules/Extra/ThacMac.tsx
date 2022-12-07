import React from "react";
import scss from "./scss/style.module.scss";
const ThacMac = () => {
  return (
    <section style={{marginTop:"80px"}}>
      <h1 className={scss.headline1}>Thắc mắc</h1>
      <div className={scss.container}>
        <b className={scss.bcss}>
          1. Tìm kiếm không có kết quả ở trên Sinhvienhelp?
        </b>
        <p className={scss.pcss}>
          Nếu không có kết quả có thể do chưa có người đăng thông tin về công ty
          đó, hoặc đó không phải là công ty ĐC
        </p>
        <b className={scss.bcss}>2. Các thông tin chắc chắn chính xác không ?</b>
        <p className={scss.pcss}>
          Người đăng review chịu trách nhiệm về tính xác thực của nội dung mình
          đăng lên.
        </p>
        <p className={scss.pcss} />
        <p className={scss.pcss}>
          Nói đơn giản là bạn có thể tin, không tin cũng không sao . Chúng mình
          không thể kiểm chứng tính xác thực của toàn bộ review do người dùng
          được. Nên mọi thông tin chỉ mang tính tham khảo
        </p>
        <p />
      </div>
    </section>
  );
};

export default ThacMac;
