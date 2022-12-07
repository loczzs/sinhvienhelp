import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import scss from "../scss/stylehead.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { AppDispatch, RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { showModal, closeModal } from "../MainSlices/MainSlices";
import { useNavigate } from "react-router-dom";

const Mainlayout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { radius } = useSelector((state: RootState) => state.main);
  console.log(radius);
  const handleCLose = () => {
    dispatch(closeModal(false));
  };
  
 
  return (
    <Layout style={{ position: "relative" }} className="bg-white ">
      {radius ? (
        <div className={scss.modalfade}>
         
        </div>
      ) : (
        ""
      )}
      <Layout.Header
        className="bg-white"
        style={{ height: "100%", padding: "0px", lineHeight: "0" }}
      >
        <Header />
      </Layout.Header>
      <Layout.Content>
        {/* Nơi chứa component được định nghĩa trong router */}

        {/* component Outlet sẽ là nơi render ra các children route  */}
        <Outlet />
      </Layout.Content>
      <Layout.Footer className="p-0 bg-white">
        {/* <h1>My Footer</h1> */}
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default Mainlayout;
