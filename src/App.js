import './App.css';
import Home from './component/Home'
import Cart from './component/Cart'
import Contact from './component/Contact'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Cart' component={Cart}/>
      <Route path='/Contact' component={Contact}/>
    </Switch>
    </div>
  );
}

export default App;
