import React from 'react'
import scss from "./scss/style.module.scss"

const DieuKhoan = () => {
  return (
    <section>
  <h1 className={scss.headline1}>Điều khoản</h1>
  <div className={scss.container}>
    <div style={{marginBottom: 48}}> <b className={scss.title}> Điều khoản sử dụng - Miễn trừ trách nhiệm </b></div>
    <div style={{padding: '0px 24px'}}>
      <p className={scss.pcss}>
        1. SinhVienHelp là website để người dùng chia sẻ kinh nghiệm, trải
        nghiệm làm việc ở các công ty
      </p>
      <p className={scss.pcss}>
        2. Toàn bộ thông tin đăng tải trên Sinhvienhelp.com là do người dùng
        cung cấp. Người dùng đăng thông tin lên Sinhvienhelp.com chịu trách
        nhiệm hoàn toàn về tính xác thực của thông tin đó.
      </p>
      <p className={scss.pcss}>3. Chúng tôi không có trách nhiệm quản lý, chỉnh sửa hoặc xóa bỏ nội dung đăng tải bởi người dùng</p>
    </div>
  </div>
</section>

  )
}

export default DieuKhoan