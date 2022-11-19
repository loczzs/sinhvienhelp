CLI: npx create-react-app bc27-capstone-react --template typescript
Structure project:
Libraries:
    - API : axios
    - Router : react-router-dom
    - state mangement: @reduxjs/toolkit 
    - react-redux

-src/
    - playground/: dùng để demo một số tính năng
    - components/
        + Dùng để chứa các presentational componenets,là các component chỉ nhận vào
        props và dùng local-state để hiển thị UI, không chứa các xử lý logic của ứng dụng
        + VD: button,sidebar,header,footer,...

    - modules/<module-name>/
        
        + HomeModule: chứa các components cấu thành trang Home (Banner,Showing,Cinema,...)
        + AuthModule: chứa các components cho tính năng đăng nhập/ đăng ký (Login,Register,...)


        -modules/<module-name>//
            - components/: chứa các component chỉ sử dụng trong module Homecác components này sẽ có chứa
        các xử lý logic của ứng dụng (Call API,Redux,...)
            - pages/: Chứa các components cấu thành 1 page hoàn chỉnh ( được import và sử dụng bởi router )
            - slices/: Chứa các redux slices

    -apis/ : Setup axios, và các hàm gọi API
    - interface/: Định nghĩa các types cho dât của project (API,...)
    
    -store.ts:Setup redux store

        