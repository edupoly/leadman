import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border border-5 border-success p-2'>
      <h1>Edupoly</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
