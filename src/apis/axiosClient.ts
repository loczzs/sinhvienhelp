import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
  baseURL: "https://62da614a9eedb699636cab62.mockapi.io/cty",
});
axiosClient.interceptors.response.use(
  // thành công
  (response) => {
    // ta có thể thay đổi respone trước khi respone đc trả ra cho nơi gọi request,
    // respone.data : format của axios
    // .content: format của cybersoft
    return response.data;
  },
  // thất bại
  (error: AxiosError) => {
    //ta có thể thay đổi error trước khi error đc trả ra cho nơi gọi request
    Promise.reject(error.response?.data );
  }
);
export default axiosClient;
