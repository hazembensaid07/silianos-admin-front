import "./App.css";
import AddHotel from "./Components/AddHotel/AddHotel";
import AddTrip from "./Components/AddTrip/AddTrip";
import AdminLand from "./Components/AdminLand/AdminLand";
import AdminRequest from "./Components/AdminRequest/AdminRequest.js/AdminRequest";
import AdminList from "./Components/AdminRequestsList/AdminList";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import HotelDetails from "./Components/HotelDetails/HotelDetails";
import HotelList from "./Components/HotelList/HotelList";
import Login from "./Components/Login/Login";
import RessetPassword from "./Components/ResetPassword/RessetPassword";
import SignUp from "./Components/SignUp/SignUp";
import TripDetails from "./Components/TripDetails/TripDetails";
import TripList from "./Components/TripList/TripList";
import UpdateHotel from "./Components/UpdateHotel/UpdateHotel";
import UpdateTrip from "./Components/UpdateTrip/UpdateTrip";
import VoucherList from "./Components/VoucherList/VoucherList";
import { Route, Routes } from "react-router-dom";
import Error from "./Components/error";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/forgotpassword" exact element={<ForgotPassword />} />
        <Route path="/resetpassword" exact element={<RessetPassword />} />
        <Route path="/admin_dashboard" exact element={<AdminLand />} />
        <Route path="/admin_request" exact element={<AdminRequest />} />
        <Route path="/hotels" exact element={<HotelList />} />
        <Route path="/add_hotel" exact element={<AddHotel />} />
        <Route path="/hotel_details" exact element={<HotelDetails />} />
        <Route path="/update_hotel" exact element={<UpdateHotel />} />
        <Route path="/trips" exact element={<TripList />} />
        <Route path="/add_trip" exact element={<AddTrip />} />
        <Route path="/trip_details" exact element={<TripDetails />} />
        <Route path="/update_trip" exact element={<UpdateTrip />} />
        <Route path="/admin_list" exact element={<AdminList />} />
        <Route path="/voucher_list" exact element={<VoucherList />} />
        <Route path="/*" exact element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
