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
import { Switch, Route } from "react-router-dom";
import Error from "./Components/error";
import Activate from "./Components/ActivateAccount/Activate";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/resetpassword/:token" component={RessetPassword} />
        <AdminRoute exact path="/admin_dashboard" component={AdminLand} />
        <UserRoute exact path="/admin_request" component={AdminRequest} />
        <AdminRoute exact path="/hotels" component={HotelList} />
        <AdminRoute exact path="/add_hotel" component={AddHotel} />
        <AdminRoute exact path="/hotel_details" component={HotelDetails} />
        <AdminRoute exact path="/update_hotel" component={UpdateHotel} />
        <AdminRoute exact path="/trips" component={TripList} />
        <AdminRoute exact path="/add_trip" component={AddTrip} />
        <AdminRoute exact path="/trip_details" component={TripDetails} />
        <AdminRoute exact path="/update_trip" component={UpdateTrip} />
        <Route exact path="/admin_list" component={AdminList} />
        <Route exact path="/admin_list/:id" component={AdminList} />
        <AdminRoute exact path="/voucher_list" component={VoucherList} />
        <Route exact path="/activate/:token" component={Activate} />
        <Route exact path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
