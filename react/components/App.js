import {Redirect, Route,Switch} from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home'
import Navbar from './components/UserNav/UserNav';
import Cart from './components/Cart/Cart';
import Orders from './components/UserOrder/UserOrder';

import AddProduct from './components/admin/AddProduct/AddProduct';
import Orderlist from './components/admin/Orderlist/Orderlist';
import { Dashboard } from './components/admin/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Redirect to="/login" />
        </Route>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/home'  component={Home}/>
        <Route exact path='/navbar'  component={Navbar}/>
        <Route exact path='/cart'  component={Cart}/>
        <Route exact path='/orders'  component={Orders}/>
        <Route exact path='/admin'  component={Dashboard}/>
        <Route exact path='/admin/addProduct'  component={AddProduct}/>
        <Route exact path='/admin/orders'  component={Orderlist}/>
        
      </Switch>
      
    </div>
  );
}

export default App;
