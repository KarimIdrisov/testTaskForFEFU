import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScopusPage from "../pages/ScopusPage";
import PriorityPage from "../pages/PriorityPage";

class Router extends React.Component {
   render() {
      return (
         <HashRouter>
            <Routes>
               <Route path="/" element={<ScopusPage />} />
               <Route path="/scopus" element={<ScopusPage />} />
               <Route path="/priority" element={<PriorityPage />} />
            </Routes>
         </HashRouter>
      );
   }
}

export default Router;