import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Routes>
      <Route path="/" exact Component={ProductList}></Route>
      <Route path="/" exact Component={ProductDetails}></Route>
      <Route>404 Not Found</Route>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
