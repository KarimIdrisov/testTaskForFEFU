import { combineReducers } from "redux";
import activePage from "./activePage";
import charts from "./charts";

export default combineReducers({
   activePage,
   charts
});