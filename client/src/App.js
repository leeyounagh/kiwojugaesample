import "./App.css";
import Main from "./component/Main/Main";
import NavBar from "./component/Navbar/NavBar";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import Upload from "./component/Upload/Upload";
import Review from "./component/Review/Review";
import Notice from "./component/Notice/Notice";
import UploadDetail from "./component/Upload/UploadDetail";
import SearchPet from "./component/SearchPet/SearchPet";
import MyPage from "./component/MyPage/MyPage";
import FindUser from "./component/Login/FindUser";
import FindPassword from "./component/Login/FindPassword";
import Community from "./component/Community/Community";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/upload" element={<Upload></Upload>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/notice" element={<Notice></Notice>}></Route>
        <Route
          path="/uploaddetail:id"
          element={<UploadDetail></UploadDetail>}
        ></Route>
        <Route path="/searchpet" element={<SearchPet></SearchPet>}></Route>
        <Route path="/mypage" element={<MyPage></MyPage>}></Route>
        <Route path="/finduser" element={<FindUser></FindUser>}></Route>
        <Route
          path="/findpassword"
          element={<FindPassword></FindPassword>}
        ></Route>

        {/* 태욱의 추가 */}
        <Route path="/community/adopt/*" element={<Community></Community>}>
          <Route path="*" element={<BoardSection></BoardSection>}></Route>
          <Route path="Writing" element={<Writing></Writing>}></Route>
        </Route>
        <Route
          path="/community/missing/*"
          element={<MissingCommunity></MissingCommunity>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
