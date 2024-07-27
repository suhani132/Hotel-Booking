import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
 import Layout from "./layouts/Layout";
// import Register from "./pages/Register";
// import SignIn from "./pages/SignIn";
// import AddHotel from "./pages/AddHotel";
// import { useAppContext } from "./contexts/AppContext";
// import MyHotels from "./pages/MyHotels";
// import EditHotel from "./pages/EditHotel";
// import Search from "./pages/Search";
// import Detail from "./pages/Detail";
// import Booking from "./pages/Booking";
// import MyBookings from "./pages/MyBookings";
// import Home from "./pages/Home";

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={ 
          <Layout>
          <p>Home Page</p>
        </Layout>
       } />
       <Route path="/search" element={ 
          <Layout>
          <p>Search Page</p>
        </Layout>
       } />
      </Routes>
    </Router>
  );
};

export default App;