import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ScopusPage from "../pages/ScopusPage";
class Router extends React.Component {
   render() {
      // const { token, role, getUserInfo } = this.props;
      return (
         <HashRouter>
            <Switch>
               <Route exact path="/scopus" component={ScopusPage} />
               <Route exact path="/priority" component={PriorityPage} />
            </Switch>
         </HashRouter>
      );
   }
}

export default connect((state) => state.user, { getUserInfo })(Router);