
import './App.css';
import Main from './component/Main/Main';
import NavBar from './component/Navbar/NavBar';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Upload from './component/Upload/Upload';
import Review from './component/Review/Review';
import Notice from './component/Notice/Notice';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/"element={<Main></Main>}></Route>
        <Route path="/register"element={<Register></Register>}></Route>
        <Route path="/login"element={<Login></Login>}></Route>
        <Route path="/upload"element={<Upload></Upload>}></Route>
        <Route path="/review"element={<Review></Review>}></Route>
        <Route path="/notice"element={<Notice></Notice>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
