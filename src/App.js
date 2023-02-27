import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from './Pages/Homepage'
import AddProduct from './Pages/AddProduct'
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route path="/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
