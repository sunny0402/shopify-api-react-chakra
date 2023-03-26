import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Cart />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          {/* Note: put last or add "exact" after path */}
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
