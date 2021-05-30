import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  generatePath,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCounter, getQuestions } from "./data/actions";
import { ROUTES } from "./routes";
import Home from "./component/Home";
import Admin from "./component/Admin";
import Result from "./component/Result";
import Login from "./component/Login";
import Signup from "./component/Signup";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state: any) => state.fetchUser);
  const routeUser = () => {
    Object.keys(user).length >= 0
      ? history.push(generatePath(ROUTES.HOME))
      : history.push(generatePath(ROUTES.LOGIN));
  };

  useEffect(() => {
    dispatch(getQuestions());
    dispatch(getCounter(0));
    // routeUser();
  });

  console.log("User Data", user);
  return (
    <Router>
      {Object.keys(user).length > 0 ? (
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route exact path={[ROUTES.HOME, ROUTES.SIGNUP]} component={Home} />
          <Route exact path={[ROUTES.HOME, ROUTES.LOGIN]} component={Home} />
          <Route exact path={ROUTES.ADMIN} component={Admin} />
          <Route exact path={ROUTES.RESULT} component={Result} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={[ROUTES.HOME, ROUTES.LOGIN]} component={Login} />
          <Route exact path={[ROUTES.SIGNUP]} component={Signup} />
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ADMIN} component={Admin} />
          <Route exact path={ROUTES.RESULT} component={Result} />
        </Switch>
      )}
    </Router>
  );
};

export default App;
