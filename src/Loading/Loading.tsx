import React from 'react'
import { Space, Spin } from "antd";
import scss from "./style.module.scss"
const Loading = () => {
  return (
    <div className={scss.example}>
    <Spin size="large" />
  </div>
  )
}

export default Loading