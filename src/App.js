import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/home/:username'>
                  <Home/>
              </Route>
              <Route exact path='/login'>
                  <Login/>
              </Route>
              <Route exact path='/register'>
                  <Register/>
              </Route>
              <Route exact path='/profile/:username'>
                  <Profile/>
              </Route>
          </Switch>
      </Router>
      // <Profile/>

  )
}

export default App;