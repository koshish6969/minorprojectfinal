import "./App.css";
import OTP from "./form/otp";
import Header from "./headers/Header";
import HomePage from "./HomePage";
import Footer from "./Footer";
import PlusTwo from "./cards/PlusTwo";
import SignUp from "./form/SignUp";
import Login from "./form/login";
import AddBook from "./form/AddBook";
import Details from "./cards/Details";
import Bachelors from "./cards/Bachelors";
import School from "./cards/School";
import Entrance from "./cards/Entrance";
import Category from "./Category";
import About from "./About";
import Profilepage from "./profile/ProfilePage";
import UpdateBook from "./profile/UpdateBook";
import SearchHeader from "./SearchHeader";
import PriceFilter from "./cards/pricefilter";
import ProfilePageTwo from "./profile/UploaderProfile";
import AddedSucessfully from "./form/AddedSucessfully";
import PrivateComponent from "./privatecomponent";
import SearchResult from "./Search";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Update } from "@mui/icons-material";

function App() {
  window.scrollTo(0, 0);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/plustwoo" element={<PlusTwo />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addbook" element={<AddBook />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/bachelors" element={<Bachelors />}></Route>
        <Route path="/entrance" element={<Entrance />}></Route>
        <Route path="/school" element={<School />}></Route>
        <Route path="/categories" element={<Category />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profilepage />}></Route>
        <Route path="/otp" element={<OTP />}></Route>
        <Route path="/search" element={<SearchResult />}></Route>
        <Route path="/searchheader" element={<SearchHeader />}></Route>
        <Route path="/updatebook/:id" element={<UpdateBook />}></Route>
        <Route path="/pricefilter" element={<PriceFilter />}></Route>
        <Route path="/profilepagetwo" element={<ProfilePageTwo />}></Route>
        <Route path="/success" element={<AddedSucessfully />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
