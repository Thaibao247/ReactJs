import "./App.css";
import Register from "./features/Register";
import Login from "./features/Login";
import Menu from "./features/Menu";
import Header from "./components/header";
import TodoFeature from "./features/Todo";
import { Route, Switch, Redirect } from "react-router-dom";
import AlbumFeature from "./features/Album";
// import Home from "./pages/Home";
import Shopping from "./pages";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect exact from="/" to="/shopping" />
        <Route path="/shopping" component={Shopping} />
        <Route path="/cart" component={Cart} />
        <Route path="/menus" component={Menu} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>
    </div>
  );
}

export default App;
