import logo from './logo.svg';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <BrowserRouter className="App">
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
