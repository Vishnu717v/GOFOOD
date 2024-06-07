
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Signup from './screens/Signup';
import { CardProvider } from './components/ContextReducer';
import MyOrders from './screens/MyOrders';


function App() {
  return (
    <CardProvider>
    <Router>
<div>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/Login' element={<Login/>}/>
  <Route exact path='/createuser' element={<Signup/>}/>
  <Route exact path='/myOrder' element={<MyOrders/>}/>
</Routes>
</div>
</Router>
</CardProvider>
  );
 
}

export default App;
