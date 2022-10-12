import { Redirect, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader.js";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/products/:productName">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
