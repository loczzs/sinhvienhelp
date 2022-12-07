import { Routes, Route } from "react-router-dom";
// import Home from "./modules/Home/pages/Home";
import Header from "./components/header/Header";
import Mainlayout from "./components/Mainlayout/Mainlayout";
import { lazy, Suspense } from "react";
import Loading from "./Loading/Loading";
const Post5 = lazy(() => import ("./modules/Post/Post5"))
const Post4 = lazy(() => import ("./modules/Post/Post4"))
const Post3 = lazy(() => import ("./modules/Post/Post3"))
const Post2 = lazy(() => import ("./modules/Post/Post2"))
const Post1 = lazy(() => import ("./modules/Post/Post1"))
const ThacMac = lazy(()=> import( "./modules/Extra/ThacMac"))
const DieuKhoan = lazy(() => import( "./modules/Extra/DieuKhoan"));
const Knowlege  = lazy(()=> import ( "./modules/Knowlege/Knowlege"));
const Listcityz = lazy(()=> import( "./modules/Listcity/Listcityz"));
const Request = lazy(()=>import("./modules/Request/Request"))
const Home = lazy(() => import("./modules/Home/pages/Home"));
function App() {
  return (
    <Suspense fallback={<Loading/>} > 
      <Routes>
      <Route path="/" element={<Mainlayout />}>
        {/* index: path của child route khớp 100% với path của parent route */}
        <Route index element={<Home />} />
        <Route path="request" element={<Request/>}/>
        <Route path="listcty" element={<Listcityz/>}/>
       
        <Route path="wonder" element={<ThacMac/>} />
        <Route path="rules" element = {<DieuKhoan/>}/>
        <Route path="know" element={<Knowlege/>} />
          
       
        <Route path="know/post1" element={<Post1/>} />
        <Route path="know/post2" element={<Post2/>} />
        <Route path="know/post3" element={<Post3/>} />
        <Route path="know/post4" element={<Post4/>} />
        <Route path="know/post5" element={<Post5/>} />
           
        
        
      </Route>
    </Routes>
    </Suspense>
    
  );
}

export default App;
