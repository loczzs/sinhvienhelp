import React from 'react'
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from '../header/Header';
import Footer from '../footer/Footer';
const Mainlayout = () => {
  return (
    <Layout>
      <Layout.Header className="bg-white "  >
        <Header />
      </Layout.Header>
      <Layout.Content>
        {/* Nơi chứa component được định nghĩa trong router */}

        {/* component Outlet sẽ là nơi render ra các children route  */}
        <Outlet />
      </Layout.Content>
      <Layout.Footer>
        {/* <h1>My Footer</h1> */}
        <Footer/>
      </Layout.Footer>
    </Layout>
  )
}

export default Mainlayout