import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts} from "./actions";
import {loadVehicles} from "./actions";
import {loadComments} from "./actions";
import {loadProducts} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts() {
      dispatch(loadContacts());
    },
    loadVehicles() {
      dispatch(loadVehicles());
    },
    loadComments() {
      dispatch(loadComments());
    },
    loadProducts() {
      dispatch(loadProducts());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
