import './App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className='App'>
      <Header />
      <RegistrationForm />
      <Switch>
        <Route path='/main' component={Main} />
        <Route path='/cart' component={Cart} />
        <Redirect to='/main' />
      </Switch>
    </div>
  );
}

export default App;
